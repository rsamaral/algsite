const calc = require('../contador')

test('contar até o numero', ()=>{
    expect(calc.contador(3)).toBe(3)
})