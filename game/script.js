let homeScreen = document.querySelector("#content-1")
let selectTeamScreen = document.querySelector("#content-2")
let gameScreen = document.querySelector("#content-3")
let newMatch = document.querySelectorAll(".btn")[0]
let myProfile = document.querySelectorAll(".btn")[1]

let exit = document.querySelectorAll(".exit")[0]
let btnProximo1 = document.querySelectorAll(".escolher-proximo")[0];
let btnProximo2 = document.querySelectorAll(".escolher-proximo")[1];
let btnAnterior1 = document.querySelectorAll(".escolher-voltar")[0];
let btnAnterior2 = document.querySelectorAll(".escolher-voltar")[1];

let start = document.querySelectorAll(".btn")[2]
let transition = document.querySelector("#transition")

newMatch.addEventListener("click",()=>{
    let start = new Audio("sounds/click.mp3")
    start.play()
    homeScreen.style.display = "none"
    selectTeamScreen.style.display = "flex"
})

myProfile.addEventListener("click",()=>{
    let start = new Audio("sounds/click.mp3")
    start.play()
})

exit.addEventListener("click",()=>{
    let start = new Audio("sounds/click.mp3")
    start.play()
    homeScreen.style.display = "flex"
    selectTeamScreen.style.display = "none"
})

// Selecão 1º time

// Lista de escudos inseridos pelo PHP
    let escudos1 = document.querySelectorAll(".escolher-time-escudo-1");
    // Escudo atual
    let escudoAtual1 = 0;
    // Lista de nomes dos clubes inseridos pelo PHP
    let nomesClubes1 = document.querySelectorAll(".nome-time-1");
    // Nome do clube atual
    let nomeClubeAtual1 = 0

    // Todos estavam com display none, agora vai iniciar com o 1º clube visível
    escudos1[escudoAtual1].style.display = "flex"
    nomesClubes1[nomeClubeAtual1].style.display = "flex"

// Selecão 2º time
    let escudos2 = document.querySelectorAll(".escolher-time-escudo-2");
    // Escudo atual
    let escudoAtual2 = 0;
    // Lista de nomes dos clubes inseridos pelo PHP
    let nomesClubes2 = document.querySelectorAll(".nome-time-2");
    // Nome do clube atual
    let nomeClubeAtual2 = 0

    // Todos estavam com display none, agora vai iniciar com o 1º clube visível
    escudos2[escudoAtual2].style.display = "flex"
    nomesClubes2[nomeClubeAtual2].style.display = "flex"

btnProximo1.addEventListener('click',()=>{
    if (escudoAtual1 < (escudos1.length)-1) {
        // A instancia deve ser feita sempre que o método for executado, para permitir cliques consecutivos reproduzindo o somm
        let select = new Audio("sounds/select.mp3")
        select.play();
        // Alterar Escudo
        escudos1[escudoAtual1].style.display = "none"
        escudoAtual1=escudoAtual1+1
        escudos1[escudoAtual1].style.display = "flex"
        // Alterar Nome do Time
        nomesClubes1[nomeClubeAtual1].style.display = "none"
        nomeClubeAtual1=nomeClubeAtual1+1
        nomesClubes1[nomeClubeAtual1].style.display = "flex"
        console.log(`${nomeClubeAtual1}`)
        console.log(`${(escudos1.length)}`)
    }
});

btnAnterior1.addEventListener('click',()=>{
    console.log("foi")
    console.log(`${nomeClubeAtual1}`)
    if (nomeClubeAtual1 >=1) {
        let select = new Audio("sounds/select.mp3")
        select.play();
        // Alterar Escudo
        escudos1[escudoAtual1].style.display = "none"
        escudoAtual1=escudoAtual1-1
        escudos1[escudoAtual1].style.display = "flex"
        // Alterar Nome do Time
        nomesClubes1[nomeClubeAtual1].style.display = "none"
        nomeClubeAtual1=nomeClubeAtual1-1
        nomesClubes1[nomeClubeAtual1].style.display = "flex"
    }
})

//

