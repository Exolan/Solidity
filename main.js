import { abi } from "./config/abi/abi.js";
// const abi = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_recipient",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_id_cat",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "sum",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_code_word",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "_secure",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "add_trans",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_polz",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "answer",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "apl_admin_answer",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_polz",
// 				"type": "address"
// 			}
// 		],
// 		"name": "apl_change_status",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_id_trans",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_code_word",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "answer_recipient",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "recipient_answer",
// 		"outputs": [],
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_login",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bytes32",
// 				"name": "_password",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "registration",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "_id_trans",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "answer_admin",
// 				"type": "bool"
// 			}
// 		],
// 		"name": "secure_answer",
// 		"outputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "aplications",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "confrims",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "end",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_login",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bytes32",
// 				"name": "_password",
// 				"type": "bytes32"
// 			}
// 		],
// 		"name": "avtorization",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "categorys",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "id_cat",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name_cat",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "samples",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "id_samp",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "id_cat",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name_samp",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "sum",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "translates",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "id_trans",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "id_cat",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "sender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "recipient",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "sum",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "code_word",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "secure",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "admin_answer",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "polz_confrim",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "end",
// 				"type": "bool"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "attempts",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "users",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "login",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "bytes32",
// 				"name": "password",
// 				"type": "bytes32"
// 			},
// 			{
// 				"internalType": "bool",
// 				"name": "check_admin",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "viewCat",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "uint256",
// 						"name": "id_cat",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "name_cat",
// 						"type": "string"
// 					}
// 				],
// 				"internalType": "struct Perevod.Category[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "viewSamples",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "uint256",
// 						"name": "id_samp",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "id_cat",
// 						"type": "uint256"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "name_samp",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "uint256",
// 						"name": "sum",
// 						"type": "uint256"
// 					}
// 				],
// 				"internalType": "struct Perevod.Sample[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_polz",
// 				"type": "address"
// 			}
// 		],
// 		"name": "viewUser",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "address",
// 						"name": "login",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "bytes32",
// 						"name": "password",
// 						"type": "bytes32"
// 					},
// 					{
// 						"internalType": "bool",
// 						"name": "check_admin",
// 						"type": "bool"
// 					}
// 				],
// 				"internalType": "struct Perevod.User",
// 				"name": "",
// 				"type": "tuple"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]

const contractAddress = "0x708cAe7e366b021a26Be9159a164A7C061Cf4462";

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
	let inputLogin = modalAvtorization.querySelector('.input-login');
	let inputPas = modalAvtorization.querySelector('.input-password');

    buttonAvt.onclick = async()=>{
		if(!validation(modalAvtorization)){
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
				inputLogin.value = '';
				inputPas.value = '';
				drawProfile(account);
				drawFunction(account);
			}
		}
    }

	buttonReg.onclick = ()=>{
		for(let el of modalAvtorization.querySelectorAll('input')){
			el.style = 'border: 3px solid black';
		}
		inputLogin.value = '';
		inputPas.value = '';
		modalAvtorization.style.display = 'none';
		modalRegistration.style.display = 'grid';
	}
}
avtorizationUser()

