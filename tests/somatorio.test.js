const calc = require('../somatorio')
const num = "2,2"
const num2 = "5,5"

test('somar dois numeros entre virgulas 2+2', ()=>{
    expect(calc.somatorio(num)).toBe(4)
})

test('somar dois numeros entre virgulas 5+5', ()=>{
    expect(calc.somatorio(num2)).toBe(10)
})