require('dotenv').config()

const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user")
const log = console.log;
const PORT = process.env.PORT || 3000;

const app = express();
const connectDB = async () => {
        await mongoose.connect(process.env.DB_Host, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{

                 log(chalk.blue("DB connected successfully"))
                //middlewares
                app.use(cors({
                  origin: '*'
                }))
                
                app.use(express.json())

                app.set("port",PORT)

                app.use("/user",userRouter)

                app.listen(PORT, () =>{
                    log(chalk.green("Server started"))
                  })

        })
            .catch(function (error) {
                log(chalk.red(`Unable to connect to the Mongo db  ${error} `));
            });
    };
    
    // use as a function        
    connectDB();
    module.exports = app;