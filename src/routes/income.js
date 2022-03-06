import { Router } from "express";
const router = Router();

import { verifyToken } from "../middlewares/verifyToken";
import { validateInput } from "../middlewares/validateInput";
import { validateTransaction } from "../models/Transaction";
import { getIncome, getOneIncome, addIncome, deleteIncome, updateIncome } from "../controllers/income.js";

router.all("/*",verifyToken)
router.get("/:id",getOneIncome)

router.route("/")
      .get(getIncome)
      .post(validateInput(validateTransaction),addIncome)

router.put("/:id",updateIncome)     
router.delete("/:id",deleteIncome)

export default router;