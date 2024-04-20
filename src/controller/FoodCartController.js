const FoodCartModel = require('./models/FoodCartModel');

//create
exports.CreateFoodCart = (req, res) => {
    let reqBody = req.body;
    FoodCartModel.create(reqBody,(err,data)=>{
        if(err){
            return res.status(400).json({status:"fail",data:err});
        }
        else {
            return res.status(400).json({status:"Success",data:data});
        }
    })
}

//Read
exports.ReadFoodCart = (req, res) => {
    let Query = {}
    let Projection = "foodName foodCode foodImg foodCategory foodQuantity foodPrice"
    FoodCartModel.find(Query, Projection,(err,data)=>{
        if(err){
            return res.status(400).json({status:"fail",data:err});
        }
        else {
            return res.status(400).json({status:"Success",data:data});
        }
    })
}

//Update
exports.UpdateFoodCart = (req, res) => {
    let id = req.params.id
    let Query = {_id: id};
    let reqBody = req.body;
    FoodCartModel.updateOne(Query,reqBody,(err,data)=>{
        if(err){
            return res.status(400).json({status:"fail",data:err});
        }else{
            return res.status(400).json({status:"Success",data:data});
        }
    })
}

//Delete
exports.DeleteFoodCart = (req, res) => {
    let id = req.params.id
    let Query = {_id: id};
    FoodCartModel.remove(Query,(err,data)=>{
        if(err){
            return res.status(400).json({status:"fail",data:err});
        }else{
            return res.status(400).json({status:"Success",data:data});
        }
    })
}