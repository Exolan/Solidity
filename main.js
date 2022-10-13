import { abi } from "./config/abi/abi.js";
import avtorizationUser from "./config/avtorizationUser/avtorizationUser.js";
import registrationUser from "./config/registrationUser/registrationUser.js";

const contractAddress = "0xba5a3867E53216a393D2Ffbd2a447Cd3D25aFB3F";

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
