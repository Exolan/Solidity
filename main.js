import { abi } from "./config/abi/abi.js";

const contractAddress = "0x44e9116C28Ab842cEe410Bb5678FC03C3D6469C5";

let web3, contract, modalAvtorization, modalRegistration, modalTransfers, conteiner, account;

modalAvtorization = document.querySelector('.modal-avtorization');
modalRegistration = document.querySelector('.modal-registration');
modalTransfers = document.querySelector('.modal-transfers')
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
	let buttonExit = conteiner.querySelector('.button-exit')
	let buttonTrans = conteiner.querySelector('.button-trans')

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

	buttonTrans.onclick = ()=>{
		modalTransfers.style.display = "grid"
		conteiner.style.opacity = '0.6';
		drawTrans(account)
	}

	buttonExit.onclick = ()=>{
		modalAvtorization.style.display = 'grid';
	}
}

async function drawTrans(account){
	let array = await contract.methods.viewTrans().call({from: account})
	console.log(array);

	let i = 1
	for (let el of array){
		if(el[2] == account){
			let div = document.createElement('div')
			let num = document.createElement('div')
			let h3 = document.createElement('h3')
			let address = document.createElement('div')
			let category = document.createElement('div')
			let money = document.createElement('div')
			h3.textContent = i
			i++

		}
	}
}

async function addTrans(address, select, id_cat,  money, code_word, description, secure){
	let array = [address, code_word]
	let check = true
	for(let i of array){
		if (i.value == ""){
			i.style.border = "2px solid red"
			check = false
		}
		else{
			i.style.border = "none"
		}
	}

	if (id_cat == 3){
		check = false
		select.style.border = "2px solid red"
	}
	else{
		select.style.border = "none"
	}
	if(check){
		await contract.methods.add_trans(address.value, id_cat, money, code_word.value, description, secure).send({from:account, value: money, gas: "99999999"})
	}
	
}

async function drawTrFunction(element){
	let header = document.createElement('header')
	header.className = 'function-header'

	let h3 = document.createElement('h3')
	h3.textContent = 'Перевод'
	header.append(h3)

	let divButton = document.createElement('div')
	divButton.className = 'button-confrim'

	let buttonConfrim = document.createElement('button')
	let textButtonConfrim = document.createElement('span')
	textButtonConfrim.textContent = 'Отправить'
	buttonConfrim.append(textButtonConfrim)
	divButton.append(buttonConfrim)

	let div = document.createElement('div')
	div.className = 'body-function'

	let inputAddress = document.createElement('input')
	inputAddress.className = 'input-address'
	inputAddress.placeholder = 'Введите адрес'

	let selectCat = document.createElement('select')
	let selectShablon = document.createElement('select')

	let money = document.createElement('input')
	money.placeholder = 'Введите сумму'

	let inputCodeW = document.createElement('input')
	inputCodeW.className = 'inpute-codeW'
	inputCodeW.placeholder = 'Введите код-слово'

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

	let statusTransfer = false

	button.onclick = ()=>{
		if (button.textContent == 'Нет'){
			button.style = "background-color: aquamarine"
			button.textContent = 'Да'
			statusTransfer = true
		}
		else{
			button.style = "background-color: rgb(240, 108, 108)"
			button.textContent = 'Нет'
			statusTransfer = false
		}
	}

	button.append(buttonText)
	buttonSecure.append(text)
	buttonSecure.append(button)

	let category = await contract.methods.viewCat().call()
	let samples = await contract.methods.viewSamples().call()

	let i = 0;
	let activeCat = 3;
	let activeSample;
	let sample;

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

	if(activeCat == 3){
		money.setAttribute('disabled', 'disabled')
		selectShablon.setAttribute('disabled', 'disabled')
	}

	selectCat.onchange = ()=>{
		while(selectShablon.firstChild){
			selectShablon.remove(selectShablon.firstChild)
		}
		activeCat = selectCat.selectedIndex;
		for(let key of samples){
			if(key[1] == activeCat){
				money.removeAttribute('disabled')
				selectShablon.removeAttribute('disabled')
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
						money.value = key[3]
						sample = op.id
					}
					else if (options[activeSample].textContent == "-"){
						money.removeAttribute('disabled')
					}
					else{
						money.setAttribute('disabled', 'disabled')
					}
				}
			}
			else if(activeCat == 3){
				money.setAttribute('disabled', 'disabled')
				selectShablon.setAttribute('disabled', 'disabled')
			}
		}
		selectShablon.append(clearOpt)
	}

	selectShablon.onchange = ()=>{
		activeSample = selectShablon.selectedIndex;
		let options = selectShablon.querySelectorAll('option')
		let p = options[activeSample].querySelector('p')
		for(let key of samples){
			if(key[1] == activeCat & key[0] == p.id){
				money.value = key[3]
				sample = p.id
			}
			else if (options[activeSample].textContent == "-"){
				money.removeAttribute('disabled')
			}
			else{
				money.setAttribute('disabled', 'disabled')
			}
		}			
	}

	buttonConfrim.onclick = ()=>{
		addTrans(inputAddress, selectCat, activeCat, money.value, inputCodeW, inputDesc.value, statusTransfer)
		inputAddress.value = ''
		money.value = ""
		inputCodeW.value = ""
		inputDesc.value = ""
		statusTransfer = false
	}

	element.append(header)
	div.append(inputAddress)
	div.append(selectCat)
	div.append(selectShablon)	
	div.append(money)	
	div.append(inputCodeW)
	div.append(inputDesc)
	div.append(buttonSecure)
	element.append(div)
	element.append(divButton)
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
				drawTrFunction(element)
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
