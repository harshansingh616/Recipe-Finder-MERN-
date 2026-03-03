const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcryptjs");


const genrateToken = (id) =>
{
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn: '1h'})
}

const registerUser = async (req,res) =>
{
    try{

        const {name, email, password} = req.body;

        if(!name || !email || ! password)
        {
            return res.status(403).json({message:"all fields required"})
        }
        console.log(email);
        const existingUser = await User.findOne({email});

        // console.log(existingUser.email);
        if(existingUser)
        {
            return res.status(409).json({message:"User Already Exist"});
             
        }

        const user = await User.create({
            name,
            email,
            password
        });

        if(user)
        {
            return res.status(201).json({
                _id: user.id,
                name:user.name,
                email:user.email,
                token: genrateToken(user._id)

            })
        }else{
             return res.status(500).json({message:error.message});
        }

        


    }catch(error)
    {
        res.status(res.statusCode || 500).json({ message: error.message });
    }

}

const loginUser = async (req,res) =>
{
    try{

        const {email,password} = req.body;

        const user = await User.findOne({email}).select("+password");

        if(!user)
        {
           throw new Error("Invalid Credentials(Email)"); 
        }
        
        const isMatched = await bcrypt.compare(password,user.password);
        if(isMatched)
        {
            return res.status(200).json({
            
                token: genrateToken(user._id)})
        }else
        {
            throw new Error("Invalid Credentials(Password)"); 

        }

        

    }catch(error){
        res.status(res.statusCode || 500).json({ message: error.message });
    }
}

module.exports = {registerUser,loginUser};