import { Router } from "express";
const router = Router();

import { verifyToken } from "../middlewares/verifyToken";
import { validateInput } from "../middlewares/validateInput";
const { validateTransaction } =require("../models/Transaction").default;
import { getIncome, getOneIncome, addIncome, deleteIncome, updateIncome } from "../controllers/income.js";

router.all("/*",verifyToken)
router.get("/:id",verifyToken,getOneIncome)

router.route("/")
      .get(verifyToken,getIncome)
      .post(verifyToken,validateInput(validateTransaction),addIncome)

router.put("/:id",verifyToken,updateIncome)     
router.delete("/:id",verifyToken,deleteIncome)

export default router;