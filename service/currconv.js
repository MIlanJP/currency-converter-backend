const fs = require("fs");
const currencyData = require("../currency.json");

currencyData.rates["EUR"]=1;
currencyData.rates["INR"]=89.21


/**
 * 
 * @param {String} currencyFrom 
 * @param {Number} value 
 * @param {String} currencyTo 
 * @description Used to convert send currency into required currency
 */
exports.convertCurrency=(currencyFrom,value,currencyTo)=>{
    return (Math.round( (((1 / currencyData.rates[currencyFrom]) *  
    value) * currencyData.rates[currencyTo]) * 100)) / 100   
    
}

/**
 * @description Used to send all lisyt of country currency data
 */
exports.getAllCurrency=()=>{
    return Object.keys(currencyData.rates);
}
