const uploadModel=require("../model/uploadModel")
const processFile=require("../middleware/upload")
const path=require("path")
const fs=require("fs")

const uploadFile=async(req,res)=>{

    let uploadDir=path.join(__dirname,"..","uploads")

    try{
        await processFile(req,res);

        if(!req.file){
            return res.status(400).send({ message: "Please upload a file!" });
        }
        console.log("req.file----",req.file);
        let file=req.file.originalname
        console.log("file----",file);

        let filepath=path.join(uploadDir,file) 
        console.log("filepath",filepath);

        fs.writeFile(filepath,req.file.buffer,async(err)=>{
            if(err){
                return res.status(500).send({
                    message:`Error while saving the file: ${err}`
                })
            }
            const data=await uploadModel.create({
                pdfurl:file
            })
            return res.send({
                message:`File uploaded successfully!`,file:file,
                data:data
            })
        })
    }
    catch(error){
        res.status(500).send({
            error:error.message
        })
    }
}

module.exports=uploadFile