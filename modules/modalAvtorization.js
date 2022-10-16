import modalRegistration from './modalRegistration.js'
import conteinerPannel from './conteinerPannel.js'
import profile from './profile.js'

async function modalAvtorization(contract, addressAccount, web3){
    const modals = document.querySelector('.modals')
    const modalA = document.querySelector('.modal-a')
    const modalR = document.querySelector('.modal-r')
    const inputAdd = modalA.querySelector('.input-login')
    const inputPas = modalA.querySelector('.input-password')
    const buttonEnt = modalA.querySelector('.button-a-enter')
    const buttonReg = modalA.querySelector('.button-a-reg')
    const conteiner = document.querySelector('.conteiner')
    const main = conteiner.querySelector('main')

    modals.style.display = 'flex'
    modalA.style.display = 'grid'

    buttonEnt.onclick = async()=>{
        const password = '0x' + keccak256(inputPas.value).toString('hex')

        let result = await contract.methods.avtorization(inputAdd.value, password).call()
    
        if(result){
            addressAccount = inputAdd.value
            inputAdd.value = ""
            inputPas.value = ""
            modalA.style.display = "none"
            modals.style.display = "none"

            profile(contract, addressAccount, main, web3)
            conteinerPannel(contract, addressAccount, conteiner)
            
        }
    }

   buttonReg.onclick = async()=>{
        inputAdd.value = ""
        inputPas.value = ""
        modalA.style.display = "none"
        modalR.style.display = "grid"

        modalRegistration(contract, modalR, modalA)
   }
}

export default modalAvtorization