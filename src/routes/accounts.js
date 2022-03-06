const express = require("express")
const {createAccount,getOneAccount,getAccounts,deleteAccount,updateAccount}= require ("../controllers/accounts")
const router = express.Router() ;


router.post ('/',createAccount);
router.get ('/',getAccounts);
router.get ('/:id',getOneAccount);
router.delete ('/:id',deleteAccount);
router.patch ('/:id',updateAccount);



module.exports = router; 





