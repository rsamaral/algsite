const calc = require('../contador')

test('contar até o numero', ()=>{
    expect(calc.contador(3)).toBe(3)
})

test('contar até o numero', ()=>{
    expect(calc.contador(7)).toBe(7)
})