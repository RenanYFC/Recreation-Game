// Variáveis
var send1 = document.getElementById('send1')
let send2 = document.getElementById('send2')
let send3 = document.getElementById('send3')
let send4 = document.getElementById('send4')
let send5 = document.getElementById('send5')
let backButton1 = document.querySelectorAll('.back-button')[0]
let backButton2 = document.querySelectorAll('.back-button')[1]
let backButton3 = document.querySelectorAll('.back-button')[2]
var nome = document.querySelectorAll('.input-send1')[0]
var sobrenome = document.querySelectorAll('.input-send1')[1]
var cpf = document.querySelectorAll('.input-send1')[2]
var dataNascimento = document.querySelectorAll('.input-send1')[3]
let email = document.querySelectorAll(".input-send2 ")[0]
let replaceToEmail = document.querySelectorAll(".replace-to-email")
let senha = document.querySelectorAll(".input-send2 ")[1]
let confirmarSenha = document.querySelectorAll(".input-send2 ")[2]
let cardContainer = document.querySelectorAll(".content-div")[0]
let cardNome = document.querySelectorAll('.card-info-digitada')[0]
let cardSobrenome = document.querySelectorAll('.card-info-digitada')[1]
let cardCPF = document.querySelectorAll('.card-info-digitada')[2]
let cardDataNascimento = document.querySelectorAll('.card-info-digitada')[3]
let content1 = document.querySelectorAll(".aside-dinamic-form")[0]
let content2 = document.querySelectorAll(".aside-dinamic-form")[1]
let content3 = document.querySelector("#content-3")
let content4 = document.querySelector("#content-4")
let content5 = document.querySelector("#content-5")
var width = document.body.clientWidth

let requisitosSenhaMaiusculaCheck = /[A-Z]+/
let requisitosSenhaMinusculaCheck = /[a-z]+/
let requisitosSenhaCaractereEspecialCheck = /[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]+/
let requisitosSenhaNumeroCheck = /[0-9]+/
let requisitosSenha8DigitosCheck = /^.{8,}$/

let requisitosSenha = document.querySelector("#requirements-container")
let numeros = ['1','2','3','4','5','6','7','8','9']
let requisitosSenhaMaiuscula = document.querySelectorAll('.check-passsword-icon')[0]
let requisitosSenhaMinuscula = document.querySelectorAll('.check-passsword-icon')[1]
let requisitosSenhaCaractereEspecial = document.querySelectorAll('.check-passsword-icon')[2]
let requisitosSenhaNumero = document.querySelectorAll('.check-passsword-icon')[3]
let requisitosSenha8Digitos = document.querySelectorAll('.check-passsword-icon')[4]
let emailEstado = false
let requisitosEstado = false
let senhasIguais = false
let form1Invalido = document.querySelector("#error-container1")
let emailInvalido = document.querySelector("#error-container2")
let senhaInvalidaLinhaItem1 = document.querySelector("#senhas-invalidas-row-1")
let senhaInvalidaLinhaItem2 = document.querySelector("#senhas-invalidas-row-2")
let senhaInvalidaColunaItem1 = document.querySelector("#senhas-invalidas-column-1")
let senhaInvalidaColunaItem2 = document.querySelector("#senhas-invalidas-column-2")

let verifyEmailInput1 = document.querySelectorAll(".verification-code-input")[0]
let verifyEmailInput2 = document.querySelectorAll(".verification-code-input")[1]
let verifyEmailInput3 = document.querySelectorAll(".verification-code-input")[2]
let verifyEmailInput4 = document.querySelectorAll(".verification-code-input")[3]
let verifyEmailCodeInvalid = document.querySelector("#verify-email-code-invalid")
let resend = document.querySelector("#reenviarCodigo")
let waitResend = document.querySelector("#tempoReenviarCodigo")

let btnEnable = false
let timeHTML = document.querySelector("#time-remaining")
let timeValue = 60


let date = new Date
const dataAtual = {
    'dia': date.getDate(),
    'mes': (date.getMonth())+1,
    'ano': date.getFullYear()
}
let mes30dias = [4,6,9,11]
let mes31dias = [1,3,5,7,8,10,12]

const caracteresEspeciais = [
    "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@",
    "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "¨"
]
      
