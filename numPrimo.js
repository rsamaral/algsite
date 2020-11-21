function numPrimo(numP){    
    var div = 0;

    for (var i = 1; i <= numP; i++){
        if(numP % i == 0){
            div++;
        }
    }

    if(div == 2){
        var resultado = `O número ${numP} é um número primo!`;
        return resultado;
    } else {
        var resultado = `O número ${numP} não é um número primo!`;
        return resultado;
    }
    
    
}

module.exports = {
    numPrimo
}