btnProximo2.addEventListener('click',()=>{
    if (escudoAtual2 < (escudos2.length)-1) {
        let select = new Audio("sounds/select.mp3")
        select.play();
        // Alterar Escudo
        escudos2[escudoAtual2].style.display = "none"
        escudoAtual2=escudoAtual2+1
        escudos2[escudoAtual2].style.display = "flex"
        // Alterar Nome do Time
        nomesClubes2[nomeClubeAtual2].style.display = "none"
        nomeClubeAtual2=nomeClubeAtual2+1
        nomesClubes2[nomeClubeAtual2].style.display = "flex"
    }
});

btnAnterior2.addEventListener('click',()=>{
    console.log("foi")
    console.log(`${nomeClubeAtual2}`)
    if (nomeClubeAtual2 >=1) {
        let select = new Audio("sounds/select.mp3")
        select.play();
        // Alterar Escudo
        escudos2[escudoAtual2].style.display = "none"
        escudoAtual2=escudoAtual2-1
        escudos2[escudoAtual2].style.display = "flex"
        // Alterar Nome do Time
        nomesClubes2[nomeClubeAtual2].style.display = "none"
        nomeClubeAtual2=nomeClubeAtual2-1
        nomesClubes2[nomeClubeAtual2].style.display = "flex"
    }
})

let idsClubes = document.querySelectorAll(".idClube");
let jogadoresDoClube1 = []
let jogadoresDoClube2 = []

function listarJogadoresTime(idClube,char) {
    let clubeEscolhido1 =  nomesClubes1[nomeClubeAtual1]
    let idClube1 = nomesClubes1[nomeClubeAtual1].getAttribute('idclube')

    let clubeEscolhido2 =  nomesClubes2[nomeClubeAtual2]
    let idClube2 = nomesClubes2[nomeClubeAtual2].getAttribute('idclube')
    console.log( nomesClubes2[nomeClubeAtual2])

    if (char == 1) {
        console.log("CHAR 1: "+idClube1)
        jogadores1 = document.querySelectorAll(`.id-clube-${idClube1}`)
        Array.from(jogadores1).forEach((a,index)=>{
            jogadoresDoClube1.push(jogadores1[index].innerHTML)
            console.log(jogadores1[index].innerHTML)
        })

    }
    else {
        console.log("CHAR 2: "+idClube2)
        jogadores2 = document.querySelectorAll(`.id-clube-${idClube2}`)
        Array.from(jogadores2).forEach((a,index)=>{
            jogadoresDoClube2.push(jogadores2[index].innerHTML)
            console.log(jogadores2[index].innerHTML)
        })
    }
}
// Placar
    // Escudos
    let placarTime1Escudo = document.querySelectorAll(".placar-escudo")[0]
    let placarTime2Escudo = document.querySelectorAll(".placar-escudo")[1]
    // Nomes
    let placarTime1Nome = document.querySelectorAll(".placar-nome")[0]
    let placarTime2Nome = document.querySelectorAll(".placar-nome")[1]
    // Jogador Atual
    let jogadorAtual = document.querySelector("#players-name")

start.addEventListener("click",()=>{
    if (gameScreen.style.display != "flex") {
        let click= new Audio("sounds/click.mp3")
        let start = new Audio("sounds/react-to-gol.mp3")
        click.play()
        start.play()
        transition.style.display = "flex"

        placarTime1Escudo.src = escudos1[escudoAtual1].src
        placarTime2Escudo.src = escudos2[escudoAtual2].src

        placarTime1Nome.innerHTML = nomesClubes1[nomeClubeAtual1].innerText
        placarTime2Nome.innerHTML = nomesClubes2[nomeClubeAtual2].innerText


        console.log(escudos2[escudoAtual2].src)
        setTimeout(() => {
            exit.style.display = "none"
            transition.style.display = "none"
            gameScreen.style.display = "flex"
        },2600 
        );
        listarJogadoresTime(5,1)
        listarJogadoresTime(5,2)

        // alert(jogadores1)
        jogadorAtual.innerText = jogadoresDoClube1[jogadorDoClube1Atual].split(" com id")[0]
        indicadorP2.style.backgroundColor = "#D9D9D9"
        indicadorP1.style.backgroundColor = "yellow"
    }
})

