import modalAvtorization from './modalAvtorization.js'

async function profile(contract, addressAccount, main, web3){
    const user = await contract.methods.viewUser(addressAccount).call()
    const balance = await web3.utils.fromWei(await web3.eth.getBalance(addressAccount), 'ether')

    let role

    if(user.check_admin){
        role = 'Админ'
    }
    else{
        role = 'Пользователь'
    }

    main.innerHTML = ``

    main.innerHTML += `
    <div class="conteiner-profile">
        <header>
            <h1>Профиль</h1>
        </header>
        <main>
            <div class="address">
                <h3>Адрес: ${addressAccount}</h3>
            </div>
            <div class="balance">
                <h3>Баланс: ${Number(balance).toFixed(4)} ETH</h3>
            </div>
            <div class="role">
                <h3>Роль: ${role}</h3>
            </div>
            <div class="exit">
                <button class="button-exit">Выйти</button>
            </div>
        </main>
    </div>
    `

    let button = document.querySelector('.button-exit')

    button.onclick = ()=>{
        main.innerHTML = ``
        modalAvtorization(contract, addressAccount, web3)
    }
}

export default profile