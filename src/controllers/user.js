const bcrypt = require("bcrypt");
const chalk = require("chalk")
const jwt  = require("jsonwebtoken")
const crypto = require("crypto")

import {  red} from "chalk";

const {User,Token} = require("../models/User").default;
const sendMail = require("../utils//sendMail").default

const log = console.log

const getUsers =async (req,res, next) =>{
    try {
        const users= await User.find({});
        res.status(200).send({users:users})
    } catch (error) {
        //log(chalk.red(error));
        res.status(404).send({Message:"No Users were found"})
    }
}

const getOneUser = async (req,res, next) =>{
    try {
        const id = req.params.id;
        const user = await User.findOne({_id:id});
        res.status(200).send({user:user})
    } catch (error) {
        res.status(404).send({Message:"User Not Found"})
    }
}

const register = async (req,res, next )=>{
    try {
        const {email, password, gender,username,phone} = req.body;  
        const userExists = await User.findOne({email:email});
        if(userExists){
            res.status(400).send({Message:"Email already taken"})
        } 
        else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User({
                email ,username,password:hashedPassword,phone,gender
            })

            await newUser.save();
            
            let token = await new Token({
                userId: newUser._id,
                token: crypto.randomBytes(32).toString("hex"),
              }).save();
          
              const message = `${process.env.BASE_URL}/user/verify/${newUser._id}/${token.token}"`;
              if(await sendMail(newUser.email,username, "Complete Xpense Trackr Signup", message)){
                res.status(201).send({Message:"Check your email to verify your account!"})
              }else{
                  res.status(500).send({Message:"Problem sending email"})
              }     
       }
    } catch (error) {
        //log(red(error))
        res.status(500).send({Message:"Problem with the server"})
    }
}

const verifyUser = async(req,res)=>{
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({Message:"<h2>Invalid link</h2>"});
    
        const token = await Token.findOne({
          userId: user._id,
          token: req.params.token,
        });
        if (!token) return res.status(400).send({Message:"<h2>Invalid token</h2>"});
    
        await User.findOneAndUpdate({ _id: user._id},{isVerified: true });
        await Token.findByIdAndRemove(token._id);
    
        res.send({Message:"email verified sucessfully"});
      } catch (error) {
         // log(red(error))
        res.status(400).send({Message:"An error occured verifying your email"});
      }
}

const updateUser = async(req,res,next) =>{
	try {
        let user = await User.findOne({_id: req.params.id})
        let {username, password} = req.body;
        if (user) {
            if (username) {
                user.username = username
            }
            if(password){
               let hashedPassword = await bcrypt.hash(password,10);
               user.password = hashedPassword;
            }
            await user.save()
            res.status(200).send({Message:"User information updated successfully"})
        }else{
            res.status(404).send({Message:"User Not Found"})  
        }
	} catch(err) {
		res.status(404).send({Message: "We couldn't find this user " })
      //  log(err);
	}
}

const login = async(req,res,next)=>{
        const user = await User.findOne({email: req.body.email})

        if (user == null) {
            return res.status(400).send({Message:"Cannot Find User"})
        }
        try {
            if(!user.isVerified){
                return res.status(400).send("You need to verify your account before signing in")
            }
           if(await bcrypt.compare(req.body.password, user.password)){
          
          const payload = {id:user._id,email:user.email,gender:user.gender};
             jwt.sign(payload,process.env.SECRET,{expiresIn: '12h'},(err,token)=>{
                 res.status(200).send({"token": token})
             })
           }else{
              res.status(400).send({Message:"Invalid credentials"});
           }
        } catch (err) {
            log(err)
            res.status(405).send({Message: "Problem with the server"});
        }
}

module.exports = {
    login,
    register,
    getUsers,
    getOneUser,
    updateUser,
    verifyUser
}

