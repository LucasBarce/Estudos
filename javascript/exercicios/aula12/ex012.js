agora = new Date()
hora = agora.getHours()

if (hora > 5 && hora <= 12) {
    console.log('São '+hora+' da manhã. Tenha um bom dia')
}else if (hora >= 13 && hora <= 18) {
    console.log('São '+hora+' da tarde. Tenha uma boa tarde')
}else if (hora >= 19) {
    console.log('São '+hora+' da noite. Tenha uma boa noite')
}