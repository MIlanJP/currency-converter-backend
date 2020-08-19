const express=require('express');
const CurrencyConverter=require('../controller/currconv')
const router=express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
 
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// sending response and request objects to controller
router.get("/:currIn/:value/:currOut",CurrencyConverter.getCurrency)

// Route to get the currency list
router.get("/getcurrencylist",CurrencyConverter.getAllCurrency)

module.exports=router;
