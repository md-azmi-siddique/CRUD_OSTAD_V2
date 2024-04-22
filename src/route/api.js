const express = require('express');
const FoodCartController = require("../controller/FoodCartController");
const router = express.Router();

router.post("/create", FoodCartController.Create)
router.get("/read", FoodCartController.Read)
router.post("/update/:id", FoodCartController.Update)
router.get("/delete/:id", FoodCartController.Delete)
module.exports = router;