async function addTrans(contract, account, address, select, id_cat,  money, code_word, description, secure){
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

export default addTrans