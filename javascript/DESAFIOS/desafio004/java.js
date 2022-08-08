function tabuada(){
    var v = document.getElementById("numero").value
    var resposta = document.getElementById("resposta")
    var valor = Number(v)
    var contador = 0

    if (v != 0){
        resposta.innerHTML = ""
        while(contador != 10){
            contador = contador + 1
            resposta.innerHTML += `${valor} X ${contador} = ${valor * contador}<br>`
        }
    }else{
        window.alert("Digite um valor para continuar")
    }
}