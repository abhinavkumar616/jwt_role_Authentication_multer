const mongoose=require("mongoose")

const axiosModelSchema=new mongoose.Schema({
    id:{
        type:String
    },
    rid:{
        type:String
    },
    productName:{
        type:String
    },
    category:{
        type:String
    },
    value:{
        type:String
    }
})

const axiosModel=mongoose.model("axios",axiosModelSchema)
module.exports=axiosModel