// Partida
let indicador = document.querySelector("#indicador")
let nivel = 1
let player = document.querySelector("#player")
let bola = document.querySelector("#ball")
let goleiro = document.querySelector("#goleiro")

document.addEventListener("keypress",(evento)=>{
    key = evento.keyCode
    if (key == 32) {
        forcaChute(nivel)
        nivel++
        console.log(nivel)
    }
    else {
        console.log("outra")
    }
})
var posicaoIndicador = ""
function capturarPosicaoIndicador() {
    // Reúne os estilos definidos para o elemento do parâmetro
    let estiloIndicador = window.getComputedStyle(indicador)
    // Especifica a propriedade que desejamos saber o valor
    posicaoIndicador = estiloIndicador.getPropertyValue("left")
    
    console.log(posicaoIndicador)
}

function pararIndicador() {
    indicador.style.animation = "none"
    indicador.style.left = posicaoIndicador
}

let chuteFinalizado = false
let bolaMovendo = false

var moverBolaInterval = ""

// Tecla enter
document.addEventListener("keypress",(evento)=>{
    baterPenalti(evento)

})

let jogadorDoClube1Atual = 1
let jogadorDoClube2Atual = 0

function baterPenalti(evento) {
    let key = evento.keyCode
    capturarPosicaoIndicador()
    if (key == 13 && chuteFinalizado == false) {
        indicador.style.left = posicaoIndicador
        indicador.style.opacity = "0"
        player.src = "../img/sprites/batendoPenalti.gif"
        setTimeout(() => {
            player.src = "../img/sprites/player.gif"
        }, 700);
        setTimeout(() => {
            bola.style.animation = "girar-bola 1s infinite linear"
            goleiro.src = "../img/sprites/goleiro-2.png"
            //bola.style.left = `${posicaoIndicador}`
            moverBolaInterval = setInterval(moverBola, 0.00000001);
        }, 350);
        chuteFinalizado = true
    }
    else if (key == 13 && chuteFinalizado == true) {
        restaurarCampo()
    }
}

document.addEventListener("keypress",(evento)=>{
    key = evento.keyCode
    if (key == 48) {
        restaurarCampo()
    }
})

let vezAtual = 1
let indicadorP1 = document.querySelectorAll(".identificador-player")[0]
let indicadorP2 = document.querySelectorAll(".identificador-player")[1]

