import { abi } from "./modules/abi.js";
import modalAvtorization from './modules/modalAvtorization.js'

let contractAddress = '0x39Dbe1adea015C26750afB9827D2b40Ea975DeE0'

let web3, contract, addressAccount;

function network() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    contract = new web3.eth.Contract(abi, contractAddress);
}
network()

modalAvtorization(contract, addressAccount, web3)