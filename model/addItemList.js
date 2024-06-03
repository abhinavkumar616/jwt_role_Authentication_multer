const mongoose=require("mongoose")

const addItemListSchema=new mongoose.Schema({

    rid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register",
        required:true
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

const addItemList=mongoose.model("itemList",addItemListSchema)
module.exports=addItemList