const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");

//Example Middlewares



// app.use((req,res,next)=>{
//     // let {query}=req.query;
//     // console.log(query);
//     console.log("Hi I am 1st middeleware");
//     return next();
//     console.log("This is after next");
//     //the code runs after the next function as well but it is nota  good practice to write any code after next()
//     //so we can return next so that no code can be run after the next())

// });

// app.use((req,res,next)=>{
//     console.log("Hi I am 2nd middeleware");
//     next();

// });

//Utility Middleware
//Building a Logger middleware similar to Morgan middleware
// app.use((req,res,next)=>{
//     req.time=new Date(Date.now()).toString()
//     console.log(req.method, req.hostname, req.path, req.time);
//     return next();
// })






//Errors can handled thorugh error handling middlewares
//works very fine with both synchronous and and async function in latest Express 5, bcoz express naturally calls next(err) in latest version
//but for older versions of express, if a async error occurs,next(err) is not called naturally and hence the server crashes
//so we use async error handling mechanisms such as try catch blocks and async wrapper functions
//hence those mechanisms are not reqd now
//although we can use try catch blocks in some cases where we want handle errors specially without the normal error handling middlewares



const checkToken=(req,res,next)=>{
    const {token}=req.query;
    if(token==="giveaccess")
    {
        return next();
    }
    throw new ExpressError(401,"ACCESS DENIED !!!");

 };

app.get("/api",checkToken,(req,res)=>{
    res.send("data");

})

app.get("/err",(req,res)=>{
    abcd=abcd
});



// app.use((err,req,res,next)=>{
//     console.log("-----ERROR2-----");
//     return next(err);
// })






app.get("/",(req,res)=>{
    res.send("I am Groot");
});

app.get("/random",(req,res)=>{
    res.send("I am a random page");
})

//Error handling middleware
//If the req doesnt match with any of the path routes, it executes this on default

// app.use((req,res)=>{
//     res.send("Page not found!")
// })

//Error handling middlewares


app.get("/admin",(req,res,next)=>{

    throw new ExpressError(403,"Access is forbidden") ;

}
);
app.use((err,req,res,next)=>{
    // console.log("-----ERROR1-----");
    // res.send(err);
    let {status=500,message}=err; //Denconstucting the staus and message of the error from the error object
    res.status(status).send(message);
});
app.listen(3000,()=>{
    console.log("server is listening to port 3000");
});

