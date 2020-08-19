const {createLogger,transports,format} =require('winston');

const logger=createLogger({
    transports:[
        new transports.File({
            filename:"node.log",
            level:"info",
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.File({
            filename:"error.log",
            level:"error",
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.Console({
            level:'info',
            format:format.combine(format.timestamp(),format.json())
        }),
        new transports.Console({
            level:'error',
            format:format.combine(format.timestamp(),format.json())
        })
    ]
})

module.exports=logger;