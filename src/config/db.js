import { connect } from "mongoose";
import { blue, red,magenta } from "chalk";
const log = console.log;

export async function connectDB() {
    //log(magenta("secret is"+process.env.PASS))
    await connect("mongodb+srv://MugaboKevin:Rukundo2@cluster0.ybelk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>  log(blue("DB connected successfully")))
    .catch(err=>  log(red(`Unable to connect to the Mongo db  ${err} `)));
}