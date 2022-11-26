
const express = require('express');
const bcrypt = require('bcrypt')

const router = express.Router();
const{User} = require('../models/user');

const newUser = async (req, res)=>{
    let user =await  User.findOne({email:req.body.email});
    if(user) return res.status(400).send('User already registered')

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    try{
        const result =await user.save();
        res.send({
            name: result.name,
            email: result.email
        });

    }catch(err){
        const errMsgs = [];
        for(field in err.errors){
            errMsgs.push(err.errors[field].message)
        }
        return res.status(404).send(errMsgs);


    }

}



router.route('/')
.post(newUser);


module.exports = router;