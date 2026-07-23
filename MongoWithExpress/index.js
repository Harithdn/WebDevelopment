const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path")
const Chat=require("./models/chats.js")
const methodOverride = require("method-override");
const ExpressError=require("./ExpressError.js");

app.use(methodOverride("_method"));

app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))
//Connect mongoose
main().then(res=>console.log("Connection successful"))
.catch(err=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

//Errors can handles thorugh error handling middlewares
//works very fine with both synchronous and and async function in latest Express 5, bcoz express naturally calls next(err) in latest version
//but for older versions of express, if a async error occurs,next(err) is not called naturally and hence the server crashes
//so we use async error handling mechanisms such as try catch blocks and async wrapper functions
//hence those mechanisms are not reqd now
//although we can use try catch blocks in some cases where we want handle errors specially without the normal error handling middlewares



app.get("/",(req,res)=>{
    res.send("Root is working")
})

app.get("/chats",asyncWrap(async (req,res)=>{
    try{
    let chats=await Chat.find()
    res.render("index.ejs",{chats})
    }catch(err){
        next(err);
    }
   
}));

//new chat route
app.get("/chats/new",(req,res)=>{
    // throw new ExpressError(404,"Page not found");
    res.render("new.ejs");
})

//Show route
app.get("/chats/:id",asyncWrap( async (req,res,next)=>{
   
    let {id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
        next(new ExpressError(404,"Chat not found"));
    }
    res.render("edit.ejs",{chat});
}));



app.post("/chats", asyncWrap(async(req,res)=>{
   
    let {from,to,msg}=req.body ;
    await Chat.insertOne(
        {
            from:from,
            to:to,
            msg:msg,
            created_at:new Date()

        }
    )
res.redirect("/chats")
}));

//Edit route
app.get("/chats/:id/edit",async(req,res)=>{
    try{
    let {id}=req.params;
    let chat= await Chat.findById(id)
    res.render("edit.ejs",{chat})
    }
    catch(err){
        next(err);
    }
});

//Update the msg in the database and display
app.put("/chats/:id",async (req,res)=>{
    try{
    let {id}=req.params;
    let {newmsg}=req.body;
    await Chat.findByIdAndUpdate(id,{msg:newmsg});
    res.redirect("/chats");
        
    }
    catch(err){
        next(err);
    }
   
})

//Delete route
app.delete("/chats/:id/delete",async (req,res)=>{
    try{
    let {id}=req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
        
    }
    catch(err){
        next(err);
    }
    })

    const handleValidationError=(err)=>
    {
        console.log(err.name);
        console.log("This is a Validation error, Please follow the schema rules!!!");
        console.log(err.message);
        return err;
    }
app.use((err,req,res,next)=>{
    if(err.name==="ValidationError"){
        err=handleValidationError(err);
    }
    //can define multiple cases for multiple errors and these can be handled
    next(err);
})

//Error handling middleware
app.use((err,req,res,next)=>{
    let {status=500,message="Some error occured"}=err;
    res.status(status).send(message);
})

app.listen(8080,()=>{
    console.log("Server is listening to port 8080")

})