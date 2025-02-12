let headerMenu = document.querySelector("#topo")

let content1 = document.querySelectorAll(".content")[0]
let btnContent1 = document.querySelectorAll('.btn')[0]

let content2 = document.querySelectorAll(".content")[1]
let btnContent2 = document.querySelectorAll('.btn')[1]

let content3 = document.querySelectorAll(".content")[2]
let uploadContent3 = document.querySelectorAll(".upload-icon")[0]
let uploadPreview1 = document.querySelectorAll(".upload-icon-preview")[0]
let btnContent3 = document.querySelectorAll('.btn')[2]
let uploadLogo = document.querySelectorAll(".upload-icon-container")[0]

let content4 = document.querySelectorAll(".content")[3]
let uploadContent4 = document.querySelectorAll(".upload-icon")[1]
let uploadPreview2 = document.querySelectorAll(".upload-icon-preview")[1]
let btnContent4 = document.querySelectorAll('.btn')[3]

let chooseContainer = document.querySelector("#choose")
let chooseContainerTitle = document.querySelector("#choose-title")
let chooseContainerAllOptions = document.querySelectorAll(".choose-option")
let chooseContainerOption1 = document.querySelectorAll(".choose-option")[0]
let chooseContainerOption2 = document.querySelectorAll(".choose-option")[1]
let chooseContainerOption3 = document.querySelectorAll(".choose-option")[2]
let selectedOptionShield = ''
let selectedOptionTshirt = ''
let exitButtonsChoose = document.querySelectorAll(".exit-container-choose")

let overlay = document.querySelector("#overlay")

let backButton1 = document.querySelectorAll(".back-button-container")[0]
let backButton2 = document.querySelectorAll(".back-button-container")[1]
let backButton3 = document.querySelectorAll(".back-button-container")[2]

let addButtons = document.querySelectorAll(".add-button")

let content5 = document.querySelector("#content-5")
let btnContent5 = document.querySelectorAll('.btn')[4]

let btnAddPlayer = document.querySelector("#adicionarJogador")
let listAddPlayer = document.querySelectorAll(".player-list-item")
let addPlayerContainer = document.querySelector("#addPlayer")
let exitButtonAdd = document.querySelector("#exit-container-add")
let saveAddPlayerBtn = document.querySelector("#adicionarJogador")

let nomePlace = document.querySelectorAll(".name-player")
let selectedPlayerPlace = document.querySelectorAll(".selected-player")

// Botão de sair das telas de escolha (escolher escudo e camisa)
Array.from(exitButtonsChoose).forEach((a,index)=>{
    exitButtonsChoose[index].addEventListener('click',()=>{
        chooseContainer.style.display = "none"
        overlay.style.display = "none"
    })
})

btnContent1.addEventListener('click',()=>{
    content1.style.display = "none"
    headerMenu.style.display = "none"
    content2.style.display = "flex"
})

btnContent2.addEventListener('click',()=>{
    content2.style.display = "none"
    content3.style.display = "flex"
})

btnContent3.addEventListener('click',()=>{
    content3.style.display = "none"
    content5.style.display = "flex"
})


function saveShield(opc) {
    var definitiveShield = opc
}

function saveTshirt(opcT) {
    var definitiveTshirt = opcT
}

uploadContent3.addEventListener('click',()=>{
    overlay.style.display = "block"
    chooseContainer.style.display = "flex"
    chooseContainerTitle.innerText = "Escolha um Escudo"
    chooseContainerOption1.src = "./img/custom-shield-1.png"
    chooseContainerOption2.src = "./img/custom-shield-2.png"
    chooseContainerOption3.src = "./img/custom-shield-3.png"

    // Pegando todas as opções do menu de seleção
    Array.from(chooseContainerAllOptions).forEach((a,index)=>{
        chooseContainerAllOptions[index].addEventListener('click',()=>{
            // Ao escolher algum, feche o menu
            chooseContainer.style.display = "none"
            overlay.style.display = "none"

            // E defina a opção escolhida como o index+1 (porque começa com 0 e as imagens com 1)
            selectedOptionShield = index+1
            saveShield(selectedOptionShield)

            // Troque o preview para a imagem escolhida
            uploadPreview1.src = `./img/custom-shield-${selectedOptionShield}.png`

            // Deixe o escudo original invisível
            uploadLogo.style.opacity = "0"
        })
    })
})




backButton1.addEventListener("click",()=>{
    content1.style.display = "flex"
    headerMenu.style.display = "flex"
    content2.style.display = "none"
})

backButton2.addEventListener("click",()=>{
    content2.style.display = "flex"
    content3.style.display = "none"
})


Array.from(addButtons).forEach((a,index)=>{
    addButtons[index].addEventListener('click',()=>{
        // add player screen abre
    })
})

var players = []

class jogador {
    constructor (nome,position) {
        this.nome = nome
        this.position = position
    }
}

exitButtonAdd.addEventListener("click",()=>{
    addPlayerContainer.style.display = "none"
})



// Qual botão de adicionar foi clicado
let addPlayerBtnClicked = ''
Array.from(listAddPlayer).forEach((a,indexListAddPlayer)=>{
    let addPlayerButton = listAddPlayer[indexListAddPlayer]

    // Quando pressionar o botão '+'
    addPlayerButton.addEventListener('click',()=>{
        addPlayerContainer.style.display = "flex"
        addPlayerBtnClicked = indexListAddPlayer
    })
})

function createPlayer(nome,pos) {
    let player = new jogador(nome,pos)
    players.push(player)
}

var nomePlayerAchado = ""
var procurou = false

function findPlayer(pos) {
    players.forEach((a,index)=>{
        let player = players[index]
        if (player.position == pos) {
            nomePlayerAchado = player.nome
            procurou = true
        }
        else {
            console.log(`Player que não possui posição: ${player.position}`)
            console.log(`Posição passada: ${pos}`)
        }
    })
}

saveAddPlayerBtn.addEventListener('click',()=>{
    let nome = document.querySelector("#nomeJogador").value
    createPlayer (nome, addPlayerBtnClicked)

    addPlayerContainer.style.display = "none"

    addButtons[addPlayerBtnClicked].style.display = "none"
    selectedPlayerPlace[addPlayerBtnClicked].style.display = "flex"
    // Mostrar onde a position == addPlayerBtnClicked
    findPlayer (addPlayerBtnClicked)
    if (procurou == true) {
        nomePlace[addPlayerBtnClicked].innerText = `${nomePlayerAchado}`
        document.querySelector("#nomeJogador").value = ""
    }
    else {
        console.log("não procurou")
    }
    
})

function mostrar() {
    console.log("Começou")
    players.forEach((a,index)=>{
        console.log(`Nome: ${players[index].nome}`)
        console.log(`Posição: ${players[index].position}`)
        console.log("-----------")
        console.log(`Valor do Index: ${players[2].nome}`)
    })
}

function mostrar2() {
    console.log(`Valor do Index: ${players[2].nome}`)
}

document.querySelector("#send").addEventListener('click',()=>{
    // Formatar dados para o MySQL
    let nomeClube = document.querySelector("#nomeClube").value
    let escudo = selectedOptionShield
    let origem = 'criado'

    let p1 = players[0].nome
    let p2 = players[1].nome
    let p3 = players[2].nome
    let p4 = players[3].nome
    let p5 = players[4].nome

    // Enviar para PHP
    let link = `nomeClube=${nomeClube}&escudo=${escudo}&origem=${origem}&p1=${p1}&p2=${p2}&p3=${p3}&p4=${p4}&p5=${p5}`
    window.location.href=`script/register-team-variaveis.php?${link}`
})