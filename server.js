const express=require("express")

require("./config/dbConnect")
const router=require("./route/userRoute")

const app=express()
app.use(express.json())
app.use("/",router)


app.listen(3000,()=>{
    console.log("server is running");
})