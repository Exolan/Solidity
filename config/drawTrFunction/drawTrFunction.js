import addTrans from '../addTrans/addTrans.js'

async function drawTrFunction(element, contract, account){
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
			button.style = "background-color: rgb(216, 253, 213)"
			button.textContent = 'Да'
			statusTransfer = true
		}
		else{
			button.style = "background-color: rgb(247, 148, 144)"
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
	let sample

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
		addTrans(contract, account, inputAddress, selectCat, activeCat, money.value, inputCodeW, inputDesc.value, statusTransfer)
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
	money.removeAttribute('disabled')
	element.append(div)
	element.append(divButton)
}

export default drawTrFunction