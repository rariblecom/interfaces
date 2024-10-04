import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
	console.log(`deploying contracts on network ${hre.network.name}`)

	const { deploy } = hre.deployments;
	const { deployer } = await hre.getNamedAccounts();

	console.log("deploying contracts with the account:", deployer);

	await deploy("RariFeesConfigProvider", {
		from: deployer,
		autoMine: true,
		log: true,
		args: ["0x0000000000000000000000000000000000000000"]
	})
}
export default func
func.tags = ['deploy-rari-fees-config-simple']