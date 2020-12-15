const calc = require('../quicksort')
const array1 = [5,3,2,1]
const array2 = [8,7,12,10]
const resposta1 = [1,2,3,5]
const resposta2 = [7,8,10,12]

test('Ordernar um array [5,3,2,1] ', ()=>{
    expect(calc.quickSort(array1)).toStrictEqual(resposta1)
})

test('Ordernar um array [8,7,12,10]', ()=>{
    expect(calc.quickSort(array2)).toStrictEqual(resposta2)
})