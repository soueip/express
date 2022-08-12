const express = require("express");
const users=require("../userList")
const userRouter=express.Router();
//getuser
userRouter.get("/",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if(hours>8 && hours<18){
        res.render("opened");
    }else
    {
        res.render("closed");
    }
});

//postuser
userRouter.post("/login",(req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    res.send({msg:`your email is ${email} and passowrd is ${password}`})
})