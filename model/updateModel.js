const mongoose=require("mongoose")

const updateModelSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    salary:{
        type:Number
    },
    mobile:{
        type:String
    }
})
const updatenewModel=mongoose.model("dummys",updateModelSchema)
module.exports=updatenewModel