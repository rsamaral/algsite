function mdc(num1, num2){
  while (num2 != 0) {
    const resto = num1 % num2;
    num1 = num2;
    num2 = resto;
  }

  console.log('O MDC entre os dois número equivale à: ' + num1);

  return num1;

}



module.exports = {
  mdc
}