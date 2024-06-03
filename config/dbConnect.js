const mongoose=require("mongoose")

async function getData(){
    try{
        await mongoose.connect("mongodb://localhost:27017/mayinterview")
        console.log("Database is connected");
    }
    catch(error){
        console.log("error",error);
    }
}
getData()