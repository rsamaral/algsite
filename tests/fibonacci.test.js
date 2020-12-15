const calc = require('../fibonacci')
const resposta = [0, 1, 1, 2, 3]
const resposta2 = [0,1,1,2,3,5]

test('fibonacci de 5', ()=>{
    expect(calc.fibonacci(5)).toStrictEqual(resposta)
})

test('fibonacci de 6', ()=>{
  expect(calc.fibonacci(6)).toStrictEqual(resposta2)
}) 