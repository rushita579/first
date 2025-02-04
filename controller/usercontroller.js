const { response } = require("express");
var user = require("../model/usermodel");
module.exports.insert = async(req,res) =>{
    user.create(req.body);
    res.status(200).json({
         status : "success"
        });
    }
    module.exports.get_data = async(req,res) =>{
        var data = await user.find();
        res.status(200).json({
             status:"success",
             data
        });

}