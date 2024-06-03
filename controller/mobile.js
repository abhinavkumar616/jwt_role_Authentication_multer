const updateModel=require("../model/updateModel")

const mobile=async(req,res)=>{

    try{
        const{name,age,salary,mobile}=req.body

        console.log(mobile.length);

        if(mobile.length!==10){
            return res.status(400).send({
                message:"Mobile no is not valid"
            })
        }

        if(await updateModel.findOne({mobile:mobile})){
            return res.status(409).send({
                message:"Mobile no is present in DB"
            })
        }   
            const data=await updateModel.create({
                name,age,salary,mobile
            })
            return res.status(201).send({
                data:data
            })
        // return
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }

}

module.exports=mobile