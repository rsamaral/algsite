const calc = require('../numPrimo')
const num = 5
const resultado = `O número ${num} é um número primo!`

test('Verifica se é primo', ()=>{
    expect(calc.numPrimo(5)).toBe(resultado)
})