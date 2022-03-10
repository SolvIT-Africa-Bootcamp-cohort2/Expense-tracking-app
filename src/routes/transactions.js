import {Router}  from 'express' ;
const router = Router() ;
import { getTransactions } from "../controllers/transactions";

import {verifyToken} from "../middlewares/verifyToken"

router.get ("/",verifyToken , getTransactions) 

export default router;

