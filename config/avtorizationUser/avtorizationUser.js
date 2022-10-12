import validation from '../validation/validation.js'
import drawProfile from '../drawProfile/drawProfile.js'
import drawFunction from '../drawFunction/drawFunction.js';

async function avtorizationUser(web3, contract, modals, modalAvtorization, modalRegistration, modalTransfers, conteiner, account){
    let buttonAvt = document.querySelector('.modal-button-enter');
	let buttonReg = document.querySelector('.modal-button-reg');
	let inputLogin = modalAvtorization.querySelector('.input-login');
	let inputPas = modalAvtorization.querySelector('.input-password');

    buttonAvt.onclick = async()=>{
		if(!validation(modalAvtorization)){
			let password = '0x' + keccak256(inputPas.value).toString('hex')
			let resp = await contract.methods.avtorization(inputLogin.value, password).call({from: inputLogin.value});
			if(resp){
				modals.style.display = 'none'
				modalAvtorization.style.display = 'none';
				conteiner.style.display = 'grid'
				account = inputLogin.value;
				inputLogin.value = '';
				inputPas.value = '';
				drawProfile(web3, contract, modals, modalAvtorization, modalTransfers, conteiner, account);
				drawFunction(contract, account);
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

export default avtorizationUser