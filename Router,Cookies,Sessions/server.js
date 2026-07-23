const express=require("express");
const app=express();
const users=require("./routes/user");
const posts=require("./routes/post");
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path=require("path");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));




app.listen(3000,()=>{
    console.log("server is listening to port 3000");
});

const sessionOptions={secret:"mysupersecretstring",
        resave:false,
        saveUninitialized:true

};
app.use(session(sessionOptions));
app.use(cookieParser("secretcode"));
app.use(flash());

app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("failure");
    next();

})
app.get("/",(req,res)=>{
    res.send("I am Groot");
    console.log(req.cookies);
});

app.get("/test",(req,res)=>{
    res.send("test successful");
});

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    if(name==="anonymous")
    req.flash("failure","user not registered");
    else
    req.flash("success","user registered successfully");
    res.redirect("/hello");
    console.log(req.session);
});

app.get("/hello",(req,res)=>{
   
    res.render("page.ejs",{name:req.session.name});
})

app.get("/reqtimes",(req,res)=>{
    if(req.session.count)
    req.session.count++;
    else
    req.session.count=1;

    res.send(`you requested ${req.session.count} times`);
});

app.get("/greet",(req,res)=>{
    let {name="user"}=req.cookies;
    res.send(`Hello ${name}!!`);
})

app.get("/getsignedcookie",(req,res)=>{
    res.cookie("made-in","India",{signed:true});
    res.send("signed cookies sent");
})

app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified!!");
})
app.use("/users",users);
app.use("/posts",posts);

app.get("/getcookies",(req,res)=>{
    res.cookie("hello","namaste");
    res.cookie("madeIn","India");
    res.send("Sent you some cookies!!");

})

// //Users routes

// //Display users
// app.get("/users",(req,res)=>{
//     res.send("Index page for users");
// });

// //Display user
// app.get("/users/:id",(req,res)=>{
//     res.send("display particular user");
// });

// //Add user
// app.post("/users",(req,res)=>{
//     res.send("Add User");
// });

// //Delete user
// app.delete("/users/:id",(req,res)=>{
//     res.send("Delete user");
// });

//Posts route
//Display posts
// app.get("/posts",(req,res)=>{
//     res.send("Index page for posts");
// });

// //Display user
// app.get("/posts/:id",(req,res)=>{
//     res.send("display particular post");
// });

// //Add user
// app.post("/posts",(req,res)=>{
//     res.send("Add post");
// });

// //Delete user
// app.delete("/posts/:id",(req,res)=>{
//     res.send("Delete post");
// });