function restaurarCampo() {
    indicador.style.opacity = "1"
    chuteFinalizado = false
    goleiro.src = "../img/sprites/animacao-goleiro.gif"
    bola.style.left = "744px"
    bola.style.bottom = "30.7125px"
    let estiloBola = getComputedStyle(bola)
    indicador.style.left = "304.2px"
    vezAtual++
    if (vezAtual%2 != 0) {
        jogadorDoClube1Atual++
        let nome = jogadoresDoClube1[jogadorDoClube1Atual].split(" com id")[0]
        jogadorAtual.innerHTML = nome
        indicadorP1.style.backgroundColor = "yellow"
        indicadorP2.style.backgroundColor = "#D9D9D9"
    }
    else {
        jogadorDoClube2Atual++
        let nome = jogadoresDoClube2[jogadorDoClube2Atual].split(" com id")[0]
        jogadorAtual.innerHTML = nome
        indicadorP2.style.backgroundColor = "yellow"
        indicadorP1.style.backgroundColor = "#D9D9D9"
    }
    
    //indicador.style.animation = "transition-start 2.5s ease-in-out !important"
}
let posicaoBolaX = ""
let posicaoBolaY = ""
function moverBola() {
    bolaMovendo = true
    console.log("executado")
    let estiloBola = getComputedStyle(bola)
    posicaoBolaX = parseInt (estiloBola.bottom.split("px")[0])
    let tamanhoAtualBola = parseInt (estiloBola.width.split("vw")[0])

    if (tamanhoAtualBola > 90) {
        tamanhoAtualBola = tamanhoAtualBola-0.5
        bola.style.width = `${tamanhoAtualBola}px`
    }

    if (posicaoBolaX < 250) {
        posicaoBolaX = posicaoBolaX+1
        bola.style.bottom = `${posicaoBolaX}px`
    }

    posicaoBolaY = parseInt (estiloBola.left.split("px")[0])
    console.log("---")
    console.log(posicaoBolaY)
    console.log("indicador "+posicaoIndicador)
    posicaoIndicador = posicaoIndicador.split("px")[0]
    if (posicaoBolaY>posicaoIndicador) {
        posicaoBolaY = posicaoBolaY-1
        console.log("posY: "+posicaoBolaY)
        bola.style.left = `${posicaoBolaY}px`
    }
    else if (posicaoBolaY<posicaoIndicador) {
        console.log("posY: "+posicaoBolaY)
        posicaoBolaY = posicaoBolaY+1
        bola.style.left = `${posicaoBolaY}px`
    }
    let direcaoIndicador = ""
    if (posicaoIndicador>768) {
        direcaoIndicador = "direita"
    }
    else if (posicaoIndicador<768) {
        direcaoIndicador = "esquerda"
    }
    else {
        direcaoIndicador = "centro"
    }

    if (direcaoIndicador == "esquerda") {
        if ((posicaoBolaY-posicaoIndicador) <=1 && posicaoBolaX == 250) {
        console.log("pos indicador"+posicaoIndicador)
        console.log("pos X"+posicaoBolaY)
        clearInterval(moverBolaInterval)
        indicarGol()
    }
    }
    else if (direcaoIndicador == "direita") {
        if ((posicaoIndicador-posicaoBolaY) <=1 && posicaoBolaX == 250) {
        console.log("pos indicador"+posicaoIndicador)
        console.log("pos X"+posicaoBolaY)
        clearInterval(moverBolaInterval)
        console.log ("bola"+estiloBola.getPropertyValue("width"))
        indicarGol()
    }
    }
}
let placarTime1Score = document.querySelectorAll(".score")[0]
let placarTime2Score = document.querySelectorAll(".score")[2]
let time1Score = 0
let time2Score = 0

function indicarGol() {
    let me = 652.8 // me = mão esqueda
    let md = 883.2 // md = mão direita
    let te = 538.375 // te = trave esquerda
    let td = 1013.75 // td = trave direita
    let tamanhoBola = 90.5
    posicaoBolaY = posicaoBolaY+tamanhoBola

    // Se a bola estiver entre o goleiro ou da trave para fora, o usuário errou o gol
    if ((posicaoBolaY > me && posicaoBolaY < md) || ((posicaoBolaY < te || posicaoBolaY > td))) {
        let transitionLose = document.querySelectorAll(".transition")[2]
        let perdeuGol = new Audio("sounds/missed.mp3")

        perdeuGol.play()
        transitionLose.style.display = "flex"
        setTimeout(() => {
            transitionLose.style.display = "none"
        },2600 
        );

    }
    else {
        let transitionGoal = document.querySelectorAll(".transition")[1]
        let gol = new Audio("sounds/react-to-gol.mp3")

        gol.play()
        transitionGoal.style.display = "flex"
        setTimeout(() => {
            transitionGoal.style.display = "none"
        },2600 
        );
        // Se for a vez do time 1
        if (vezAtual%2 != 0) {
            time1Score++
            placarTime1Score.innerHTML = time1Score
        }
        else {
            time2Score++
            placarTime2Score.innerHTML = time2Score
        }
    }

    let telaP1Ganhou = document.querySelectorAll("#tela-ganhou")[0]
    let telaP2Ganhou = document.querySelectorAll("#tela-ganhou")[1]
    let telaEmpate = document.querySelectorAll("#tela-ganhou")[2]
    if (vezAtual > 7) {
        if (time1Score > time2Score) {
            telaP1Ganhou.style.display = "flex"
        }
        else if (time1Score<time2Score) {
            telaP2Ganhou.style.display = "flex"
        }
        else {
            telaEmpate.style.display = "flex"
        }
    }
}

let voltarAConta = document.querySelectorAll(".voltarAconta")

Array.from(voltarAConta).forEach((a,index)=>{
    voltarAConta[index].addEventListener("click",()=>{
        window.location.href="../login.php"
    })
})