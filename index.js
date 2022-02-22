import express from 'express';
const router = express.Router()

import chalk from 'chalk';

const app = express()


app.listen(5000,()=>{
    console.log(chalk.green("Server starting"))
})