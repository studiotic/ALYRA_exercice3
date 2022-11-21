const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {

  //on vient déployer le smart contrat et on va recuperer
  //l'artefact du contra et on le place à l'intérieur du client
  // pour que react puisse accéder à l'artefact

  contracts_build_directory: "../client/src/contracts",

  networks: {
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "*",       // Any network (default: none)
    //},
    
    goerli: {
      provider: () => { return new HDWalletProvider({ mnemonic: { phrase: `${process.env.MNEMONIC}` }, providerOrUrl: `https://goerli.infura.io/v3/${process.env.INFURA_ID}` }) },
      network_id: 5,       // Goerli's network id
      // chain_id: 5,         // Goerli's chain id
      // gas: 5500000,        // Gas limit used for deploys.
      // confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets)
    }
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.17",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },


};
