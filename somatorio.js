function somatorio(numSoma){
    var arr = numSoma.split(',').map(Number)
    //console.log(arr);
    
    var soma = 0;
    
    for(var i = 0; i < arr.length; i++){
        var soma = soma + arr[i];       
    }

    return soma;
}

module.exports = {
    somatorio
}
