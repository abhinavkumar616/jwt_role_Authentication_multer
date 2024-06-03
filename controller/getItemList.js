const addItemList=require("../model/addItemList") 
const getItemList=async(req,res)=>{

    try{

        let responseData=await addItemList.find()

        return res.status(201).send({
            message:"Create Data Successfully",
            data:responseData
        })

    }
    catch(error){
        return res.status(500).send({
            error:error.message
        })
    }
}

module.exports=getItemList