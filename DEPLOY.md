# Deployment procedure

To deploy Celswap periphery contracts follow these steps:
- Load your Ethereum account with ETH.
- Create `.env` file from `.env.example`, and modify it:
    - Replace `INFURA_ID` with your Project ID from [Infura](https://infura.io/)
    - Replace `PRIVATE_KEY` with private key of your address with ETH on it
    - Replace `WETH_CONTRACT_ADDRESS` with the contract address of the WETH token
    - Replace `FACTORY_CONTRACT_ADDRESS` with the address of the Factory contract
    - [optional] If you’ve made changes to the `UniswapV2Pair` contract calculate init code hash and update it in `UniswapV2Library`
- Install dependencies: `yarn install`
- Compile smart contracts: `truffle compile`
- Deploy smart contracts (choose network from truffle-config.js): `truffle migrate --network <NETWORK>`