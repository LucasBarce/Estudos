function carregar(){
    var msg = document.getElementById("descrição")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = "img/manhã.jpg"
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = "img/tarde.jpg"
    }else if(hora >=18 && hora < 23){
        //BOA NOITE
        img.src = "img/noite.jpg"
    }
}