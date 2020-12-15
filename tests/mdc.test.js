const calc = require('../mdc')

test('mdc entre dois números: 10 e 20', ()=>{
    expect(calc.mdc(10,20)).toBe(10)
})

test('mdc entre dois números: 30 e 20 ', ()=>{
    expect(calc.mdc(30,20)).toBe(10)
})