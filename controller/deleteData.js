const updateModel=require("../model/updateModel")

const deleteData=async(req,res)=>{

    try{
        const {name}=req.params
        if(!await updateModel.findOne({name:name})){
            return res.status(404).send({
                message:"name not found in DB"
            })
        }

        let deleteData=await updateModel.deleteOne({name:name})
        return res.status(200).send({
            message:"Data Deleted Successfully",
            data:deleteData
        })
    }
    catch(error){
        return res.status(500).send({
            error:error.message
        })
    }
}

module.exports=deleteData