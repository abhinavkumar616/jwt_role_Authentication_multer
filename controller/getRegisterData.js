const registerModel=require("../model/registerModel")

const getRegisterData=async(req,res)=>{

    try{
        let data=req.user
        console.log("data-----",data.user.username);

        let findUsername=await registerModel.findOne({username:data.user.username})
        console.log("findUsername---",findUsername);
        
        if(!findUsername){
            return res.status(404).send({
                message:"Username not Found in DB"
            })
        }

        let findData=await registerModel.find()

        return res.status(200).send({
            data:findData
        })
    }
    catch(error){
        res.status(500).send({
            error: error.message
        })
    }
}

module.exports=getRegisterData