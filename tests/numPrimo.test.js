const calc = require('../numPrimo')
const num = 5
const resultado = `O número ${num} é um número primo!`
const num2 = 10
const resultado2 = `O número ${num2} não é um número primo!`

test('Verifica se é primo', ()=>{
    expect(calc.numPrimo(num)).toBe(resultado)
})

test('Verifica se é primo', ()=>{
    expect(calc.numPrimo(num2)).toBe(resultado2)
})