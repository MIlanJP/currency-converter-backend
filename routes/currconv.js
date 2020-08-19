const express=require('express');
const CurrencyConverter=require('../controller/currconv')
const router=express.Router();


router.get("/:currIn/:value/:currOut",CurrencyConverter.getCurrency)
module.exports=router;