const caracteresEspeciaisKeyCode = [
    33, // Keycode for '!'
    34, // Keycode for '"'
    35, // Keycode for '#'
    36, // Keycode for '$'
    37, // Keycode for '%'
    38, // Keycode for '&'
    39, // Keycode for "'"
    40, // Keycode for '('
    41, // Keycode for ')'
    42, // Keycode for '*'
    43, // Keycode for '+'
    44, // Keycode for ','
    45, // Keycode for '-'
    46, // Keycode for '.'
    47, // Keycode for '/'
    58, // Keycode for ':'
    59, // Keycode for ';'
    60, // Keycode for '<'
    61, // Keycode for '='
    62, // Keycode for '>'
    63, // Keycode for '?'
    64, // Keycode for '@'
    91, // Keycode for '['
    92, // Keycode for '\'
    93, // Keycode for ']'
    94, // Keycode for '^'
    95, // Keycode for '_'
    96, // Keycode for '`'
    123, // Keycode for '{'
    124, // Keycode for '|'
    125, // Keycode for '}'
    126, // Keycode for '~'
    168, // Keycode for '¨'
];


//==============================================================

// Funções
function erroInputInvalido(erro) {
    console.log("Input Inválido. Corrija "+erro)
}

function justNumbers(evento, tecla) {   
    if ((tecla != 48 && tecla != 49 && tecla != 50 && tecla != 51 && tecla != 52 && tecla != 53 && tecla != 54 && tecla != 55 && tecla != 56 && tecla != 57 && evento.keyCode != 8) || (tecla == 32)){
        evento.preventDefault()
    }
}

function justLetters(evento, tecla) {   
    if (tecla == 48 || tecla == 49 || tecla == 50 || tecla == 51 || tecla == 52 || tecla == 53 || tecla == 54 || tecla == 55 || tecla == 56 || tecla == 57 ){
        evento.preventDefault()
    }
}

function éCaracterEspecial(evento, tecla) {
    caracteresEspeciais.forEach((a,index)=>{
        if (tecla == caracteresEspeciaisKeyCode[index]) {
            evento.preventDefault()
        }
    })
}

function éCaracterEspecialColado(evento) {
    let valorCopiado = evento.clipboardData.getData("text/plain")
    caracteresEspeciais.forEach((a,indexCaractere)=>{
        Array.from(valorCopiado).forEach((a,indexValorCopiado)=>{
            if (valorCopiado[indexValorCopiado] == caracteresEspeciais[indexCaractere]) {
                evento.preventDefault()
            }
        })
    })
}

function éLetraColada(evento) {
    let valorCopiado = evento.clipboardData.getData('text/plain')
        Array.from(valorCopiado).forEach((a,indexValorCopiado)=>{
            let caractere = valorCopiado[indexValorCopiado]
            if ((caractere != '0' && caractere != '1' && caractere != '2' && caractere != '3' && caractere != '4' && caractere != '5' && caractere != '6' && caractere != '7' && caractere != '8' && caractere != '9') || (caractere == " ")) {
                evento.preventDefault()        
            }    
        })
}

function checkChange(senha) {
    
    // Verificar se tem 8 dígitos
    if (requisitosSenha8DigitosCheck.test(senha) == true) {
        requisitosSenha8Digitos.src = "./img/right.svg"
    }
    else {
        requisitosSenha8Digitos.src = "./img/wrong.svg"
    }

    // Verificar se tem letra maiúscula
    if (requisitosSenhaMaiusculaCheck.test(senha) == true) {
        requisitosSenhaMaiuscula.src = "./img/right.svg"
    }
    else {
        requisitosSenhaMaiuscula.src = "./img/wrong.svg"
    }

    // Verificar se tem letra minúscula
    if (requisitosSenhaMinusculaCheck.test(senha) == true) {
        requisitosSenhaMinuscula.src = "./img/right.svg"
    }
    else {
        requisitosSenhaMinuscula.src = "./img/wrong.svg"
    }

    // Verificar se tem caractere especial
    if (requisitosSenhaCaractereEspecialCheck.test(senha) == true) {
        requisitosSenhaCaractereEspecial.src = "./img/right.svg"
    }
    else {
        requisitosSenhaCaractereEspecial.src = "./img/wrong.svg"
    }

    // Verificar se tem número
    if (requisitosSenhaNumeroCheck.test(senha) == true) {
        requisitosSenhaNumero.src = "./img/right.svg"
    }
    else {
        requisitosSenhaNumero.src = "./img/wrong.svg"
    }

    // Definir se os requisitos estão sendo cumpridos
    if ((requisitosSenha8DigitosCheck.test(senha) == true) && (requisitosSenhaMaiusculaCheck.test(senha) == true) && (requisitosSenhaMinusculaCheck.test(senha) == true) && (requisitosSenhaCaractereEspecialCheck.test(senha) == true) && (requisitosSenhaNumeroCheck.test(senha) == true)) {
        requisitosEstado = true
    }
}

