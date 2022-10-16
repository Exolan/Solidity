async function addTrans(contract, addressAccount, main){

    let amount = 0

    for(let el of main.children){
        if(amount > 0){
            el.remove()
        }
        amount++
    }

    const arrayCats = await contract.methods.viewCat().call()
    const arraySamples = await contract.methods.viewSamples().call()

    let viewCats = ``

    for(let cat of arrayCats){
        viewCats += `<option value='${cat.id_cat}'>${cat.name_cat}</option>`
    }

    const div = `
    <div class="transfer">
        <input type="text" class="input-recepient" placeholder="Получатель">
        <select class="categories">
            ${viewCats}
        </select>
        <select class="samples"></select>
        <input type="text" class="sum" placeholder="Сумма">
        <input type="text" class="code-word" placeholder="Кодовое слово">
        <input type="text" class="description" placeholder="Описание">
        <div class="flag">
            <input type="checkbox" class="secure" value="true">
            <span>Secure</span>
        </div>
        <button class="send">Отправить</button>
    </div>
    `
    main.innerHTML += div

    const selectCat = document.querySelector('.categories')
    const sum = document.querySelector('.sum')
    const selectSample = document.querySelector('.samples')
    const button = document.querySelector('.send')
    const inputAdd = document.querySelector('.input-recepient')
    const codeWord = document.querySelector('.code-word')
    const description = document.querySelector('.description')
    const secureTrans = document.querySelector('.secure')

    let secure

    changeSample(arraySamples, selectCat, sum, selectSample)

    selectCat.onchange = ()=>{
        changeSample(arraySamples, selectCat, sum, selectSample)
    }

    selectSample.onchange = ()=>{
        if(selectSample.options[selectSample.selectedIndex].textContent == '-'){
            sum.value = ""
            sum.removeAttribute('disabled')
        }
        else{
            sum.value = selectSample.options[selectSample.selectedIndex].value
            sum.setAttribute('disabled', 'disabled')
        }
    }

    button.onclick = async()=>{
        if(secureTrans.checked){
            secure = true
        }
        else{
            secure = false
        }

        let idCat = selectCat.selectedIndex
        await contract.methods.add_trans(inputAdd.value, idCat, sum.value, codeWord.value, description.value, secure).send({from: addressAccount, value: sum.value, gas: "6721975"})
        alert("Перевод успешно создан!")
        inputAdd.value = ""
        codeWord.value = ""
        description.value = ""
        secureTrans.removeAttribute('checked')
    }
}

export default addTrans

function changeSample(arraySamples, selectCat, sum, selectSample){
    let viewSample = ``
    
    let i = 0
    for(let sample of arraySamples){
        if(sample.id_cat == selectCat.options[selectCat.selectedIndex].value){
            viewSample += `<option value='${sample.sum}'>${sample.name_samp} ${sample.sum}</option>`
            if(i == 0){
                sum.value = sample.sum
                sum.setAttribute('disabled', 'disabled')
            }
            i++
        }
    }
    viewSample += `<option>-</option>`
    selectSample.innerHTML = viewSample
}