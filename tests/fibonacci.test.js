const calc = require('../fibonacci')
const resposta = "[0, 1, 1, 2, 3]"
const resposta2 = "[0, 1, 1, 2, 3]"

test('fibonacci', ()=>{
    expect(calc.fibonacci(5)).toBe(resposta)
})

test('fibonacci', ()=>{
    expect(calc.fibonacci(6)).toBe(resposta2)
})