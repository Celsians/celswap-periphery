const UniswapV2Router02 = artifacts.require("UniswapV2Router02");

require('dotenv').config();
const factoryAddress = process.env.FACTORY_CONTRACT_ADDRESS;
const wethAddress = process.env.WETH_CONTRACT_ADDRESS;

module.exports = function(deployer) {
    deployer.deploy(UniswapV2Router02, factoryAddress, wethAddress);
};
