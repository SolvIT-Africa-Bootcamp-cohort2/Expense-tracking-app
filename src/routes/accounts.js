const express = require("express")
const {createAccount}= require ("../controllers/accounts")
const router = express.Router() ;


router.post ('/',createAccount);

module.exports = router; 





