const express=require("express");
const router=express.Router();


//Posts route
//Display posts
router.get("/",(req,res)=>{
    res.send("Index page for posts");
});

//Display post
router.get("/:id",(req,res)=>{
    res.send("display particular post");
});

//Add post
router.post("/",(req,res)=>{
    res.send("Add post");
});

//Delete post
router.delete("/:id",(req,res)=>{
    res.send("Delete post");
});

module.exports=router;