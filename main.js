import { abi } from "./modules/abi.js";
import modalAvtorization from './modules/modalAvtorization.js'

let contractAddress = '0x6FE8087b5CFB88A0887440847fCae8548D9faD84'

let web3, contract, addressAccount;

function network() {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    contract = new web3.eth.Contract(abi, contractAddress);
}
network()

modalAvtorization(contract, addressAccount, web3)