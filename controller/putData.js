const updateModel=require("../model/updateModel")

const putData=async(req,res)=>{
    try{
        const{name,age,salary}=req.body
        const insertData=req.body
        console.log("insertData",insertData);
        // return
        const name1=req.body.name
        console.log("name1",name1);
        const findData=await updateModel.findOne({name:name1})
        console.log("findData",findData);
        
        if(findData){
           return res.status(200).send({
                message:"Data is already available"
            })
        }
        else{
            // const updateData= new updateModel(insertData)
            // await updateData.save()

            const updateData= await updateModel.create({
                name,age,salary
            })

            return res.status(201).send({
                data:updateData
            })
        }
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }
}
module.exports=putData