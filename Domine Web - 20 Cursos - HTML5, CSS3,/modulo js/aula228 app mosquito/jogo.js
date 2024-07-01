var altura = 0
var largura = 0

function ajustaTamanhoTela()
{
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoTela()
//console.log(altura,largura)

function posicaoRandomica()
{
    var posicaoX = Math.floor(Math.random() * largura)
    var posicaoY = Math.floor(Math.random() * altura)

    console.log(posicaoX, posicaoY)

    //criando elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = `mosquito1`
    document.body.appendChild(mosquito)
}