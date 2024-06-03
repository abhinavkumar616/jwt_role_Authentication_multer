const express=require("express")
const getData = require("../controller/getData")
const putData = require("../controller/putData")
const mobile = require("../controller/mobile")
const updateData = require("../controller/updateData")
const deleteData = require("../controller/deleteData")
const register = require("../controller/register")
const login = require("../controller/login")
const {authenticateToken,authorizeRole} = require("../middleware/verifyToken")
const getRegisterData = require("../controller/getRegisterData")
const uploadFile = require("../controller/uploadFile")
const addItemListController = require("../controller/addItemListController")
const getItemList = require("../controller/getItemList")
const axiosgetData = require("../controller/axiosgetData")

const router=express.Router()

router.get("/getData",getData)

router.post("/putData",putData)
router.post("/mobile",mobile)
router.put("/update/:name",updateData)
router.delete("/delete/:name",deleteData)

router.post("/register",register)
router.post("/login",login)
router.get("/getRegisterData",authenticateToken,getRegisterData)
router.post("/uploadFile",uploadFile)
router.post("/addItemListController",authenticateToken,authorizeRole("Admin"),addItemListController)

router.get("/getItemList",getItemList)
router.get("/axiosgetData",axiosgetData)


module.exports=router