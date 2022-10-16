async function changeRole(contract, addressAccount, main){
    let amount = 0

    for(let el of main.children){
        if(amount > 0){
            el.remove()
        }
        amount++
    }

    main.innerHTML += `<div class="change-role"></div>`
    
    const div = main.querySelector('.change-role')
    const array = await contract.methods.viewAplications().call()
    console.log(array);
    let view

    if (array.length != 0){
        for(const el of array){
            if (el.polz != addressAccount){
                view = `<button class="change">Оставить заявку</button>`
                div.innerHTML = view

                const button = div.querySelector('button')
                button.onclick = async()=>{
                    await contract.methods.apl_change_status().send({from: addressAccount, gas: "199999999"})
                    changeRole(contract, addressAccount, main)
                }
            }
            else{
                if(el.confrims > 0 && el.end == true){
                    view = `<div>Заявка отменена</div>`
                    div.innerHTML = view
                }
                else if(el.confrims > 0 && el.end != true){
                    view = `<div>Заявка в обработке</div>`
                    div.innerHTML = view
                }
            }
        }
    }
    else{
        view = `<button class="change">Оставить заявку</button>`
        div.innerHTML = view

        const button = div.querySelector('button')
        button.onclick = async()=>{
            await contract.methods.apl_change_status().send({from: addressAccount, gas: "199999999"})
            changeRole(contract, addressAccount, main)
        }
    }
    
}

export default changeRole