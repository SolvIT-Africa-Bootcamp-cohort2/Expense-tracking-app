import { Router } from "express";
const router = Router();

import { validateInput } from "../middlewares/validateInput";
import { login, register, getUsers, getOneUser, updateUser } from "../controllers/user.js";
import { validateUser, validateUserLogin } from "../models/User";

router.get("/",getUsers)

router.get("/:id",getOneUser)

router.put("/:id",updateUser)

router.route("/register")
      .get((req,res)=>{
           res.send("This should be register page")
       })
      .post(validateInput(validateUser), register)

router.post("/login",validateInput(validateUserLogin), login)

 module.exports= router;
