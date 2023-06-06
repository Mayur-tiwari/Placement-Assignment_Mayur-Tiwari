import { User } from "../models/user.js";



export const getallusers = async (req,res)=>{
    console.log(req.query);

    const users = await User.find({});
res.json({
    success:true,
    users:users,


})
}

export const createuser = async (req,res)=>{
    const {name,email,password} = req.body;

    await User.create({
        name:name,
        email:email,
        password:password,
    })
res.status(201).json({
    success:true,
    message:'registered succesfully'
    


})
}

export const getuserdetails = async(req,res)=>{
    const{id} = req.params;
    const user = await User.findById(id)
    console.log(req.params);
    res.json({
        success:true,
        user:user
    })


}

export const deleteuserdetails = async(req,res)=>{
    const{id} = req.params;
    const user = await User.findById(id)

    await user.deleteOne()
    console.log(req.params);
    res.json({
        success:true,
       message:'deleted'
    })


}