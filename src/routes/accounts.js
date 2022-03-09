const express = require("express")
const {verifyToken} = require("../middlewares/verifyToken")
const {validateInput} = require("../middlewares/validateInput")
const {createAccount,getOneAccount,getAccounts,deleteAccount,updateAccount}= require ("../controllers/accounts")
const {validateAccount} = require ("../models/Accounts").default 
const router = express.Router() ;

router.all ('/*', verifyToken )
router.post ('/',validateInput(validateAccount),createAccount);
router.get ('/',getAccounts);
router.get ('/:id',getOneAccount);
router.delete ('/:id',deleteAccount);
router.patch ('/:id',updateAccount);



module.exports = router; 





