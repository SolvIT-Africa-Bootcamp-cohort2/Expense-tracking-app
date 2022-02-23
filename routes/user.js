const express = require("express")

router.get('/',(req,res)=>{
    res.send("This should the list of users")
})

module.exports = router;