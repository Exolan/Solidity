async function drawTrans(contract, modals, modalTransfers, account){
	let array = await contract.methods.viewTrans().call({from: account})
	let bodyTransfers = modalTransfers.querySelector('.modal-conteiner')
	let exit = modalTransfers.querySelector('img')
	let view = ``

	exit.onclick = ()=>{
		bodyTransfers.innerHTML = ``
		modalTransfers.style.display = 'none'
		modals.style.display = 'none'
	}

	view = drawInfoTrans(view, array, account)
	bodyTransfers.innerHTML = view

	let transfers = bodyTransfers.querySelectorAll('.transfer')

	console.log(transfers);
	for(let transfer of transfers){
		if(transfer.id == 0){
			let button = transfer.querySelector('button')
			button.onclick = async()=>{
				await contract.methods.cancelTrans(button.id).send({from:account, gas: '999999999'})
				view = drawInfoTrans(view, array, account)
				bodyTransfers.innerHTML = view
			}
		}
		else{
			let arrayButtons = transfer.querySelectorAll('.button-answer-trans')
			let inputs = transfer.querySelectorAll('input')

			for(let button of arrayButtons){
				let code
				for(let input of inputs){
					if(input.id == button.id){
						code = input.value
					}
				}
				if(button.innerHTML == `<span>Принять</span>`){
					button.onclick = async()=>{
						await contract.methods.recipient_answer(button.id, code, true).send({from:account, gas: '999999999'})
						view = drawInfoTrans(view, array, account)
						bodyTransfers.innerHTML = view
					}
				}
				else{
					button.onclick = async()=>{
						await contract.methods.recipient_answer(button.id, code, false).send({from:account, gas: '999999999'})
						view = drawInfoTrans(view, array, account)
						bodyTransfers.innerHTML = view
					}
				}
			}
		}
	}
}

export default drawTrans

function drawInfoTrans(view, array, account){
	for (let el of array){
		if(el[2] == account){
			let status;
			let saveTr;

			if(el[7] == true & el[8] == false & el[9] == false & el[10] == false){
				status = 'Ожидание админа'
			}
			else if((el[7] == false & el[8] == true & el[9] == false & el[10] == false) || (el[7] == true & el[8] == true & el[9] == false & el[10] == false)){
				status = 'Ожидание получателя'
			}
			else if((el[7] == false & el[8] == true & el[9] == true & el[10] == true) || (el[7] == true & el[8] == true & el[9] == true & el[10] == true)){
				status = 'Завершено'
			}
			else{
				status = 'Отклонено'
			}

			if(el[7] == true){
				saveTr = 'Да'
			}
			else{
				saveTr = 'Нет'
			}

			
			view+=`<div class="transfer" id=0>
					<div class="body-transfer">
						<div><p>Получатель: ${el[3]}</p></div>
						<div><p>Категория: ${el[1]}</p></div>
						<div><p>Сумма: ${el[4]} Wei</p></div>
						<div><p>Статус: ${status}</p></div>
						<div><p>Безопасный перевод: ${saveTr}</p></div>
						<div><button class="button-cancle-trans" id=${el[0]}><span>Отменить</span></button></div>
					</div>
				</div>`
		}
		else if(el[3] == account){
			let status;
			let saveTr;
			let buttons = ``;

			if(el[11] == 0){
				status = 'Отклонено'
				buttons = `<button class="button-answer-trans" id=${el[0]} disabled><span>Принять</span></button>
						   <button class="button-answer-trans" id=${el[0]} disabled><span>Отменить</span></button>`
			}
			else if(el[7] == true & el[8] == false & el[9] == false & el[10] == false){
				status = 'Ожидание админа'
				buttons = `<button class="button-answer-trans" id=${el[0]} disabled><span>Принять</span></button>
						   <button class="button-answer-trans" id=${el[0]} disabled><span>Отменить</span></button>`
			}
			else if((el[7] == false & el[8] == true & el[9] == false & el[10] == false) || (el[7] == true & el[8] == true & el[9] == false & el[10] == false)){
				status = 'Ожидание получателя'
				buttons = `<button class="button-answer-trans" id=${el[0]}><span>Принять</span></button>
						   <button class="button-answer-trans" id=${el[0]}><span>Отменить</span></button>`
			}
			else if((el[7] == false & el[8] == true & el[9] == true & el[10] == true) || (el[7] == true & el[8] == true & el[9] == true & el[10] == true)){
				status = 'Завершено'
				buttons = `<button class="button-answer-trans" id=${el[0]} disabled><span>Принять</span></button>
						   <button class="button-answer-trans" id=${el[0]} disabled><span>Отменить</span></button>`
			}
			else{
				status = 'Отклонено'
				buttons = `<button class="button-answer-trans" id=${el[0]} disabled><span>Принять</span></button>
						   <button class="button-answer-trans" id=${el[0]} disabled><span>Отменить</span></button>`
			}

			if(el[7] == true){
				saveTr = 'Да'
			}
			else{
				saveTr = 'Нет'
			}
			
			view+=`<div class="transfer" id=1>
					<div class="body-transfer">
						<div><p>Получатель: ${el[3]}</p></div>
						<div><p>Категория: ${el[1]}</p></div>
						<div><p>Сумма: ${el[4]} Wei</p></div>
						<div><p>Статус: ${status}</p></div>
						<div><p>Безопасный перевод: ${saveTr}</p></div>
						<div><p>Попыток осталось: ${el[11]}</p></div>
						<div><input class="input-code-word" id=${el[0]} placeholder="Введите код"></div>
						<div>${buttons}</div>
					</div>
				</div>`
		}
	}
	return view
}