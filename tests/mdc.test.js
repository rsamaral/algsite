const calc = require('../mdc')

test('mdc comum', ()=>{
    expect(calc.mdc(10,20)).toBe(10)
})

test('mdc comum', ()=>{
    expect(calc.mdc(30,20)).toBe(10)
})