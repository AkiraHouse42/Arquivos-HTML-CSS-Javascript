//DOM

const imagem = document.querySelector('#imagem')
const jogador = document.querySelector('#nome')
const btha = document.querySelector('#btha')
const btney = document.querySelector('#btney')
const btcr7 = document.querySelector('#btcr7')
const btmba = document.querySelector('#btmba')
const btme = document.querySelector('#btme')
const btdy = document.querySelector('#btdy')

//Eventos

btha.addEventListener("click",Halland)
btney.addEventListener("click",Neymar)
btcr7.addEventListener("click",Cristiano)
btmba.addEventListener("click",Mbappe)
btme.addEventListener("click",Messi)
btdy.addEventListener("click",Dybala)

//Funções

function Halland(){

    imagem.src = "images/haaland.png"
}

function Neymar(){

    imagem.src = "images/neymar.jpg"
}

function Cristiano(){

    imagem.src = "images/cr7.jpg"
}

function Mbappe(){

    imagem.src = "images/mbappe.jpg"
}

function Messi(){

    imagem.src = "images/messi.jpg"
}

function Dybala(){

    imagem.src = "images/dybala.jpg"
}