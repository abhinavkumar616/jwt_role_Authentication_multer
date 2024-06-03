const updateModel=require("../model/updateModel")

const updateData=async(req,res)=>{

    try{

        const{name}=req.params
        console.log(req.params);
        const{age,salary,mobile}=req.body
        let updatenewData=req.body
        console.log("updatenewData----",updatenewData);
        console.log(req.body);

        // let data1={
        //     mobile
        // }

        if(!await updateModel.findOne({name:name})){
            return res.status(404).send({
                message:"name not found in DB"
            })
        }

        let update=await updateModel.updateOne({name:name},{$set:updatenewData})
        // let update=await updateModel.updateOne({name:name},{$set:{mobile:mobile}})
        console.log("update---",update);
        return res.status(200).send({
            data:update
        })

        // return
        
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }

}
module.exports=updateData