async function registrationUser(){
	let buttonReg = document.querySelector('.modal-button-make');
	let buttonBack = document.querySelector('.modal-button-back');
	let inputLogin = modalRegistration.querySelector('.input-login');
    let inputPas = modalRegistration.querySelector('.input-password');
	let inputTryPas = modalRegistration.querySelector('.input-password-repeat');

	buttonReg.onclick = async ()=>{
		if(!validation(modalRegistration)){
			if(inputPas.value === inputTryPas.value){			
				// let password = web3.utils.hexToAscii(inputPas);
				let password = '0x' + keccak256(inputPas.value).toString('hex')
				let resp = await contract.methods.registration(inputLogin.value, password).send({from: inputLogin.value}, function(error, result){
					console.log(error);
					console.log(result);
					if(!error){
						modalRegistration.style.display = 'none';
						modalAvtorization.style.display = 'grid';
						inputLogin.value = '';
						inputPas.value = '';
						inputTryPas.value = '';
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
		inputLogin.value = '';
		inputPas.value = '';
		inputTryPas.value = '';
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

async function drawProfile(account){
	let user = await contract.methods.viewUser(account).call({from: account});
	
	let address = conteiner.querySelector('.address')
	let balance = conteiner.querySelector('.balance')
	let role = conteiner.querySelector('.role')
	let button = conteiner.querySelector('.button-exit')

	let getAd = document.createElement('p')
	getAd.textContent = account
	address.append(getAd)

	let getB = document.createElement('p')
	getB.textContent = await web3.utils.fromWei(await web3.eth.getBalance(account), 'ether')
	balance.append(getB)

	let getR = document.createElement('p')
	if(user[2]){
		getR.textContent = 'Админ'
	}
	else{
		getR.textContent = 'Пользователь'
	}
	role.append(getR)

	button.onclick = ()=>{
		conteiner.style.display = 'none';
		modalAvtorization.style.display = 'grid';
	}
}

async function drawFunction(user){
	let myFunction = document.querySelector('.my-function')
	if(user[2]){
		for(let i = 0; i <= 3; i++){
			let div = document.createElement('div')
			div.id = i
			myFunction.append(div)
		}
	}
	else{
		for(let i = 0; i <= 2; i++){
			let div = document.createElement('div')
			div.id = i
			myFunction.append(div)
		}
	}

	let divs = myFunction.querySelectorAll('div')
	
	for (let element of divs){
		switch(element.id){
			case '0': 
				let inputAddress = document.createElement('input')
				inputAddress.className = 'input-address'
				inputAddress.placeholder = 'Введите адрес получателя'
				let selectCat = document.createElement('select')
				let selectShablon = document.createElement('select')
				let inputMoney = document.createElement('input')
				inputMoney.className = 'input-money'
				inputMoney.placeholder = 'Введите сумму'
				let inputCodeW = document.createElement('input')
				inputCodeW.className = 'inpute-codeW'
				inputCodeW.placeholder = 'Введите кодовое слово'
				let inputDesc = document.createElement('input')
				inputDesc.className = 'input-desc'
				inputDesc.placeholder = 'Описание'
				let buttonSecure = document.createElement('div')
				buttonSecure.className = 'secure-button'
				let text = document.createElement('p')
				text.textContent = 'Безопасный перевод'
				let button = document.createElement('button')
				let buttonText = document.createElement('span')
				buttonText.textContent = 'Нет'
				button.append(buttonText)
				buttonSecure.append(text)
				buttonSecure.append(button)

				let category = await contract.methods.viewCat().call()
				let samples = await contract.methods.viewSamples().call()

				let i = 0;
				let activeCat;
				let activeSample;

				let clearOpt = document.createElement('option')
				let pOpt = document.createElement('p')
				pOpt.textContent = '-'
				clearOpt.append(pOpt)
				clearOpt.setAttribute('selected', 'selected')

				for(let key of category){
					let option = document.createElement('option')
					let p = document.createElement('p')

					option.id = i
					i++
					p.textContent = key[1]
					option.append(p)
					selectCat.append(option)
				}
				selectCat.append(clearOpt)

				selectCat.onchange = ()=>{
					while(selectShablon.firstChild){
						selectShablon.remove(selectShablon.firstChild)
					}
					activeCat = selectCat.selectedIndex;
					for(let key of samples){
						if(key[1] == activeCat){
							let option = document.createElement('option')
							let p = document.createElement('p')
							
							p.id = key[0]
							p.textContent = key[2] + ' ' + key[3]
							option.append(p)
							selectShablon.append(option)

							activeSample = selectShablon.selectedIndex;
							let options = selectShablon.querySelectorAll('option')
							let op = options[activeSample].querySelector('p')
							for(let key of samples){
								if(key[1] == activeCat & key[0] == op.id){
									inputMoney.value = key[3]
									inputMoney.setAttribute('disabled', 'true')
								}
							}
						}
						else if(activeCat == 3){
							inputMoney.removeAttribute('disabled')
						}
					}
				}

				selectShablon.onchange = ()=>{
					activeSample = selectShablon.selectedIndex;
					let options = selectShablon.querySelectorAll('option')
					let p = options[activeSample].querySelector('p')
					for(let key of samples){
						if(key[1] == activeCat & key[0] == p.id){
							inputMoney.value = key[3]
							console.log(1);
							inputMoney.setAttribute('disabled', 'true')
						}
						else if(activeCat == 3){
							inputMoney.removeAttribute('disabled')
						}
					}
					
				}

				// selectCat.addEventListener('change', changeOption(samples, selectShablon, selectCat))

				// console.log(category);
				// console.log(samples);
				element.append(inputAddress)
				element.append(selectCat)
				element.append(selectShablon)
				element.append(inputMoney)				
				element.append(inputCodeW)
				element.append(inputDesc)
				element.append(buttonSecure)
		}
	}
}

// function changeOption(samples, selectShablon, selectCat){
// 	let cats = selectCat.querySelectorAll('option')
// 	console.log(cats);
// 	let index = selectCat.selectedIndex;
// 	for(let key of samples){
// 		if(samples[1] == index){
// 			let option = document.createElement('option')
// 			let p = document.createElement('p')
		
// 			p.textContent = key[2]
// 			option.append(p)
// 			selectShablon.append(option)
// 		}
// 	}
// }

// function user(address){
// 	return contract.methods.viewUser(address).call()
// }
// user('0x629f17d21a524f513726e052a36fa6CC9350f903');


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
