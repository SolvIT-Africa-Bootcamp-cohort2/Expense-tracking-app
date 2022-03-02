const bcrypt = require("bcrypt");
const {User} = require("../models/User").default;
const chalk = require("chalk")
const jwt  = require("jsonwebtoken")

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
        const id = req.params.id;
        const user = await User.findOne({_id:id});
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send("User Not Found")
    }
}

const register = async (req,res, next )=>{
    try {
        const {email, password, gender,username,phone} = req.body;  
        const userExists = await User.findOne({email:email});
        if(userExists){
            res.status(400).send({"Message":"Email already exists"})
        } 
        else{
            const hashedPassword = await bcrypt.hash(password,10)
            const newUser = new User({
                email ,
                username,
                password:hashedPassword,
                phone,
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
		res.status(404).send({error: "We couldn't find this user " })
        console.log(err);
	}
}

const login = async(req,res,next)=>{
        const user = await User.findOne({email: req.body.email})

        if (user == null) {
            return res.status(400).send({Message:"Cannot Find User"})
        }
        try {
           if(await bcrypt.compare(req.body.password, user.password)){
          
          const payload = {id:user._id,email:user.email,gender:user.gender};
             jwt.sign(payload,process.env.SECRET,(err,token)=>{
                 res.status(200).send({"token": token})
             })
           }else{
              res.status(400).send({Message:"Password Incorrect"});
           }
        } catch (err) {
            console.log(err)
            res.status(405).send({Message: "Problem with the server"});
        }
}

module.exports = {
    login,
    register,
    getUsers,
    getOneUser,
    updateUser
}

