import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const server = express();
server.listen(2000,()=>{
    console.log('server is working');
})


mongoose.connect('mongodb://127.0.0.1:27017',{
    dbname:'backend'
}).then(()=>console.log('db connected')).catch((e)=>console.log(e));


const UserSchema = new mongoose.Schema({
    name :String,
    email :String,
    password:String,
})


const User = mongoose.model('User',UserSchema)


server.use(express.urlencoded({extended:true}))
server.use(cookieParser());

const isAuthenticated = async(req,res,next)=>{
    const {token} = req.cookies;
if(token){
       
   const decoded = jwt.verify(token,'jtjtjtjtjt')
   
   req.user = await User.findById(decoded._id)
    next()
   
}
else{
 res.redirect('/login')

}

}



server.get('/',isAuthenticated,async(req,res)=>{
    res.render('logout.ejs',{name:req.user.name})


})


server.get('/register',(req,res)=>{

    res.render('register.ejs')
 
})

server.get('/login',(req,res)=>{
    res.render('login.ejs')
})


server.post('/login',async(req,res)=>{
    const{name,email,password} = req.body;
     let user = await User.findOne({email}).select("+password");
     if(!user){
       return res.redirect('/register')

     }
     
     const ismatch =  await bcrypt.compare(password,user.password);
     if (!ismatch){
        return res.render('login.ejs',{email:email,message:'incorrect password'})
     }
     const token = jwt.sign({_id:user._id},'jtjtjtjtjt');

     res.cookie('token',token,{
         expires:new Date(Date.now() + 60*10000 ),
         httpOnly:true
     })
 
     res.redirect('/')
    


})

server.post('/register',async(req,res)=>{
    const{name,email,password} = req.body;

      let user = await User.findOne({email});
    if(user){
        return res.redirect('/login')

    }
const hashedpassword = await bcrypt.hash(password,10)
    user = await User.create({name:name,email:email,password:hashedpassword})

    const token = jwt.sign({_id:user._id},'jtjtjtjtjt');

    res.cookie('token',token,{
        expires:new Date(Date.now() + 60*10000 ),
        httpOnly:true
    })

    res.redirect('/')
   
   
   },)

   
   server.get('/logout',(req,res)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.redirect('/')

   
   
   },)



 