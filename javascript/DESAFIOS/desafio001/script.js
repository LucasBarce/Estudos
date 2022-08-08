
function calculador() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var ano = document.getElementById("id-ano").value
    var msg = document.getElementById("texto")
    var imagem = document.getElementById("imagem")
    if (ano.length == 0 || ano > anoAtual){
        window.alert("Erro!!Verifique os dados e tente novamente")
    }else{
        var idade = anoAtual - ano
        var sexo = document.getElementsByName("sexo")
        var gênero = ''
        if (sexo[1].checked){
            var gênero = 'Homem'
            if (idade < 5 ){
                imagem.style.backgroundImage = "url('img/marvin.png')"
            }else if (idade <= 10 && idade >= 5) {
                imagem.style.backgroundImage = "url('img/crianca.jpg')"
            }else if (idade < 18 && idade > 10) {
                imagem.style.backgroundImage = "url('img/adolescenter.png')"
            }else {
                imagem.style.backgroundImage = "url('img/barney.jpeg')"
            }

        }else{
            var gênero = 'Mulher'
            if (idade < 5 ){
                imagem.style.backgroundImage = "url('img/marvin.png')"
            }else if (idade <= 10 && idade >= 5) {
                imagem.style.backgroundImage = "url('img/crianca-mulher.jpg')"
            }else if (idade < 18 && idade > 10) {
                imagem.style.backgroundImage = "url('img/adolescenter-mulher.jpg')"
            }else {
                imagem.style.backgroundImage = "url('img/robin.jpg')"
            }
        }
        msg.innerHTML = `Você é ${gênero} de ${idade}`
    }

}