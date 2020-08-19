let chai =require('chai')
let  expect=chai.expect;
let convertCurrency=require('../service/currconv').convertCurrency

before("Testing conversion",()=>{
    it("should return converted values",()=>{
       let value= convertCurrency("CAD",1,"EUR")
       console.log(value)
       expect(value).to.equal(.64)
    })
})