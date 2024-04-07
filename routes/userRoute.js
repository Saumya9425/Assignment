const express = require('express')
const User = require('../models/user')
const brcypt = require('bcryptjs')

const router = express.Router()


router.post('/users/create', async(req , res)=>{
    try{
        const {name , email , password , profilephoto } = req.body;
        if(!name || !email || !password)
        {
            return res.status(400).json({error: 'Name and email are required'})
        }
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
        if(!passwordRegex.test(password))
        {
            return res.status(400).json({error : 'Password must contain atleast 8 characters , a number , a digit and a special character'})
        }
        const hashedPassword = await brcypt.hash(password , 10);
        const newUser = await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).send({user});
    }catch(err)
    {
        res.status(500).send(err);
    }
})





module.exports = router