const express=require("express");
const router=express.Router();
const User = require("../models/userModel");
//create
router.post("/",async(req,res)=>{
    const {name,email,age}=req.body
    

    try{
        const userAdd=await User.create({
            name:name,
            email:email,
            age:age,
        });
        res.status(201).json(userAdd);

    }
    catch(error){
        // console.log(error)
        res.status(400).json({error:error.message})

    }
})

//Get
router.get("/",async (req,res)=>{
    try{
        const showall=await User.find();
        res.status(201).json(showall); 
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})

    }
})
router.get("/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        const singleUser=await User.findById({_id: id});
        res.status(201).json(singleUser); 
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})

    }
})
router.delete("/:id",async (req,res)=>{
    const {id}=req.params;
    try{
        const singleUser=await User.findByIdAndDelete({_id: id});
        res.status(201).json(singleUser); 
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})

    }
})
router.patch("/:id",async (req,res)=>{
    const {id}=req.params;
    const {name,email,age}=req.body

    try{
        const updateuser=await User.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.status(201).json(updateuser); 
    }
    catch(error){
        console.log(error)
        res.status(400).json({error:error.message})

    }
})
module.exports=router;