// Eventos

// Nome
nome.addEventListener('keydown',(evento)=>{
    éCaracterEspecial(evento,evento.keyCode)
    justLetters(evento,evento.keyCode)
    if (evento.keyCode == 32) {
        evento.preventDefault()
    }
})
nome.addEventListener('paste', (evento)=>{
    éCaracterEspecialColado(evento)
})

// Sobrenome
sobrenome.addEventListener('keydown',(evento)=>{
    éCaracterEspecial(evento,evento.keyCode)
    justLetters(evento,evento.keyCode)
})
sobrenome.addEventListener('paste',(evento)=>{
    éCaracterEspecialColado(evento)
})

// CPF - Máscara
cpf.addEventListener('keydown',(evento)=>{
    justNumbers(evento,evento.keyCode)
    let cpfQuantidade = cpf.value.length
    if (evento.keyCode != 8) {
        if (cpfQuantidade==3 || cpfQuantidade==7)  {
            cpf.value += "."
        }
    
        if (cpfQuantidade == 11) {
            cpf.value += "-"
        }
    }
})

cpf.addEventListener('paste',(evento)=>{
    éCaracterEspecialColado(evento)
    éLetraColada(evento)
})

// Data de Nascimento - Máscara
dataNascimento.addEventListener('keydown',(evento)=>{
    
    let quantidadeDataNascimento = dataNascimento.value.length
    if (evento.keyCode != 8) {
        if (quantidadeDataNascimento == 2 || quantidadeDataNascimento == 5) {
            dataNascimento.value += "/"
        }
    }
})

// Data de Nascimento - Ajustar Data Digitada
dataNascimento.addEventListener('keydown',(evento)=>{
    justNumbers(evento,evento.keyCode)
    var partes = dataNascimento.value.split("/")
    var dia = partes[0]
    var mes = partes[1]
    if (dataNascimento.value.length == 3 && dia > 31) { 
        dataNascimento.value = "31/"
    }
    // Se falhar o bloqueio a caracteres especiais
    else if (dataNascimento.value.length == 3 && dia < 1) {
        dataNascimento.value = "01/"
    }        

    if (dataNascimento.value.length == 5 && mes < 1) {
        dataNascimento.value = `${dia}/01/`
    }

    if (dataNascimento.value.length == 6 && mes == 2 && dia>29) {
        dia = 28
        dataNascimento.value = `${dia}/${mes}/`
    }

    mes30dias.forEach((a,index)=>{
        // Se é um mês com 30 dias e o usuário digitar 31
        if (dataNascimento.value.length == 6 && mes30dias[index] == mes && dia>30) {
            dia = 30
            dataNascimento.value = `${dia}/${mes}/`
        }
    })
    
    if (mes > 12 && dataNascimento.value.length == 6) {
        dataNascimento.value = `${dia}/12/`
    }
})


    dataNascimento.addEventListener('paste',(evento)=>{
        éCaracterEspecialColado(evento)
        éLetraColada(evento)
    })

    // Data de Nascimento - Ajustar Ano Digitado
    dataNascimento.addEventListener('focusout',()=>{
        let partes = dataNascimento.value.split("/")
        let ano = partes[2]
        let dia = partes[0]
        let mes = partes[1]

        if (ano>=dataAtual.ano && mes>dataAtual.mes) {
            dataNascimento.value = `${dia}/${mes}/${(dataAtual.ano)-1}`
        }
        else if (ano>=dataAtual.ano && mes<=dataAtual.mes){
            ano = dataAtual.ano
            dataNascimento.value = `${dia}/${mes}/${ano}`
        }

        // Data de Nascimento - Verificar se é ano bissexto

        if (dia==29 && mes==2 && ano != 0 && ano%4!=0) {
            dataNascimento.value = `28/02/${ano}`
        }

        cardDataNascimento.innerHTML = dataNascimento.value

    })


    // Input Data de Nascimento - Ocultar e exibir o placeholder com eventos
    let a = document.getElementById("aniversario")
    a.addEventListener('focus',()=>{
        a.placeholder = "dd/mm/aaaa"
    })
    a.addEventListener('focusout',()=>{
        a.placeholder=""
    })



// Card ==========================================================================================


nome.addEventListener('keyup', () => {
    cardNome.innerHTML = (nome.value).toUpperCase()
})

sobrenome.addEventListener('keyup', () => {
    cardSobrenome.innerHTML = (sobrenome.value).toUpperCase()
})

cpf.addEventListener('keyup', () => {
    cardCPF.innerHTML = (cpf.value).toUpperCase()
})

