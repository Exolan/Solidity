async function checkTrans(contract, addressAccount, main){

    let amount = 0

    for(let el of main.children){
        if(amount > 0){
            el.remove()
        }
        amount++
    }

    const arrayTrans = await contract.methods.viewTrans().call()

    main.innerHTML += `<div class="history"></div>`

    const historyTrans = main.querySelector(".history")

    let sender

    for(const trans of arrayTrans){
        if(trans.sender == addressAccount){
            sender = true
            const el = `
            <div class="cancle-trans">
                <button class="button-cancle-sender">Отменить</button>
            </div>
            `

            drawHistory(sender, el, historyTrans, trans, contract, addressAccount, main)
        }
        else if(trans.recipient == addressAccount){
            sender = false
            const el = `
            <input type="text" class="code-word" placeholder="Введите код">
            <div class="cancle-trans">
                <button class="button-accept-user">Принять</button>
                <button class="button-cancle-user">Отменить</button>
            </div>
            `

            drawHistory(sender, el, historyTrans, trans, contract, addressAccount, main)
        }
    }
}

export default checkTrans

async function drawHistory(sender, el, historyTrans, trans, contract, addressAccount, main){
    let status
    let saveTr

    if(trans[7] == true & trans[8] == false & trans[9] == false & trans[10] == false){
        status = 'Ожидание админа'
    }
    else if((trans[7] == false & trans[8] == true & trans[9] == false & trans[10] == false) || (trans[7] == true & trans[8] == true & trans[9] == false & trans[10] == false)){
        status = 'Ожидание получателя'
    }
    else if((trans[7] == false & trans[8] == true & trans[9] == true & trans[10] == true) || (trans[7] == true & trans[8] == true & trans[9] == true & trans[10] == true)){
        status = 'Завершено'
    }
    else{
        status = 'Отклонено'
    }

    if(trans[7] == true){
        saveTr = 'Да'
    }
    else{
        saveTr = 'Нет'
    }

    const infoTrans = document.createElement('div')
    infoTrans.className = 'info-trans'
    infoTrans.id = trans.id_trans

    let view = `
        <div><p>Отправитель: ${trans.sender}</p></div>
        <div><p>Получатель: ${trans.recipient}</p></div>
        <div><p>Категория: ${trans.id_cat}</p></div>
        <div><p>Сумма: ${trans.sum}</p></div>
        <div><p>Статус: ${status}</p></div>
        <div><p>Secure: ${saveTr}</p></div>
        ${el}
    `

    infoTrans.innerHTML += view

    historyTrans.append(infoTrans)

    const arrayButtons = infoTrans.querySelectorAll('button')

    for(const btn of arrayButtons){
        if(status == 'Ожидание админа' || status == 'Завершено' || status == 'Отклонено'){
            btn.setAttribute("disabled", "disabled")
        }
        else{
            btn.removeAttribute("disabled")
        }
    }

    const id = trans.id_trans

    if(sender){
        const button = infoTrans.querySelector(".button-cancle-sender")

        button.onclick = async()=>{
            await contract.methods.cancelTrans(id).send({from: addressAccount, gas: '199999999'})
            alert("Перевод отменен!")
            checkTrans(contract, addressAccount, main)
        }
    }
    else{
        const buttonCancle = infoTrans.querySelector(".button-cancle-user")
        const buttonAccept = infoTrans.querySelector(".button-accept-user")
        const codeW = infoTrans.querySelector(".code-word")

        buttonCancle.onclick = async()=>{
            console.log(id);
            await contract.methods.recipient_answer(id, codeW.value, false).send({from: addressAccount, gas: '199999999'})
            alert("Отказано в переводе!")
            checkTrans(contract, addressAccount, main)
        }

        buttonAccept.onclick = async()=>{
            console.log(id);
            await contract.methods.recipient_answer(id, codeW.value, true).send({from: addressAccount, gas: '199999999'})
            checkTrans(contract, addressAccount, main)
        }
    }
}