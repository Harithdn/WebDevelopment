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
    res.render("rolldice.ejs",{diceval: diceval});
})

app.get("/instagram/:username",(req,res)=>{
    let { username}=req.params;
    app.use(express.static(path.join(__dirname,"public/js")));
    app.use(express.static(path.join(__dirname,"public/css")));
    let instadata=require("./data.json");
    let data=instadata[username];
    if(data)
    res.render("instagram.ejs",{data});
    else
        res.render("error.ejs");
})

// app.get("/home",(req,res)=>{
//     res.send("You are in home");
// })