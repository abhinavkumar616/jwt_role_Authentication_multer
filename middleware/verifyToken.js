const jwt = require("jsonwebtoken")
const registerModel=require("../model/registerModel")
const authenticateToken = async (req, res, next) => {

    const token = req.headers["authorization"]
    if (!token) {
        return res.status(404).send({
            message: "token not found"
        })
    }

    jwt.verify(token, "secret", (err, result) => {
        if (err) {
            return res.status(403).send({
                message: "you are not authorized"
            })
        }
        req.user = result
        console.log("req.user in middleware-----",req.user);
        next()
    })
}

const authorizeRole=(role)=>{
    return async(req,res,next)=>{
        try{
            console.log("authorizeRole token",req.user.user._id);
            const roleData=await registerModel.findOne({_id:req.user.user._id})
            console.log("roleData",roleData);
            if(!roleData){
                return res.status(403).send({
                    message:"You are not authorized to access this resource."
                })
            }
            else if(roleData.role!==role){
                return res.status(403).send({
                    message:`You are not authorized to access this resource you are not ${role}`
                }) 
            }
            next();
        }
        catch(error){
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = {
    authenticateToken,
    authorizeRole
}