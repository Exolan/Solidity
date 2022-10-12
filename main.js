import { abi } from "./config/abi/abi.js";
import avtorizationUser from "./config/avtorizationUser/avtorizationUser.js";
import registrationUser from "./config/registrationUser/registrationUser.js";

const contractAddress = "0xfE3258f6f05e50943015ECE979B301A8E2b73dD8";

let web3, contract, modals, modalAvtorization, modalRegistration, modalTransfers, conteiner, account;

modals = document.querySelector('.modals')
modalAvtorization = document.querySelector('.modal-avtorization');
modalRegistration = document.querySelector('.modal-registration');
modalTransfers = document.querySelector('.modal-transfers')
conteiner = document.querySelector('.conteiner');


function network() {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	contract = new web3.eth.Contract(abi, contractAddress);
}
network();

avtorizationUser(web3, contract, modals, modalAvtorization, modalRegistration, modalTransfers, conteiner, account)

registrationUser(contract, modals, modalAvtorization, modalRegistration)
