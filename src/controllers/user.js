const bcrypt = require("bcrypt");
const User = require("../models/User");
const chalk = require("chalk")

const getUsers =async (req,res, next) =>{
    try {
        const users= await User.find({});
        res.status(200).send(users)
    } catch (error) {
        console.log(chalk.red(error));
        res.status(404).send("No Users were found")
    }
}

const getOneUser = async (req,res, next) =>{
    try {
        const {id} = req.params.id;
        console.log(id)
        const user = await User.findOne({_id:id});
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send("User Not Found")
    }
}

const login = (req,res,next)=>{
    res.send("This should allow user to login")
}

const register = async (req,res, next )=>{
    try {
        const {email, password, gender} = req.body;  
        const userExists = await User.findOne({email:email});
        if(userExists){
            res.status(400).send({"Message":"Email already taken"})
        } 
        else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User({
                email ,
                password:hashedPassword,
                gender 
            })

            await newUser.save()
            res.status(201).send({Message:"user Registered Successfully"})
       }
    } catch (error) {
        console.log(chalk.red(error)) 
        res.status(500).send({Message:"Problem with the server"})
    }
}

module.exports = {
    login,
    register,
    getUsers,
    getOneUser
}

