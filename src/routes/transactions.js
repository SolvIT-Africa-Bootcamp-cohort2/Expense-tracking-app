import {Router}  from 'express' ;
const router = Router () ;
const  {getTransactions} =require ("../controllers/transactions")

import {verifyToken} from "../middlewares/verifyToken"


router.get ("/",verifyToken , getTransactions) 


module.exports = router 


