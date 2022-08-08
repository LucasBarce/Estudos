agora = new Date()
diaSemana = agora.getDay()

switch (diaSemana) {
    case 0:
        diaSemana = "Domingo"
        break;
    
    case 1:
        diaSemana = "Segunda"
        break;

    case 2:
        diaSemana = "Terça"
        break;

    case 3:
        diaSemana = "Quarta"
        break;

    case 4:
        diaSemana = "Quinta"
        break;
        
    case 5:
        diaSemana = "Sexta"
        break;    

    default:
        break;
}

console.log('Hoje é '+diaSemana+' ')