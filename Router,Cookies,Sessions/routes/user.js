const express=require("express");
const router=express.Router();

//Users routes

//Display users
router.get("/",(req,res)=>{
    res.send("Index page for users");
});

//Display user
router.get("/:id",(req,res)=>{
    res.send("display particular user");
});

//Add user
router.post("/",(req,res)=>{
    res.send("Add User");
});

//Delete user
router.delete("/:id",(req,res)=>{
    res.send("Delete user");
});

module.exports=router;