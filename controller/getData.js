const userModel = require("../model/userModel")

const axios = require("axios")

const getData = async (req, res) => {

    try {

        const data = await axios.get("https://jsonplaceholder.typicode.com/todos")
        // console.log("data----",data.data);

        let findData=data.data

        let pushData=[]

        for(let i=0;i<findData.length;i++){
            // console.log("findData[i]",findData[i]);
            let userId=findData[i].userId
            let id=findData[i].id
            let title=findData[i].title
            let completed=findData[i].completed
            // console.log("userId=----",userId,id,title,completed);
            pushData.push({userId,id,title,completed})
        }

        const insertData=await userModel.create(pushData)

        res.status(201).send({
            data: insertData
        })
    }
    catch (error) {
        res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }

}

module.exports = getData



// let data1=data.data
// let extractedData = [];
// for (let i = 0; i <data1.length; i++) {
//      let userId=data1[i].userId
//      let id=data1[i].id
//      let title=data1[i].title
//      let completed=data1[i].completed

//      extractedData.push({userId,id,title,completed})
// }
// console.log("extractedData-----",extractedData);

// let insertData=await userModel.create(extractedData)



// const userModel = require("../model/userModel")

// const axios = require("axios")

// const getData = async (req, res) => {

//     try {

//         const data = await axios.get("https://jsonplaceholder.typicode.com/todos")
//         // console.log("data----",data.data);

//         let data1=data.data
//         let extractedData = [];
//         for (let i = 0; i < data1.length; i++) {
//             // console.log("data1[i]-------", data1[i]);
//              let userId=data1[i].userId
//              let id=data1[i].id
//              let title=data1[i].title
//              let completed=data1[i].completed

//              extractedData.push({userId,id,title,completed})
//         }
//         console.log("extractedData-----",extractedData);

//         let insertData=await userModel.create(extractedData)

//         res.status(201).send({
//             data: insertData
//         })
//     }
//     catch (error) {
//         res.status(500).send({
//             message: "Internal Server Error",
//             error: error.message
//         })
//     }

// }

// module.exports = getData
