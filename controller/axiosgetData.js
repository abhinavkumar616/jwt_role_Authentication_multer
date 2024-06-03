const axios=require("axios")
const axiosModel=require("../model/axiosModel")

const axiosgetData=async(req,res)=>{

    try{

        let getdata=await axios("http://localhost:3000/getItemList")
        // console.log("getdata",getdata.data);

        let findData=getdata.data.data

        let x=findData.map((item)=>({
            id:item._id,
            rid:item.rid,
            productName:item.productName,
            category:item.category,
            value:item.value
        }))

        // console.log("qwerty",x.id);

        let findId=x.map(item => item.id)
        console.log("findId",findId);


        let existingItem=await axiosModel.find({id:{$in:findId}})
        console.log("existingItem-----",existingItem);
        console.log("existingItem",typeof(existingItem))

        let existingIds=existingItem.map(item=>item.id.toString());
        console.log("existingIds",existingIds);

        let uniqueItem=x.filter(item=>!existingIds.includes(item.id))

        if(uniqueItem.length>0){
            await axiosModel.insertMany(uniqueItem)
            console.log("Inserted unique items:", uniqueItem);
            return res.status(201).send({
                message: "Data processed successfully",
                insertedItems: uniqueItem,
            })
        }
        
        return res.status(200).send({
            message: "No unique items to insert."
        })
    }
    catch(error){
        return res.status(500).send({
            error:error.message
        })
    }
}

module.exports=axiosgetData