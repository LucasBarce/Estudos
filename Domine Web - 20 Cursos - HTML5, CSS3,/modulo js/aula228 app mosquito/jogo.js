var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var criaMoquitoTempo = 0
var nivel = window.location.search
nivel = nivel.replace('?', '')
alert(nivel)

if(nivel === 'normal'){
    criaMoquitoTempo = 1500
}if(nivel === 'dificil'){
    criaMoquitoTempo = 1000
}if(nivel === 'fallen'){
    criaMoquitoTempo = 750
}

function ajustaTamanhoTela()
{
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura,largura)
}

ajustaTamanhoTela()


var cronometro = setInterval(function()
    {
        tempo -= 1
        if(tempo < 0)
            {
                clearInterval(cronometro)
                clearInterval(criaMosca)
                window.location.href = `vitoria.html`
            }else
            {
                document.getElementById(`cronometro`).innerHTML = tempo
            }
    }, 1000)

function posicaoRandomica()
{
    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito'))
        {
            document.getElementById('mosquito').remove()
            if(vidas > 3)
            {
                window.location.href = `fim_de_jogo.html`
            }else
            {
                document.getElementById(`v` + vidas).src = 'imagens/coracao_vazio.png'
                vidas++
            }
        }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criando elemento html

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ` ` + ladoAleatorio()
    mosquito.style.left = posicaoX + `px`
    mosquito.style.top = posicaoY + `px`
    mosquito.style.position = `absolute`
    mosquito.id = `mosquito`
    mosquito.onclick = function(){this.remove()}

    document.body.appendChild(mosquito)

    console.log(ladoAleatorio())
}

function tamanhoAleatorio()
{
    var classe = Math.floor(Math.random() * 3)
    
    if(classe == 0)
        {
            return `mosquito1`
        }if(classe == 1)
            {
                return `mosquito2`
            }if(classe == 2)
                {
                    return `mosquito3`
                }
}

function ladoAleatorio()
{
    var lado = Math.floor(Math.random() * 2)
    
    if(lado == 0)
        {
            return `ladoA`
        }if(lado == 1)
            {
                return `ladoB`
            }
}