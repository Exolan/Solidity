import addTrans from './addTrans.js'
import checkTrans from './checkTrans.js'
import secureTrans from './secureTrans.js'
import changeRole from './changeRole.js'
import votingAdmin from './votingAdmin.js'

async function conteinerPannel(contract, addressAccount, conteiner){
    const pannel = conteiner.querySelector('.conteiner-pannel')
    const main = conteiner.querySelector('main')
    const divs = pannel.querySelectorAll('div')

    const user = await contract.methods.viewUser(addressAccount).call()
    const status = user.check_admin

    const needDivs = []

    for(let div of divs){
        if(status){
            if(div.children[0].id == '0' || div.children[0].id == '1' || div.children[0].id == '2' || div.children[0].id == '4' || div.children[0].id == '5' || div.children[0].id == '6'){
                needDivs.push(div.children[0])
                div.style.display = "flex"
            }
            else{
                div.style.display = "none"
            }
        }
        else{
            if(div.children[0].id == '0' || div.children[0].id == '1' || div.children[0].id == '3'){
                needDivs.push(div.children[0])
                div.style.display = "flex"
            }
            else{
                div.style.display = "none"
            }
        }
    }

    for (let element of needDivs){
        switch(element.id){
            case "0":
                element.onclick = ()=>{
                    addTrans(contract, addressAccount, main)
                }
                break

            case "1":
                element.onclick = ()=>{
                    checkTrans(contract, addressAccount, main)
                }
                break

            case "2":
                element.onclick = ()=>{
                    secureTrans(contract, addressAccount, main)
                }
                break

            case "3":
                element.onclick = ()=>{
                    changeRole(contract, addressAccount, main)
                }
                break

            case "4":
                element.onclick = ()=>{
                    votingAdmin(contract, addressAccount, main)
                }
                break

            case "5":
                element.onclick = ()=>{
                    console.log("??????????????????");
                }
                break

            case "6":
                element.onclick = ()=>{
                    console.log("??????????????");
                }
                break
                
        }
    }
}

export default conteinerPannel