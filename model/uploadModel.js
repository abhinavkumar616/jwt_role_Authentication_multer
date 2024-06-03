const mongoose=require("mongoose")

const uploadModelSchema= new mongoose.Schema({

    pdfurl:{
        type:String
    }
})

const uploadModel=mongoose.model("pdf",uploadModelSchema)
module.exports=uploadModel