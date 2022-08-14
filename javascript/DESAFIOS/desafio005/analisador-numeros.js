//VAR
var lista = document.getElementById("seleção-numeros")
var resposta = document.getElementById("resposta")
var media = 0
var soma = 0
var menor = 101
var maior = 0
var total = 0
var list = []

function adicionar(){
    var numero =  document.getElementById("numero").value
    if (inlista(numero, list) && isnumber(numero)){
        var option = document.createElement("option")
        option.textContent = "O número "+Number(numero)+" foi adicionado."
        list.push(Number(numero))
        lista.appendChild(option)
  
        if (Number(numero) > maior){
            maior = Number(numero)
        }
        if (Number(numero) < menor ){
            menor = Number(numero)
        }
    }else{
        window.alert(`O número já foi adicionado ou é inválido//Lista: ${list}`)
    }
}

function inlista(x, list){
    if (list.indexOf(Number(x)) == -1){
        return true 
    }else{
        return false
    }
}

function isnumber(x){
    if (Number(x) > 0 && Number(x) <= 100){
        return true
    }else{
        return false
    }
}

/*
FODASE
*/
resetar = document.getElementById("Resetar")
var resposta = document.getElementById("resposta")
function finalizar(){
    c = list.length
    if (c > 0){
        do{
            soma = soma + list[c - 1]
            c = c - 1
        }while (c != 0)
        var media = soma / list.length
    }
    resposta.innerHTML = `Ao todo temos ${list.length}<br>
                          O maior valor é ${maior}<br>
                          O menor valor é ${menor}<br>
                          Somando tudo temos ${soma}<br>
                          A média dos valores foi de ${media}<br>   

    `
    resetar.style.display="block"
}
