const mongoose=require("mongoose")
const userScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    age:{
        type:Number
    }
},{timestamps:true})
const User=mongoose.model("User",userScheme)
module.exports=User;