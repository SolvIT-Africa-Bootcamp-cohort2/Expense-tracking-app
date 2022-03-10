const express = require("express")
const {verifyToken} = require("../middlewares/verifyToken")
const {validateInput} = require("../middlewares/validateInput")
const {createAccount,getOneAccount,getAccounts,deleteAccount,updateAccount}= require ("../controllers/accounts")
const {validateAccount} = require ("../models/Accounts").default 
const router = express.Router() ;

// router.all ('/*', verifyToken )
router.post ('/',verifyToken,validateInput(validateAccount),createAccount);
router.get ('/',verifyToken,getAccounts);
router.get ('/:id',verifyToken,getOneAccount);
router.delete ('/:id',verifyToken,deleteAccount);
router.patch ('/:id',verifyToken,updateAccount);



module.exports = router; 





