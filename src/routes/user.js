const express = require("express")
const {register,getUsers,getOneUser} = require("../controllers/user.js")
const router = express.Router();

router.get("/",getUsers)

router.get("/:id",getOneUser)

router.route("/register")
      .get((req,res)=>{
           res.send("This should be register page")
       })
      .post(register)

module.exports = router;