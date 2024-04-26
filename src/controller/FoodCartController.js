const FoodCartModel = require("../model/FoodCartModel");

//create
exports.Create=async(req,res)=>{
    try{
        let reqBody=req.body;
        await FoodCartModel.create(reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

//Read
exports.Read=async(req,res)=>{
    try{
        let rows=await FoodCartModel.find();
        return res.status(200).json({status:"success",message:"Request Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

exports.ReadId=async(req,res)=>{
    try{
        let {id} = req.params;
        let rows=await FoodCartModel.find({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed",row:rows});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

//Update
exports.Update=async(req,res)=>{
    try{

        // By ID OLD -> NEW-> Compare --> Change Column Name-CurrentValue/NewValue/Date--> Insert

        let {id}=req.params
        let reqBody=req.body;
        await FoodCartModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}

//Delete
exports.Delete=async(req,res)=>{
    try{
        let {id}=req.params
        await FoodCartModel.deleteOne({_id:id});
        return res.status(200).json({status:"success",message:"Request Completed"});
    }catch (e) {
        return res.status(200).json({err:e.toString()})
    }
}
