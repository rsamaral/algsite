const calc = require('../somatorio')
const num = "2,2"
const num2 = "5,5"

test('somar dois numeros', ()=>{
    expect(calc.somatorio(num)).toBe(4)
})

test('somar dois numeros', ()=>{
    expect(calc.somatorio(num2)).toBe(10)
})