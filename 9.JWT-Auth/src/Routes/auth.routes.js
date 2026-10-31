const express = require("express");
const userModel = require('../models/user.models')
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('/register', async (req,res)=>{
    const{email,password,userName} = req.body;
    const isUserExist = await userModel.findOne({email});

    if(isUserExist){
        return res.status(400).json({
            message:`user ${userName} already exists.`
        })
    }
    const user = await userModel.create({
        email,password,userName
    })
    
    const token = jwt.sign(
        {
            id:user._id,
            email: user.email
        },
        process.env.JWT_SECRET
    )
    
    res.cookie('user-token',token)

    res.status(201).json({
        message:"USer Created Succesfully",
        user,
        token
    })

})

module.exports = authRouter;