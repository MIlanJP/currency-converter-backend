const fs = require("fs");


let currencyData;
currencyData =JSON.parse( fs.readFileSync("../currency.json"));

currencyData.rates["EUR"]=1;
currencyData.rates["INR"]=89.21

exports.convertCurrency=(currencyFrom,value,currencyTo)=>{
    return (Math.round( (((1 / currencyData.rates[currencyFrom]) *  
    value) * currencyData.rates[currencyTo]) * 100)) / 100   
}