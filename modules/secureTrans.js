async function secureTrans(contract, addressAccount, main){
    let amount = 0

    for(let el of main.children){
        if(amount > 0){
            el.remove()
        }
        amount++
    }

    const arrayTrans = await contract.methods.viewTrans().call()

    main.innerHTML += `<div class="secure"></div>`

    const secure = main.querySelector(".secure")

    for(const trans of arrayTrans){
        if(trans.sender != addressAccount && trans.recipient != addressAccount && trans.secure == true){
            drawSecure(secure, trans, contract, addressAccount, main)
        }
    }
}

export default secureTrans

async function drawSecure(secure, trans, contract, addressAccount, main){
    const element = document.createElement('div')
    element.className = "el-secure"
    secure.append(element)

    element.innerHTML = `
    <div><p>Отправитель: ${trans.sender}</p></div>
    <div><p>Получатель: ${trans.recipient}</p></div>
    <div><p>Категория: ${trans.id_cat}</p></div>
    <div><p>Сумма: ${trans.sum}</p></div>
    <div>
        <button id="0">Подтвердить</button>
        <button id="1">Отменить</button>
    </div>
    `

    const buttons = element.querySelectorAll('button')

    for (const button of buttons){
        if(button.id == "0"){
            button.onclick = async()=>{
                await contract.methods.secure_answer(trans.id_trans, true).send({from: addressAccount, gas: "199999999"})
                secureTrans(contract, addressAccount, main)
            }
        }
        else{
            button.onclick = async()=>{
                await contract.methods.secure_answer(trans.id_trans, false).send({from: addressAccount, gas: "199999999"})
                secureTrans(contract, addressAccount, main)
            }
        }
    }
}