async function votingAdmin(contract, addressAccount, main){
    let amount = 0

    for(let el of main.children){
        if(amount > 0){
            el.remove()
        }
        amount++
    }

    main.innerHTML += `<div class="admin-voting"></div>`

    const div = main.querySelector('.admin-voting')
    const arrayApl = await contract.methods.viewAplications().call()
    const arrayAnsw = await contract.methods.viewAnswer().call()

    for(const apl of arrayApl){
        const info = document.createElement('div')
        info.className = 'info-aplications'
        div.append(info)

        let buttons = ``
        let answer = "Вы не проголосовали"

        if(arrayAnsw.length > 0){
            for(const ans of arrayAnsw){
                if(apl.polz == ans.user & ans.admin == addressAccount){
                    buttons = `
                    <div class="buttons-answer">
                        <button id="0" disabled>Принять</button>
                        <button id="1" disabled>Отклонить</button>
                    </div>`
                    answer = "Вы проголосовали"
                }
                else{
                    buttons = `
                    <div class="buttons-answer">
                        <button id="0" disabled>Принять</button>
                        <button id="1" disabled>Отклонить</button>
                    </div>`
                }
            }
        }
        else{
            buttons = `
                    <div class="buttons-answer">
                        <button id="0">Принять</button>
                        <button id="1">Отклонить</button>
                    </div>`
        }

        let status

        if(apl.end == true){
            status = "Завершено"
        }
        else{
            status = "В обработке"
        }
        

        info.innerHTML = `
        <div><p>Пользователь: ${apl.polz}</p></div>
        <div><p>Голосов осталось: ${apl.confrims}</p></div>
        <div><p>Статус: ${status}</p></div>
        <div><p>${answer}</p></div>
        ${buttons}
        `

        const buttonsAnswer = info.querySelectorAll('button')
        for(const btn of buttonsAnswer){
            if(btn.id == "0"){
                btn.onclick = async()=>{
                    await contract.methods.apl_admin_answer(apl.id_apl, true).send({from: addressAccount, gas: "199999999"})
                    div.innerHTML = ``
                    votingAdmin(contract, addressAccount, main)
                }
            }
            else{
                btn.onclick = async()=>{
                    await contract.methods.apl_admin_answer(apl.id_apl, false).send({from: addressAccount, gas: "199999999"})
                    div.innerHTML = ``
                    votingAdmin(contract, addressAccount, main)
                }
            }
        }
    }
}

export default votingAdmin