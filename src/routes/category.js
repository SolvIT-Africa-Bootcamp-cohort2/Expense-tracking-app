const express = require("express")
const router = express.Router();

const {validateInput} = require("../middlewares/validateInput")
const {verifyToken} = require("../middlewares/verifyToken")
const {getCategories,getOneCategory,addCategory,updateCategory,deleteCategory} = require("../controllers/category")
const {validateCategory} = require("../models/Category").default

router.all("/*",verifyToken)

router.route("/")
      .get(getCategories)
      .post(validateInput(validateCategory), addCategory)

router.get("/:id",getOneCategory)

router.delete("/:id",deleteCategory)
router.put("/:id",updateCategory)

module.exports = router;