dataNascimento.addEventListener('keyup', () => {
    cardDataNascimento.innerHTML = (dataNascimento.value).toUpperCase()
})

var iconUser = document.querySelectorAll(".icon-user")



var campos = document.querySelectorAll('.input-send1')
let labels =  document.querySelectorAll('form-dadosPessoais-label')

labels.forEach((a,index)=>{
    labels[index].addEventListener('click',()=>{
        //
    })
})


send1.addEventListener('click',()=>{
    if ((nome.value != "") && (sobrenome.value != "") && (cpf.value.length == 14) && (dataNascimento.value.length == 10)) {
        content1.classList.add("esconder")
        content2.classList.remove("esconder")
        cardContainer.classList.add("esconder")
        form1Invalido.style.display = "none"
    }
    else {
        form1Invalido.style.display = "block"
    }
})

backButton1.addEventListener('click',()=>{
    content1.classList.remove("esconder")
    content2.classList.add("esconder")
    cardContainer.classList.remove("esconder")
})

// Eventos para o 2º Formulário: Credenciais

senha.addEventListener ('keyup',(evento)=>{
    console.log (""+senha.value)
    checkChange(senha.value)
})

senha.addEventListener('focusout', ()=>{
    // Verificar se as senhas são iguais e exibir na tela caso não sejam
    if (senha.value == confirmarSenha.value) {
        senhasIguais = true
        if (width > 980) {
            senhaInvalidaLinhaItem2.style.opacity = "0"
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "0"
        }
    }
    else {
        senhasIguais = false
        if (width > 980) {
            senhaInvalidaLinhaItem2.style.opacity = "1"
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "1"
        }
    }
})

confirmarSenha.addEventListener('focusout',()=>{
    // Verificar se as senhas são iguais e exibir na tela caso não sejam
    if (senha.value == confirmarSenha.value) {
        senhasIguais = true
        if (width > 980) {
            senhaInvalidaLinhaItem2.style.opacity = "0"
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "0"
        }
    }
    else {
        senhasIguais = false
        if (width > 980) {
            senhaInvalidaLinhaItem2.style.opacity = "1"
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "1"
        }
    }
})

send2.addEventListener('click',()=>{

    // Verificar se as senhas são iguais e exibir na tela caso não sejam
    if (senha.value == confirmarSenha.value) {
        senhasIguais = true
        if (width > 980) {
            senhaInvalidaLinhaItem2.style.opacity = "0"
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "0"
        }
    }
    else {
        senhasIguais = false
        if (width > 980) {
            senhaInvalidaLinhaItem2.style.opacity = "1"
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "1"
        }
    }

    if (email.value) {
        emailEstado = true
        emailInvalido.style.opacity = "0"
    }
    else {
        emailInvalido.style.opacity = "1"
    }

    if (requisitosEstado == true && senhasIguais == true && emailEstado == true) {
        console.log ("foi")
        content2.classList.add("esconder")
        content3.classList.remove("esconder")
        senhaInvalidaLinhaItem1.style.display = "none"
        senhaInvalidaColunaItem1.style.display = "none"
        emailInvalido.style.opacity = 0
        Array.from(replaceToEmail).forEach((a,index)=>{
            replaceToEmail[index].innerText = email.value
        })
    }
    else if (requisitosEstado == false && senhasIguais == false) {
        if (width > 980) { // Se o display estiver alinhado na horizontal, usar o aviso em linha 
            senhaInvalidaLinhaItem1.style.opacity = "1"
            senhaInvalidaLinhaItem2.style.opacity = "1"
            console.log ("ambos errados horizontal")
        }
        else {
            senhaInvalidaColunaItem1.style.opacity = "1"
            senhaInvalidaColunaItem2.style.opacity = "1"
            console.log ("ambos errados vertical")
        }
    }
    else if (requisitosEstado == false) {
        if (width > 980) { // Se o display estiver alinhado na horizontal, usar o aviso em linha 
            senhaInvalidaLinhaItem1.style.opacity = "1"
            console.log ("requisitos errados horizontal")
        }
        else {
            senhaInvalidaColunaItem1.style.opacity = "1"
            console.log ("requisitos errados vertical")
        }
    }
    else if (senhasIguais == false) {
        if (width > 980) { // Se o display estiver alinhado na horizontal, usar o aviso em linha 
            senhaInvalidaLinhaItem2.style.opacity = "1"
            console.log ("senhas diferentes horizontal")
        }
        else {
            senhaInvalidaColunaItem2.style.opacity = "1"
            console.log ("senhas diferentes vertical")
        }
    }
})

