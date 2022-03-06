const express = require("express")
const {createAccount,getOneAccount,getAccounts,deleteAccount}= require ("../controllers/accounts")
const router = express.Router() ;


router.post ('/',createAccount);
router.get ('/',getAccounts);
router.get ('/:id',getOneAccount);
router.delete ('/:id',deleteAccount);



module.exports = router; 





