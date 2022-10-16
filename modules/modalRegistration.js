async function modalRegistration(contract, modalR, modalA){
    const inputAdd = modalR.querySelector('.input-login')
    const inputPas = modalR.querySelector('.input-password')
    const inputPasAgain = modalR.querySelector('.input-password-again')
    const buttonReg = modalR.querySelector('.button-r-reg')
    const buttonBack = modalR.querySelector('.button-r-back')

    buttonReg.onclick = async()=>{
        if(inputPas.value == inputPasAgain.value){
            const password = '0x' + keccak256(inputPas.value).toString('hex')

            let result = await contract.methods.registration(inputAdd.value, password).send({from: inputAdd.value})

            if(result){
                inputAdd.value = ""
                inputPas.value = ""
                inputPasAgain.value = ""
                modalR.style.display = "none"
                modalA.style.display = "grid"
            }
        }
        else{
            alert('Пароли не совпадают!')
        }
    }

    buttonBack.onclick = ()=>{
        inputAdd.value = ""
        inputPas.value = ""
        inputPasAgain.value = ""
        modalR.style.display = "none"
        modalA.style.display = "grid"
    }
}

export default modalRegistration