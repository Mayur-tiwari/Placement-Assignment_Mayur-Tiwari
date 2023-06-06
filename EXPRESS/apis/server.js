import express from "express";
import mongoose from "mongoose";
import UserRouter from "./routes/user.js";

const server = express();


mongoose.connect("mongodb://127.0.0.1:27017", {
    dbName:"backendapi",
}).then(() => console.log("database connected"))
.catch((e) => console.log(e))


server.listen(5000,()=>{
    console.log('server is working')
})


server.use(express.json())
server.use(UserRouter)
server.use(express.urlencoded({extended:true}))












