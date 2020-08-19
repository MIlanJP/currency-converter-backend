const convertCurr=require('../service/currconv')

/**
 * 
 * @param {Http resquest object} req @description getting parameter from request object  
 * @param {Http response Object} res  @description sending json Object to response Body
 */
    exports.getCurrency=(req,res)=>{
      res.send({value:  convertCurr.convertCurrency(req.params.currIn.toUpperCase(),req.params.value,req.params.currOut.toUpperCase())})
     }

     exports.getAllCurrency=(req,res)=>{
       res.send({list:convertCurr.getAllCurrency()})
     }

// module.exports.CurrencyConverter;