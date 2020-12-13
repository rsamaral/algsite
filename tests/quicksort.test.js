const calc = require('../quicksort')
const f = [1,2,3,5]

test('Ordernar um array', ()=>{
    expect(calc.quickSort([5,3,2,1])).toBe("[1,2,3,5]")
})