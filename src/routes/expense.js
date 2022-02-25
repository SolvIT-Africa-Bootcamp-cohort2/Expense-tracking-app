const express = require("express")
const router = express.Router();

const {verifyToken} = require("../middlewares/verifyToken")
const {getExpenses , getOneExpense, addExpense} = require("../controllers/expense.js");

router.all("/*",verifyToken)
router.get("/:id",getOneExpense)

router.route("/")
      .get(getExpenses)
      .post(addExpense)

module.exports = router;