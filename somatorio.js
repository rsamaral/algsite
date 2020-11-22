function somatorio(numSoma){

    var arr = [1,2,3,4];
    var total = 0;
    for(var i in arr) { total += arr[i]; }
    console.log(total)

    // var array = arr.toString().split(" , ");
    
    // var soma = 0;
    
    // for(var i = 0; i < arr.length; i++){
    //     var soma = soma + parseInt(array[i]);
        
    // }

    // console.log(soma)
    // return soma;
}

module.exports = {
    somatorio
}

somatorio(1, 4, 5)