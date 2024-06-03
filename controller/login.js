const registerModel=require("../model/registerModel")
const jwt=require("jsonwebtoken")

const login=async(req,res)=>{
    try{
        const{username,password}=req.body
        console.log("username------",username);

        let findusername=await registerModel.findOne({username:username})

        if(!findusername){
            return res.status(404).send({
                message:"username not found"
            })
        }

        if(findusername.password!==password){
            return res.status(404).send({
                message:"password is invalid"
            })
        }

        let token=jwt.sign({
            exp:Math.floor(Date.now()/1000 + (60*60)),
            user:findusername
        },"secret")
        console.log("token",token);
        return res.status(200).send({
            token:token
        })
    }
    catch(error){
        res.status(500).send({
            error: error.message
        })
    }
}
module.exports=login