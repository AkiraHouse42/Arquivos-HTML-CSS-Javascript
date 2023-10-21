const km = document.querySelector('#km')
const kml = document.querySelector('#kml')
const l = document.querySelector('#l')
const botao = document.querySelector('#btn')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click',custo)

function custo(){

    let preço = (Number(km.value)/Number(kml.value))*l.value

    resultado.textContent = "O custo total da viagem será de R$ " + preço.toFixed(1)
}