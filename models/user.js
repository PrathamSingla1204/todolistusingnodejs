const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    task:{
        type:String,
        required:true
    },
    due_date:{
        type:Date,
        required:true
    },
    category:{
        type:String
    }
},{
    timestamps:true
});

const User = mongoose.model('User,userSchema');

module.exports = User;