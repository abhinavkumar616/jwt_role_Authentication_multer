const registerModel = require("../model/registerModel")
const jwt=require("jsonwebtoken")
const register = async (req, res) => {

    try {

        const { username, email, password,role } = req.body

        if(await registerModel.findOne({username:username})){
            return res.status(409).send({
                message: "username is already exists in Database, please login"
            })
        }

        if (await registerModel.findOne({ email: email })) {
            return res.status(409).send({
                message: "email is already exists in Database"
            })
        }

        let userRole=role || "User"

        const data = await registerModel.create({
            username, email, password,role:userRole
        })

        let token=jwt.sign({
            exp:Math.floor(Date.now()/1000 + (60*60)),
            user:data
        },"secret")

        return res.status(201).send({
            data:{
                username,
                email,
                password,
                role:userRole,
                token
            }
        })
    }
    catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
}
module.exports = register