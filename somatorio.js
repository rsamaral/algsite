function somatorio(numSoma){
    var arr = numSoma.split(',').map(Number)
    var soma = 0;
    
    for(var i = 0; i < arr.length; i++){
        var soma = soma + arr[i];       
    }

    return soma;
}

module.exports = {
    somatorio
}