backButton2.addEventListener('click',()=>{
    content2.classList.remove("esconder")
    content3.classList.add("esconder")
})

function enableButton() {
    let interval = setInterval((index) => {
        timeValue--
        timeHTML.innerText = `0:${timeValue}`
        if (timeValue == 0) {
            btnEnable = true
            clearInterval(interval)
            console.log ("acabou")
            resend.style.display = "block"
            waitResend.style.display = "none"
        }
    }, 1000);
}

resend.addEventListener('click', ()=>{
    sortNumber()
    sendEmail()
    resend.style.display = "none"
    waitResend.style.display = "block"
    timeValue = 60
    enableButton()
})

send3.addEventListener('click',()=>{
    content3.classList.add("esconder")
    content4.classList.remove("esconder")
    enableButton()
    sortNumber()
    sendEmail()
})

backButton3.addEventListener('click',()=>{
    content3.classList.remove("esconder")
    content4.classList.add("esconder")
})

send4.addEventListener('click', ()=>{
    console.log ("Numeros: "+sortedNumber1+" "+sortedNumber2+" "+sortedNumber3+" "+sortedNumber4)
    if (verifyEmailInput1.value == sortedNumber1 && verifyEmailInput2.value == sortedNumber2 && verifyEmailInput3.value == sortedNumber3 && verifyEmailInput4.value == sortedNumber4) {
        content4.classList.add("esconder")
        content5.classList.remove("esconder")
        verifyEmailCodeInvalid.style.display = "none"
        console.log("campo: "+verifyEmailInput1.value)
        console.log("campo: "+verifyEmailInput2.value)
        console.log("campo: "+verifyEmailInput3.value)
        console.log("campo: "+verifyEmailInput4.value)
    }
    else {
        verifyEmailCodeInvalid.style.display = "block"
        console.log("campo: "+verifyEmailInput1.value)
        console.log("campo: "+verifyEmailInput2.value)
        console.log("campo: "+verifyEmailInput3.value)
        console.log("campo: "+verifyEmailInput4.value)
    }

})

function codificarLink(array) {
    var codificados = []
    array.forEach((a,index)=>{
        let codificado = encodeURIComponent(array[index])
        console.log("info: "+codificado)
        codificados.push(codificado)
    })
    console.log("array:"+codificados)
    return codificados
}


send5.addEventListener('click',()=>{
    // Formatar dados para o MySQL
    let nomeCompleto = nome.value+" "+sobrenome.value
    let numerosCPF = cpf.value.replace('.','')
    console.log("cpf1 = "+numerosCPF)
    numerosCPF = numerosCPF.replace('-','')
    console.log("cpf2 = "+numerosCPF)
    numerosCPF = numerosCPF.replace('.','')
    let dataAtualSQL = `${dataAtual.ano}-${dataAtual.mes}-${dataAtual.dia}`
    let dividirData = dataNascimento.value.split("/")
    dataNascimentoSQL = `${dividirData[2]}-${dividirData[1]}-${dividirData[0]}`
    let dados = [nomeCompleto,numerosCPF, dataAtualSQL, dataNascimentoSQL, email.value, senha.value]

    let codificados = codificarLink(dados)
    console.log("array pós função chamada:"+codificados)

    // Enviar para PHP
    let link = `nome=${codificados[0]}&cpf=${codificados[1]}&dataAtual=${codificados[2]}&dataNascimento=${codificados[3]}&email=${codificados[4]}&senha=${codificados[5]}`
    window.location.href=`script/recebeVariaveis.php?${link}`
})

var sortedNumber = (Math.floor(Math.random()*9999)+1000).toString()
var splitSortedNumber = sortedNumber.split("")
var sortedNumber1 = ''
var sortedNumber2 = ''
var sortedNumber3 = ''
var sortedNumber4 = ''

function sortNumber() {
    sortedNumber = (Math.floor(Math.random()*9999)+1000).toString()
    splitSortedNumber = sortedNumber.split("")
    sortedNumber1 = splitSortedNumber[0]
    sortedNumber2 = splitSortedNumber[1]
    sortedNumber3 = splitSortedNumber[2]
    sortedNumber4 = splitSortedNumber[3]
}


function sendEmail() {

    const data = {
        sortedNumber,
        email: email.value
    }

    fetch('http://192.168.1.105/GAME/api/sendEmail.php',
        {
            method: 'POST',
            body: JSON.stringify(data)
        }
    )
    .then((res)=>{
        console.log("--req bem sucedida")
        console.log(res).JSON()
    })
    .catch((err)=>{
        console.log("--req mal sucedida "+err)
    })
}