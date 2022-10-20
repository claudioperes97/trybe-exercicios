let xadrez = 'REI'
let minuscula = xadrez.toLowerCase ()
switch (minuscula) {
    case 'rei':
        console.log ('qualquer direcao');
        break;
    case 'dama':
        console.log ('qualquer direcao');
        break;
    case 'torre' :
        console.log ('linha reta');
        break;
    case 'bispo' :
        console.log ('diagonal');
        break;
    case 'cavalo' :
        console.log ('em L');
        break;
    case 'peao' :
        console.log ('pra frente');
        break;
    default:
        console.log ('peça invalida');
}