let chai =require('chai')
let  assert=chai.assert;
let convertCurr=require('../service/currconv')

describe("Testing conversion",()=>{
    it("should return converted values",()=>{
       let value= convertCurr.convertCurrency("CAD",1,"EUR")
       console.log(value)
       assert.equal(value,.64)
    })
    it("should return converted values",()=>{
        let value= convertCurr.convertCurrency("EUR",1,"INR")
        console.log(value)
        assert.equal(value,89.21)
     })

     it("should return wrong values",()=>{
      let value= convertCurr.convertCurrency("EUR",1,"INR")

      assert.notEqual(value,8)
   })

     it("should return list of currencies + testing",()=>{
      let value= convertCurr.getAllCurrency()
      assert.equal(value.length,33)
   })
   it("should return list of currencies - testing",()=>{
      let value= convertCurr.getAllCurrency()
      assert.notEqual(value.length,31)
   })
})