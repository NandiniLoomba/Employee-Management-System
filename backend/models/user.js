const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const User=new Schema({
    "First Name":{
        type:String,
        required:true
    },
    "Last Name":{
        type:String,
        required:true
    },
    "Gender":{
        type:String,
        required:true
    },
    "Email":{
        type:String,
        required:true
    },
    "DOB":{
        type:String,
        required:true
    },
    "Phone Number":{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("User",User);