let player = document.querySelector("#player")
let timeValue = 60

function changeSprintPlayer() {
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

class events {
    constructor () {
    }

    entrada(elemento) {
        elemento.src = "fd.png"
    }

    baterPenalti(elemento) {
        elemento.src = ""
    }
}

let obj = new events
obj.teste()
