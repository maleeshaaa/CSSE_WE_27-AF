const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isCustomer:{
        type: Boolean
    },
    isSeller:{
        type: Boolean
    },
    isAdmin:{
        type: Boolean
    }
});  

const User = mongoose.model("User", userSchema);
module.exports = User;