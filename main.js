import { abi } from "./modules/abi.js";
import modalAvtorization from './modules/modalAvtorization.js'

let contractAddress = '0x87244edD61915Ef227B558ca0BC3255Fc5409655'

let web3, contract, addressAccount;

function network() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    contract = new web3.eth.Contract(abi, contractAddress);
}
network()

modalAvtorization(contract, addressAccount, web3)