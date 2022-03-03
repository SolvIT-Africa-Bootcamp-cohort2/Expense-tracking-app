require('dotenv').config()

import express, { json } from "express";
import { green, underline, red } from "chalk";
import cors from "cors";
import homeRouter from "./routes/home";
import userRouter from "./routes/user";
import expenseRouter from "./routes/expense";
import categoryRouter from "./routes/category";

import { connectDB } from "./config/db";

const log = console.log;
const PORT = process.env.PORT || 3000;

const app = express();
        connectDB()
        .then(()=>{
          
          // app.use(cors({
          //   origin: '*'
          // }))
          
          app.use(json())
          app.use(function(res,req,next){
             req.header("Access-control-allow-Origin","*");
             req.header("Access-control-Allow-Headers","Origin, x-Requested-with, Content-Type, Accept,Authorization");
             if(req.method === 'OPTIONS'){
               req.header("Access-control-Allow-Methods", 'PUT', 'POST', 'GET', 'DELETE');
             }
             next();
          })
          
          app.set("port",PORT)
          app.use("/",homeRouter)
          app.use("/user",userRouter)
          app.use("/expense",expenseRouter)
          app.use("/category",categoryRouter)

          app.listen(PORT, () =>{
            log(green('Server started on port', underline(`${PORT}`) + '!'));
          })
        })
        .catch(err => log(red('Problem starting server'+ err)))

    // use as a function        
    export default app;