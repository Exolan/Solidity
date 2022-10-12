import drawTrans from '../drawTrans/drawTrans.js'

async function drawProfile(web3, contract, modals, modalAvtorization, modalTransfers, conteiner, account){
	let user = await contract.methods.viewUser(account).call({from: account});
	let profile = conteiner.querySelector('.profile')
	let getR
	let sum = await web3.utils.fromWei(await web3.eth.getBalance(account), 'ether')

	if(user[2]){
		getR = 'Админ'
	}
	else{
		getR = 'Пользователь'
	}

	profile.innerHTML = `
		<div class="address">
			<p>Адрес</p>
			<p>${account}</p>
		</div>
		<div class="balance">
			<p>Баланс</p>
			<p>${Number(sum).toFixed(4)} Eth</p>
		</div>
		<div class="role">
			<p>Роль</p>
			<p>${getR}</p>
		</div>
		<div class='trans'>
			<button class="button-trans">Переводы</button>
		</div>
		<div class="exit">
			<button class="button-exit"><span>Выйти</span></button>
		</div>`

	let buttonTrans = profile.querySelector('.button-trans')
	let buttonExit = profile.querySelector('.button-exit')

	buttonTrans.onclick = ()=>{
		modals.style.display = 'flex'
		modalTransfers.style.display = "grid"
		drawTrans(contract, modals, modalTransfers, account)
	}

	buttonExit.onclick = ()=>{
		let myFunction = document.querySelector('.my-function')
		myFunction.innerHTML = ``
		profile.innerHTML = ``
		conteiner.style.display = 'none'
		modals.style.display = 'grid'
		modalAvtorization.style.display = 'grid';
	}
}

export default drawProfile