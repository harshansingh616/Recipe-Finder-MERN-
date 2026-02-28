const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./models/users");


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
            throw new Error("All Field Required")
        }
    
        const exsistingUser = User.findOne({email});
    
        if(exsistingUser)
        {
            throw new Error("User Already Exsist")
    
        }

        const user = await User.create({
            user,
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
            res.status(400);
            throw new Error('User creation Failed')
        }

        


    }catch(error)
    {
        res.status(res.statusCode || 500).json({ message: error.message });
    }

}