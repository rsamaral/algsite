const calc = require('../quicksort')


test('Ordernar um array', ()=>{
    expect(calc.quickSort([5,3,2,1])).toBe("[1,2,3,5]")
})

test('Ordernar um array', ()=>{
    expect(calc.quickSort([8,7,12,10])).toBe("[7,8,10,12]")
})