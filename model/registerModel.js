const mongoose=require("mongoose")

const registerModelSchema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        default:"User"
    }
})
const registerModel=mongoose.model("register",registerModelSchema)
module.exports=registerModel