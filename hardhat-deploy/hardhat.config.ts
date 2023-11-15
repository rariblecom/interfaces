import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-deploy';
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-truffle5";

import type { HttpNetworkUserConfig } from "hardhat/types";
import * as dotenv from 'dotenv';
import * as os from 'os';
import * as path from 'path';
import fs from 'fs';
import './tasks'

dotenv.config();

function getConfigPath() {
  const configPath = process.env["NETWORK_CONFIG_PATH"];
  if (configPath) {
    return configPath;
  } else {
    return path.join(os.homedir(), ".ethereum");
  }
}

function getNetworkApiKey(name: string): string {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return json.verify.apiKey;
  } else {
    // File doesn't exist in path
    return "xyz"
  }
}

function getNetworkApiUrl(name: string): string {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return json.verify.apiUrl;
  } else {
    // File doesn't exist in path
    return ""
  }
}

function getNetworkExplorerUrl(name: string): string {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return json.verify.explorerUrl;
  } else {
    // File doesn't exist in path
    return ""
  }
}

function createNetwork(name: string): HttpNetworkUserConfig {
  const configPath = path.join(getConfigPath(), name + ".json");
  if (fs.existsSync(configPath)) {
    var json = require(configPath);
    return {
      from: json.address,
      gasPrice: "auto",
      chainId: parseInt(json.network_id),
      url: json.url,
      accounts: [json.key],
      gas: "auto",
      saveDeployments: true,
    };
  } else {
    // File doesn't exist in path
    return {
      from: "0x0000000000000000000000000000000000000000",
      gas: 0,
      chainId: 0,
      url: "",
      accounts: [],
      gasPrice: 0
    };
  }
}

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          }
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: "byzantium"
        },
      },
    ],
    overrides: {
      "src/WETH9.sol": {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: "byzantium"
         }
      }
    },
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  paths: {
    sources: 'src',
  },
  networks: {
    hardhat: {},
    mainnet: createNetwork("mainnet"),
    polygon_mumbai: createNetwork("polygon_mumbai"),
    polygon_mainnet: createNetwork("polygon_mainnet"),
    polygon_dev: createNetwork("polygon_dev"),
    dev: createNetwork("dev"),
    goerli: createNetwork("goerli"),
    staging: createNetwork("staging"),
    polygon_staging: createNetwork("polygon_staging"),
    optimism_mainnet: createNetwork("optimism_mainnet"),
    optimism_goerli: createNetwork("optimism_goerli"),
    mantle_testnet: createNetwork("mantle_testnet"),
    mantle_mainnet: createNetwork("mantle_mainnet"),
    arbitrum_goerli: createNetwork("arbitrum_goerli"),
    arbitrum_sepolia: createNetwork("arbitrum_sepolia"),
    arbitrum_mainnet: createNetwork("arbitrum_mainnet"),
    zkatana_testnet: createNetwork("zkatana_testnet"),
    zkatana_mainnet: createNetwork("zkatana_mainnet"),
    chiliz_testnet: createNetwork("chiliz_testnet"),
    chiliz_mainnet: createNetwork("chiliz_mainnet"),
  },
  etherscan: {
    apiKey: {
      //   mainnet: getNetworkApiKey('mainnet'),
      //   polygon: getNetworkApiKey('polygon_mainnet'),
      //   mumbai: getNetworkApiKey('polygon_mumbai'),
      goerli: getNetworkApiKey('goerli'),
      mantle_mainnet: getNetworkApiKey('mantle_mainnet'),
      mantle_testnet: getNetworkApiKey('mantle_testnet'),
      arbitrum_sepolia: getNetworkApiKey('arbitrum_sepolia'),
    },
    customChains: [
      {
        network: "mantle_mainnet",
        chainId: createNetwork("mantle_mainnet").chainId!,
        urls: {
          apiURL: getNetworkApiUrl("mantle_mainnet"),
          browserURL: getNetworkExplorerUrl("mantle_mainnet")
        }
      },
      {
        network: "mantle_testnet",
        chainId: createNetwork("mantle_testnet").chainId!,
        urls: {
          apiURL: getNetworkApiUrl("mantle_testnet"),
          browserURL: getNetworkExplorerUrl("mantle_testnet")
        }
      },
      {
        network: "arbitrum_sepolia",
        chainId: createNetwork("arbitrum_sepolia").chainId!,
        urls: {
          apiURL: getNetworkApiUrl("arbitrum_sepolia"),
          browserURL: getNetworkExplorerUrl("arbitrum_sepolia")
        }
      }
    ]
  }
};

export default config;
