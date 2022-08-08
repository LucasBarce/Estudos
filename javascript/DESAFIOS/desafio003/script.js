function contador(){
    var i = document.getElementById("inicio").value;
    var f = document.getElementById("fim").value;
    var p = document.getElementById("passo").value;
    var resposta = document.getElementById("resposta");
    inicio = Number(i)
    fim = Number(f)
    passo = Number(p)
    resposta.innerHTML = `${inicio}`

    if (inicio == " "){
        window.alert("Início deve ser preenchido!")
    }else{
        resposta.innerHTML = `${inicio}`
        if (fim > inicio){ /*Número Positivo*/
            do{
                inicio = inicio + passo
                resposta.innerHTML += `->${inicio}`
            }while(fim > inicio)
        }else{/*Número Negativo*/  
            do{
                fim = fim + passo
                resposta.innerHTML += `->${fim}`
            }while(inicio > fim)
        }
    
    }
}