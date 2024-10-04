import hre from "hardhat"
import "@nomiclabs/hardhat-ethers"
import {
	EIP173Proxy,
	EIP173Proxy__factory,
	IDrop,
	OpenEditionERC721RariFee,
	OpenEditionERC721RariFee__factory,
	RariFeesConfigProvider,
} from "../typechain-types"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { expect } from "chai"
import { randomAddress } from "hardhat/internal/hardhat-network/provider/utils/random"
import { RariFeesDrop } from "../typechain-types/contracts/final/OpenEditionERC721RariFee"
import FeesStruct = RariFeesDrop.FeesConfigStruct
import { zeroAddress } from "ethereumjs-util"

type AllowlistProofStruct = IDrop.AllowlistProofStruct

describe("OpenEditionERC721RariFee", () => {
	let feesConfigProvider: RariFeesConfigProvider
	let factory: OpenEditionERC721RariFee__factory
	let impl: OpenEditionERC721RariFee
	let proxyFactory: EIP173Proxy__factory
	let proxy: EIP173Proxy
	let drop: OpenEditionERC721RariFee
	let first: SignerWithAddress
	let signers: SignerWithAddress[]
	let protocolRecipient: string
	let creatorFinderFeeRecipient1: string
	let creatorFinderFeeRecipient2: string
	let buyerFinderFeeRecipient1: string
	let buyerFinderFeeRecipient2: string

	before(async () => {
		const configFactory = await hre.ethers.getContractFactory("RariFeesConfigProvider")
		feesConfigProvider = await configFactory.deploy(zeroAddress())

		signers = await hre.ethers.getSigners()
		first = signers[0]

		factory = await hre.ethers.getContractFactory("OpenEditionERC721RariFee")
		impl = await factory.deploy()
		proxyFactory = await hre.ethers.getContractFactory("EIP173Proxy")
	})

	beforeEach(async () => {
		proxy = await proxyFactory.deploy(impl.address, first.address, "0x")
		drop = factory.attach(proxy.address)

		protocolRecipient = randomAddress().toString()
		creatorFinderFeeRecipient1 = randomAddress().toString()
		creatorFinderFeeRecipient2 = randomAddress().toString()
		buyerFinderFeeRecipient1 = randomAddress().toString()
		buyerFinderFeeRecipient2 = randomAddress().toString()
	})

	it("should send buyerFee to protocol if not specified", async () => {
		await prepareDropContract()

		await drop.claim(signers[5].address, 1, ETH_CURRENCY, 1000000000, proof(), "0x", {
			value: 1000000000
		})

		await expect(getBalance(protocolRecipient)).eventually.to.equal(300)
		await expect(getBalance(buyerFinderFeeRecipient1)).eventually.to.equal(0)
		await expect(getBalance(buyerFinderFeeRecipient2)).eventually.to.equal(0)
		await expect(getBalance(creatorFinderFeeRecipient1)).eventually.to.equal(150)
		await expect(getBalance(creatorFinderFeeRecipient2)).eventually.to.equal(0)
	})

	it("should send buyerFee to 1 recipient", async () => {
		await prepareDropContract()

		const data = `0x${buyerFinderFeeRecipient1.substring(2)}000000000000000000002710`
		await drop.claim(signers[5].address, 1, ETH_CURRENCY, 1000000000, proof(), data, {
			value: 1000000000
		})

		await expect(getBalance(protocolRecipient)).eventually.to.equal(100)
		await expect(getBalance(buyerFinderFeeRecipient1)).eventually.to.equal(200)
		await expect(getBalance(buyerFinderFeeRecipient2)).eventually.to.equal(0)
		await expect(getBalance(creatorFinderFeeRecipient1)).eventually.to.equal(150)
		await expect(getBalance(creatorFinderFeeRecipient2)).eventually.to.equal(0)
	})

	it("should send buyerFee to 2 recipients", async () => {
		await prepareDropContract()

		const data = `0x${buyerFinderFeeRecipient1.substring(2)}000000000000000000001770${buyerFinderFeeRecipient2.substring(2)}000000000000000000000FA0`
		await drop.claim(signers[5].address, 1, ETH_CURRENCY, 1000000000, proof(), data, {
			value: 1000000000
		})

		await expect(getBalance(protocolRecipient)).eventually.to.equal(100)
		await expect(getBalance(buyerFinderFeeRecipient1)).eventually.to.equal(120)
		await expect(getBalance(buyerFinderFeeRecipient2)).eventually.to.equal(80)
		await expect(getBalance(creatorFinderFeeRecipient1)).eventually.to.equal(150)
		await expect(getBalance(creatorFinderFeeRecipient2)).eventually.to.equal(0)
	})

	it("should revert if price less than fees", async () => {
		const price = 100
		await prepareDropContract({ pricePerToken: price })
		await expect(drop.claim(signers[5].address, 1, ETH_CURRENCY, price, proof(price), "0x", overrides(1000000)))
		 	.to.eventually.be.rejectedWith("price less than fees")
	})

	it("should revert if total bps != 10000 for buyer finder fee", async () => {
		const price = 1000000
		await prepareDropContract({ pricePerToken: price })

		const data = `0x${buyerFinderFeeRecipient1.substring(2)}000000000000000000002700`

		await expect(drop.claim(signers[5].address, 1, ETH_CURRENCY, price, proof(price), data, overrides(1000000)))
			.to.eventually.be.rejectedWith("!BuyerFeeBpsNot10000")
	})

	it("should revert if total bps != 10000 for creator finder fee", async () => {
		const config = {}
		await feesConfigProvider.setRecipient(protocolRecipient)
		await feesConfigProvider.setFee(ETH_CURRENCY, 100)
		const p = initialize(
			{
				creatorFinderFee: 150,
				creatorFinderFeeRecipient1: {
					recipient: creatorFinderFeeRecipient1,
					value: 5000,
				},
				creatorFinderFeeRecipient2: {
					recipient: creatorFinderFeeRecipient2,
					value: 10000,
				},
				buyerFinderFee: 200,
			}, config
		)

		await expect(p).to.eventually.be.rejectedWith("!CreatorFeeBpsNot10000")
	})

	type DropContractsConfig = {
		protocolFee?: number
		secondCreatorFinderFeeBps?: number
		pricePerToken?: number
	}

	async function prepareDropContract(config?: DropContractsConfig) {
		config = config || {}
		await feesConfigProvider.setRecipient(protocolRecipient)
		await feesConfigProvider.setFee(ETH_CURRENCY, config.protocolFee || 100)
		await initialize(
			{
				creatorFinderFee: 150,
				creatorFinderFeeRecipient1: {
					recipient: creatorFinderFeeRecipient1,
					value: 10000 - (config.secondCreatorFinderFeeBps || 0),
				},
				creatorFinderFeeRecipient2: {
					recipient: creatorFinderFeeRecipient2,
					value: (config.secondCreatorFinderFeeBps || 0),
				},
				buyerFinderFee: 200,
			}, config
		)
	}

	async function initialize(fees: FeesStruct, config: DropContractsConfig) {
		await drop.initialize(
			first.address,
			"TST",
			"TST",
			"uri",
			[],
			signers[1].address,
			signers[2].address,
			1000,
			feesConfigProvider.address,
			fees,
		)

		await drop.setSharedMetadata({
			name: "TST",
			description: "TST",
			imageURI: "image",
			animationURI: "animation",
		})

		await drop.setClaimConditions([
			{
				startTimestamp: 0,
				maxClaimableSupply: 1000000,
				supplyClaimed: 0,
				quantityLimitPerWallet: 1000000,
				merkleRoot: "0x0000000000000000000000000000000000000000000000000000000000000000",
				pricePerToken: config.pricePerToken || 1000000000,
				currency: ETH_CURRENCY,
				metadata: "ipfs://QmVu98eczZRpSYcF3UKYRDkHsM2RMQR62KUYmk29UDbWTP/0"
			}
		], false)
	}

	function getBalance(address: string) {
		return hre.ethers.provider.getBalance(address)
	}
})

const ETH_CURRENCY = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"

function proof(price: number = 1000000000): AllowlistProofStruct {
	return {
		proof: ["0x0000000000000000000000000000000000000000000000000000000000000000"],
		currency: ETH_CURRENCY,
		pricePerToken: price,
		quantityLimitPerWallet: 1000000
	}
}

function overrides(value: number) {
	return { value }
}