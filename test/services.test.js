let chai =require('chai')
let  assert=chai.assert;
let convertCurrency=require('../service/currconv').convertCurrency

describe("Testing conversion",()=>{
    it("should return converted values",()=>{
       let value= convertCurrency("CAD",1,"EUR")
       console.log(value)
       assert.equal(value,.64)
    })
    it("should return converted values",()=>{
        let value= convertCurrency("EUR",1,"INR")
        console.log(value)
        assert.equal(value,89.21)
     })
})