import validation from '../validation/validation.js'

async function registrationUser(contract, modals, modalAvtorization, modalRegistration){
	let buttonReg = document.querySelector('.modal-button-make');
	let buttonBack = document.querySelector('.modal-button-back');
	let inputLogin = modalRegistration.querySelector('.input-login');
    let inputPas = modalRegistration.querySelector('.input-password');
	let inputTryPas = modalRegistration.querySelector('.input-password-repeat');

	buttonReg.onclick = async ()=>{
		if(!validation(modalRegistration)){
			if(inputPas.value === inputTryPas.value){			
				let password = '0x' + keccak256(inputPas.value).toString('hex')
				let resp = await contract.methods.registration(inputLogin.value, password).send({from: inputLogin.value}, function(error, result){
					console.log(error);
					console.log(result);
					if(!error){
						modals.style.display = 'none'
						modalRegistration.style.display = 'none';
						modalAvtorization.style.display = 'grid';
						inputLogin.value = '';
						inputPas.value = '';
						inputTryPas.value = '';
					}
				});
				console.log(resp);
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

export default registrationUser