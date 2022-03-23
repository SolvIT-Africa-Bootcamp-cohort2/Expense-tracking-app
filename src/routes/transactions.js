import { Router } from "express";
const router = Router();
import {
  getTransactions,
  getTransactionByAccount,
} from "../controllers/transactions";

import { verifyToken } from "../middlewares/verifyToken";

router.get("/", verifyToken, getTransactions);
router.get("/:account", verifyToken, getTransactionByAccount);
export default router;
