const fs = require("fs");
const currencyData = require("../currency.json");
const logger = require("../logger");

currencyData.rates["EUR"]=1;
currencyData.rates["INR"]=89.21

exports.convertCurrency=(currencyFrom,value,currencyTo)=>{
    console.log(currencyData.rates[currencyFrom])
    console.log(value)
    console.log(currencyData.rates[currencyTo])
    return (Math.round( (((1 / currencyData.rates[currencyFrom]) *  
    value) * currencyData.rates[currencyTo]) * 100)) / 100   
    
}