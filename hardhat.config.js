require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "kovan",
  networks: {
    hardhat: {},
    localhost: {},
    kovan: {
      url: "https://kovan.infura.io/v3/25ef01a5beaa424785dd92820a5a8cb5",
      accounts: [
        "f23ccde243586e0c97c75d792a11aa8f5e74170e223f4ceb27b8288d9ba7671d",
      ],
      saveDeployments: true,
    },
  },
  solidity: "0.7.3",
};
