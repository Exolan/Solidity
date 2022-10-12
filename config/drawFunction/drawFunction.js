import drawTrFunction from "../drawTrFunction/drawTrFunction.js"

async function drawFunction(contract, account){
	let myFunction = document.querySelector('.my-function')
	let user = await contract.methods.viewUser(account).call()
	let status = user[2]

	if(status){
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
				drawTrFunction(element, contract, account)
				break;
			case '1':
				drawChangeRoleFunction(element, contract, account, status)
				break;
		}
	}
}

export default drawFunction

async function drawChangeRoleFunction(element, contract, account, status){
	console.log(status);
	if(status){
		let arrayApl = await contract.methods.viewAplications().call()
		console.log(arrayApl);

		drawRoleFunctionAdmin(element, arrayApl)

		let buttonsConfrim = document.querySelector('.buttons-confrim')
		let arrayButtons = buttonsConfrim.querySelectorAll('button')

		for(let button of arrayButtons){
			if(button.textContent == 'Принять'){
				button.onclick = async ()=>{
					await contract.methods.apl_admin_answer(button.id, true).send({from: account, gas: '999999999'})
					arrayApl = await contract.methods.viewAplications().call()
					drawRoleFunctionAdmin(element, arrayApl)
				}
			}
		}
	}
	else{
		let arrayApl = await contract.methods.viewAplications().call()

		drawRoleFunctionUser(element, arrayApl, account)

		let button = document.querySelector('.button-send')

		button.onclick = async ()=>{
			await contract.methods.apl_change_status().send({from: account})
			element.innerHTML = ``
			arrayApl = await contract.methods.viewAplications().call()
			drawRoleFunctionUser(element, arrayApl, account)
		}
	}
}

function drawRoleFunctionAdmin(element, arrayApl){
	let view = ``
	let status

	for(let aplication of arrayApl){
		if(!aplication[3]){
			status = 'В обработке'
		}
		else if(aplication[3] & aplication[2]>0){
			status = 'Отклонено'
		}
		else{
			status = 'Завершено'
		}

		view+=`
		<div class='aplication'>
			<p>Адрес: ${aplication[1]}</p>
			<p>Осталось подтверждений: ${aplication[2]}</p>
			<p>Статус: ${status}</p>
			<div class='buttons-confrim'>
				<button id=${aplication[0]}>Принять</button>
				<button id=${aplication[0]}>Отклонить</button>
			</div>
		</div>
		`	
	}

	element.innerHTML = `
	<header class='function-header'>
		<h3>Cмена роли</>
	</header>
	<div class='body-function'>
		${view}
	</div>`
}

function drawRoleFunctionUser(element, arrayApl, account){
	let view = ``

	for(let aplication of arrayApl){
		if(aplication[1] == account){
			if(aplication[2] > 0 & aplication[3] == true){
				view = `<p>Отказано</p>
				<button class="button-send" disabled>Отправить</button>`
			}
			else if(aplication[2] > 0 & aplication[3] != true){
				view = `<p>В обработке</p>
				<button class="button-send" disabled>Отправить</button>`
			}
		}
	}

	if(view == ``){
		view = `
		<p>Отправить запрос на смену роли?</P>
		<button class="button-send">Отправить</button>
		`
	}

	element.innerHTML = `
	<header class='function-header'>
		<h3>Cмена роли</>
	</header>
	<div class='body-function'>
		${view}
	</div>`
}