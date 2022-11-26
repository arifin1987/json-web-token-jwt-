const{Schema, model} = require('mongoose');


userSchema= Schema({
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength:100
    },
    email:{
        type: String,
        required: true,
        minlength:8,
        maxlength:255,
        unique: true
    },
    
        password:{
            type: String,
            required: true,
            minlength:5,
            maxlength:1024
        }
    

})



const User = model('User', userSchema);



module.exports.User = User;