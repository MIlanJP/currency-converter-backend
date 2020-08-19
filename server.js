require('dotenv').config();
const express=require('express')
const app=express();
const logger=require('./logger')
const router=require('./routes/currconv')

// Handling URI to he router
app.use('/api/currconv',router);

app.get('/',(req,res)=>{
    res.send("Hello World")
})

// Runnning Port 
const port=process.env.PORT||3000;

app.listen(port,()=>{
logger.info("server listening on port "+port)
})