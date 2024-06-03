const mongoose=require("mongoose")

const userModelSchema= new mongoose.Schema({

    userId:{
        type:Number
    },
    id:{
        type:Number
    },
    title:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

const userModel=mongoose.model("mayInterview",userModelSchema)
module.exports=userModel