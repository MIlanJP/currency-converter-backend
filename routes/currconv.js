const express=require('express');
const CurrencyConverter=require('../controller/currconv')
const router=express.Router();


// sending response and request objects to controller
router.get("/:currIn/:value/:currOut",CurrencyConverter.getCurrency)

// Route to get the currency list
router.get("/getcurrencylist",CurrencyConverter.getAllCurrency)

module.exports=router;
