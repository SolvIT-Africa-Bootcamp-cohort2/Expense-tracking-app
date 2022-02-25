const express = require("express")
const {login,register,getUsers,getOneUser,updateUser} = require("../controllers/user.js")
const router = express.Router();

router.get("/",getUsers)

router.get("/:id",getOneUser)

router.put("/:id",updateUser)

router.route("/register")
      .get((req,res)=>{
           res.send("This should be register page")
       })
      .post(register)

router.post("/login",login)

module.exports = router;