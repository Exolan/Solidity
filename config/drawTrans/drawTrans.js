async function drawTrans(contract, modals, modalTransfers, account){
	let array = await contract.methods.viewTrans().call({from: account})
	let transfer = modalTransfers.querySelector('.modal-conteiner')
	let exit = modalTransfers.querySelector('img')
	let view = ``

	exit.onclick = ()=>{
		transfer.innerHTML = ``
		modalTransfers.style.display = 'none'
		modals.style.display = 'none'
	}

	for (let el of array){
		if(el[2] == account){
			let status;
			let saveTr;

			if(el[7] == true & el[8] == false & el[9] == false & el[10] == false){
				status = 'Ожидание админа'
			}
			else if((el[7] == false & el[8] == true & el[9] == false & el[10] == false) || (el[7] == true & el[8] == true & el[9] == false & el[10] == false)){
				status = 'Ожидание пользователя'
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

			
			view+=`<div class="transfer">
					<div class="body-transfer">
						<div><p>Получатель: ${el[3]}</p></div>
						<div><p>Категория: ${el[1]}</p></div>
						<div><p>Сумма: ${el[4]} Wei</p></div>
						<div><p>Статус: ${status}</p></div>
						<div><p>Безопасный перевод: ${saveTr}</p></div>
						<div class="button-cancel"><button><span>${'Отменить'}</span></button></div>
					</div>
				</div>`
		}
	}
	transfer.innerHTML = view
	
}

export default drawTrans