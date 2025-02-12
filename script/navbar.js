let perfil = document.querySelectorAll(".menu-link")[0]
let escudo = document.querySelectorAll(".menu-link")[1]
let logo = document.querySelector(".logo")

perfil.addEventListener("click",()=>{
    window.location.href = "./meu-perfil.php"
})

escudo.addEventListener("click",()=>{
    window.location.href = "./register-team.php"
})

logo.addEventListener("click",()=>{
    window.location.href = "../game-main/game"
})