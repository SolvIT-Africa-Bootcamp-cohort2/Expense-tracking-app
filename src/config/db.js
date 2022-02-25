const mongoose = require("mongoose");
const chalk = require("chalk");
const log = console.log;

exports.connectDB = async () => {
    await mongoose.connect(process.env.DB_Host, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>  log(chalk.blue("DB connected successfully")))
    .catch(err=>  log(chalk.red(`Unable to connect to the Mongo db  ${err} `)));
};