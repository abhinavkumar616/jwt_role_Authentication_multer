const addItemList=require("../model/addItemList") 
const addItemListController=async(req,res)=>{

    try{
        let usertoken=req.user
        console.log(usertoken);

        const {productName,category,value}=req.body
        console.log("req.body",req.body);

        if(!productName || !category || !value){
            return res.status(400).send({
                message:"please provide the productName, category, value"
            })
        }

        if(await addItemList.findOne({productName:productName})){
            return res.status(400).send({
                message:"Duplicate ProductName is not allowed"            
            })
        }

        // if(usertoken.user.role!=="Admin"){
        //     return res.status(401).send({
        //         message:"you are not unauthorized to add a List Items"
        //     })
        // }
        
        const data=await addItemList.create({
            productName,category,value, rid:usertoken.user._id
        })

        const updateData=await addItemList.findOne({_id:data._id}).populate("rid","role username email")

        const responseData = {
            _id: updateData._id,
            rid: updateData.rid,
            productDetails: {
              productName: updateData.productName,
              category: updateData.category,
              value: updateData.value
            }
          };

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

module.exports=addItemListController