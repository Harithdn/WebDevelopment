const express=require("express");
const app=express();
const port =3000;
//using middlewares for express to read data sent in url encoded form or in json format sent throgh the body of POST req
//If we dont define middlewares the req body contains undefined as the default value
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log("app is listening to port");
})
app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`Standard GET Request, Welcome ${user}`);
})
app.post("/register",(req,res)=>{
    let {user,password}=req.body;
    console.log(req.body);
    res.send(`Standard POST Request, Welcome to ${user}`);
})