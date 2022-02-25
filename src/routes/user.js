const express = require("express")
const router = express.Router();

const {validateInput} = require("../middlewares/validateInput")
const {login,register,getUsers,getOneUser,updateUser} = require("../controllers/user.js")
const {validateUser,validateUserLogin} = require("../models/User")

router.get("/",getUsers)

router.get("/:id",getOneUser)

router.put("/:id",updateUser)

router.route("/register")
      .get((req,res)=>{
           res.send("This should be register page")
       })
      .post(validateInput(validateUser), register)

router.post("/login",validateInput(validateUserLogin), login)

module.exports = router;
