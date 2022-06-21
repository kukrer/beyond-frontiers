import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import * as dotenv from 'dotenv';
import { HardhatUserConfig, task } from 'hardhat/config';
import { HardhatRuntimeEnvironment, TaskArguments } from 'hardhat/types';
require("@nomiclabs/hardhat-etherscan");

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task(
  'accounts',
  'Prints the list of accounts',
  async (
    taskArgs: TaskArguments,
    hre: HardhatRuntimeEnvironment
  ): Promise<void> => {
    const accounts: SignerWithAddress[] = await hre.ethers.getSigners();

    for (const account of accounts) {
      console.log(account.address);
    }
  }
);

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const {
  MATIC_TEST_API_URL = 'https://matic-mumbai.chainstacklabs.com',
  MUMBAI_ACCOUNT_PRIVATE_KEY = '',
  MAINNET_ACCOUNT_PRIVATE_KEY = '',
  ETHERSCAN_API_KEY = '',
  REPORT_GAS
} = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  defaultNetwork: 'hardhat',
  networks: {
    matic_mumbai: {
      url: MATIC_TEST_API_URL,
      accounts: [MUMBAI_ACCOUNT_PRIVATE_KEY]
    },
    matic_mainnet: {
      url: 'https://polygon-rpc.com',
      accounts: [MAINNET_ACCOUNT_PRIVATE_KEY]
    },
    localhost: {
      url: 'http://localhost:8545'
    }
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 200000 // 200 seconds max for running tests
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5'
  },
  gasReporter: {
    enabled: REPORT_GAS !== undefined,
    currency: 'USD',
    outputFile: 'gas-report.txt',
    noColors: true
  }
};

export default config;
