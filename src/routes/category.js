const express = require("express");
const router = express.Router();

const { validateInput } = require("../middlewares/validateInput");
const { verifyToken } = require("../middlewares/verifyToken");
const {
  getCategories,
  getOneCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");
const { validateCategory } = require("../models/Category").default;

// router.all("/*",verifyToken)

router
  .route("/")
  .get(verifyToken, getCategories)
  .post(verifyToken, validateInput(validateCategory), addCategory);

router.get("/:id", verifyToken, getOneCategory);

// router.delete("/:id",verifyToken,deleteCategory)
router.post("/remove", verifyToken, deleteCategory);

// router.put("/:id", verifyToken, updateCategory);
router.post("/update", verifyToken, updateCategory);

module.exports = router;
