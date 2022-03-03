const express = require("express")
const router = express.Router();

router.get("/",(err,res)=>{
    if (err) 
       return res.status(404).send("Not Found")
    res.status(200).send("<h1> Expense Tracker App<h1>")

})

module.exports = router;
