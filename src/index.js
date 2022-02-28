require('dotenv').config()

const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose")
const cors = require("cors")

const userRouter = require("./routes/user")
const expenseRouter = require("./routes/expense")

const {connectDB} = require("./config/db")

const log = console.log;
const PORT = process.env.PORT || 3000;

const app = express();
        connectDB()
        .then(()=>{
          // app.use(cors({
          //   origin: '*'
          // }))
          
          app.use(express.json())
          app.use(function(res,req,next){
             req.header("Access-control-allow-Origin","*");
             req.header("Access-control-Allow-Headers","Origin, x-Requested-with, Content-Type, Accept,Authorization");
             if(req.method === 'OPTIONS'){
               req.header("Access-control-Allow-Methods", 'PUT', 'POST', 'GET', 'DELETE');
             }
             next();
          })
          
          app.set("port",PORT)

          app.use("/user",userRouter)
          app.use("/expense",expenseRouter)

          app.listen(PORT, () =>{
            log(chalk.green('Server started on port', chalk.underline(`${PORT}`) + '!'));
          })
        })
        .catch(err => log(chalk.red('Problem starting server'+err)))

    // use as a function        
    module.exports = app;