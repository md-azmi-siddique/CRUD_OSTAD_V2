const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    foodName: {type: String, required: true},
    foodCode: {type: String, required: true},
    foodImg: {type: String, required: true},
    foodCategory: {type: String, required: true},
    foodQuantity: {type: Number, required: true},
    foodPrice: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now()},
},
    {versionKey: false}
    )

const FoodCartModel = mongoose.model('FoodCart', DataSchema);
module.exports = FoodCartModel;