const express=require("express");
const app=express();
const path=require("path");
let port=3000;
app.listen(port,()=>{
    console.log(`app is listening on ther port ${port}`);
})
app.set("view engine","ejs");
//view engine is set to ejs from which we can fetch the views
app.set("views",path.join(__dirname,"/views"));
//if we run the server from the directory in which the views folder is present,then the template in views will be automatically fetched
//but if we run the server in some parent directory, we have to set path to views folder



app.get("/",(req,res)=>{
// res.send("This is the home page")
res.render("home.ejs");//in normal requests we could send some text or some part of code as a response
//using EJS we can send entire files as response which can be used as templates
})

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceval});
})

// app.get("/home",(req,res)=>{
//     res.send("You are in home");
// })