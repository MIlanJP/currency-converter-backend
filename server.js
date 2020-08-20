require('dotenv').config();
const express=require('express')
const app=express();
const logger=require('./logger')
const router=require('./routes/currconv')

// Handling URI to he router
const cors=require('cors')
app.use(cors());
app.use('/api/currconv',router);

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Runnning Port 
const port=process.env.PORT

app.listen(port,()=>{
logger.info("server listening on port "+port)
})