const express = require('express');
const FoodCartController = require("../controller/FoodCartController");
const router = express.Router();

router.post("/CreateFoodCart", FoodCartController.CreateFoodCart)
router.get("/ReadFoodCart", FoodCartController.ReadFoodCart)
router.post("/UpdateFoodCart/:id", FoodCartController.UpdateFoodCart)
router.get("/DeleteFoodCart/:id", FoodCartController.DeleteFoodCart)
module.exports = router;