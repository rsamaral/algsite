const calc = require('../somatorio')
const num = "2,2"

test('somar dois numeros', ()=>{
    expect(calc.somatorio(num)).toBe(4)
})