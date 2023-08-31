// https://eth-goerli.g.alchemy.com/v2/At_1zGhwnfI7EPKETQpK5l6Dzxqm-fvA

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/At_1zGhwnfI7EPKETQpK5l6Dzxqm-fvA',
      accounts: ['06afdf752ad02a50d75ea021f92882d6f875e3eba40fb2acd5ca938eb7ca6230']
    }
  }
}