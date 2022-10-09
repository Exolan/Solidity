// import { abi } from "./config/abi/abi";
const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id_cat",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_code_word",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_secure",
				"type": "bool"
			}
		],
		"name": "add_trans",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_trans",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_code_word",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "answer_recipient",
				"type": "bool"
			}
		],
		"name": "recipient_answer",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_password",
				"type": "bytes32"
			}
		],
		"name": "registration",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id_trans",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "answer_admin",
				"type": "bool"
			}
		],
		"name": "secure_answer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "aplications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "confrims",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "_password",
				"type": "bytes32"
			}
		],
		"name": "avtorization",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "categorys",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_cat",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_cat",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "samples",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_samp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_cat",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name_samp",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "translates",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_trans",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_cat",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "sum",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "code_word",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "secure",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "admin_answer",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "polz_confrim",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "end",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "attempts",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "address",
				"name": "login",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "password",
				"type": "bytes32"
			},
			{
				"internalType": "bool",
				"name": "check_admin",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_polz",
				"type": "address"
			}
		],
		"name": "viewUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "login",
						"type": "address"
					},
					{
						"internalType": "bytes32",
						"name": "password",
						"type": "bytes32"
					},
					{
						"internalType": "bool",
						"name": "check_admin",
						"type": "bool"
					}
				],
				"internalType": "struct Perevod.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0xA464829D218612Fffb3E558C4d1472dbCb344bB4";

let web3, contract, modalAvtorization, modalRegistration, conteiner, account;

modalAvtorization = document.querySelector('.modal-avtorization');
modalRegistration = document.querySelector('.modal-registration');
conteiner = document.querySelector('.conteiner');


function network() {
	web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
	contract = new web3.eth.Contract(abi, contractAddress);
}
network();

async function avtorizationUser(){
    let buttonAvt = document.querySelector('.modal-button-enter');
	let buttonReg = document.querySelector('.modal-button-reg');

    buttonAvt.onclick = async()=>{
		if(!validation(modalAvtorization)){
			let inputLogin = modalAvtorization.querySelector('.input-login');
    		let inputPas = modalAvtorization.querySelector('.input-password');
			// let password = keccak256(inputPas.value).toBuffer('hex');
			let password = '0x' + keccak256(inputPas.value).toString('hex')
			console.log(password);
			console.log(typeof(password));
			let resp = await contract.methods.avtorization(inputLogin.value, password).call({from: inputLogin.value});
			console.log(resp);
			if(resp){
				modalAvtorization.style.display = 'none';
				conteiner.style.display = 'grid'
				account = inputLogin.value;
			}
		}
    }

	buttonReg.onclick = ()=>{
		for(let el of modalAvtorization.querySelectorAll('input')){
			el.style = 'border: 3px solid black';
		}
		modalAvtorization.style.display = 'none';
		modalRegistration.style.display = 'grid';
	}
}
avtorizationUser()

async function registrationUser(){
	let buttonReg = document.querySelector('.modal-button-make');
	let buttonBack = document.querySelector('.modal-button-back');

	buttonReg.onclick = async ()=>{
		if(!validation(modalRegistration)){

			let inputLogin = modalRegistration.querySelector('.input-login');
    		let inputPas = modalRegistration.querySelector('.input-password');
			let inputTryPas = modalRegistration.querySelector('.input-password-repeat');
			if(inputPas.value === inputTryPas.value){			
				// let password = web3.utils.hexToAscii(inputPas);
				let password = '0x' + keccak256(inputPas.value).toString('hex')
				let resp = await contract.methods.registration(inputLogin.value, password).send({from: inputLogin.value}, function(error, result){
					console.log(error);
					console.log(result);
					if(!error){
						modalRegistration.style.display = 'none';
						modalAvtorization.style.display = 'grid';
					}
				});
				console.log(resp);
				// user(inputLogin.value);
			}
			else{
				inputTryPas.style = 'border: 3px solid red';
			}
		}
	}

	buttonBack.onclick = ()=>{
		for(let el of modalRegistration.querySelectorAll('input')){
			el.style = 'border: 3px solid black';
		}
		modalRegistration.style.display = 'none';
		modalAvtorization.style.display = 'grid';
	}
}
registrationUser()

function checkValueInput(value){
	if(value.length == 0){
		return true;
	}
	else{
		return false;
	}
}

function validation(element){
	let inputs = element.querySelectorAll('input')
	let check = false;
	for (let index = 0; index < inputs.length; index++) {
		if(checkValueInput(inputs[index].value)){
			inputs[index].style = 'border: 3px solid red';
			check = true;
		}
		else{
			inputs[index].style = 'border: 3px solid black';
		}
	}
	return check;
}

// async function user(address){
// 	console.log(await contract.methods.viewUser(address).call())
// }

// user('0x4a0EdB0e25808e4F5a036B3b398d1b557d8A8782');
// function getFunction(){
// 	let myFunction = conteinerMain.querySelector('.my-function')
// 	let addTrans = document.createElement('button')
// 	let span = document.createElement('span')
// 	span.textContent = 'Перевод'
// 	addTrans.className = 'function'
// 	addTrans.append(span)
// 	myFunction.append(addTrans)
// }
// getFunction()
