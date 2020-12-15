const calc = require('../fibonacci')
const resposta = [0, 1, 1, 2, 3]
const resposta2 = [0,1,1,2,3,5]

test('fibonacci', ()=>{
    expect(calc.fibonacci(5)).toStrictEqual(resposta)
})

test('fibonacci', ()=>{
  expect(calc.fibonacci(6)).toStrictEqual(resposta2)
})