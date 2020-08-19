const convertCurrency=require('../service/currconv').convertCurrency

// console.log(convertCurrency("CAD",1,"EUR"))

    exports.getCurrency=(req,res)=>{
      res.send({value:  convertCurrency(req.params.currIn.toUpperCase(),req.params.value,req.params.currOut.toUpperCase())})
     }

// module.exports.CurrencyConverter;