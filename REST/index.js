const express=require("express");
const app=express();
const port=8080;
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
const {v4:uuidv4}=require('uuid');


//Posts
let posts=[
    {
        id:uuidv4(),//generates random number every time we execute it,can be assigned to post id's for didtinguishing posts
        username:"Harith",
        content:"I got my first internship !!!"
    },
    {
        id:uuidv4(),
        username:"Varun",
        content:"work harddd!!!"

    },
    {
        id:uuidv4(), 
        username:"Arun",
        content:"imma diee !!!"
    }
    
]



app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("Server working well");
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let {id}=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
   
})
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find(p=>p.id===id);
    res.render("show",{post});


   
   
})

app.patch("/posts/:id",(req,res)=>{
    console.log("patch request working");
    let {id}=req.params;
    let newcontent=req.body.content;
    // console.log(newcontent);
    // console.log(id);
    // res.send("patch request working");
    let post=posts.find((p)=>p.id===id);
    post.content=newcontent;
    console.log(post);
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>p.id===id);
    res.render("edit.ejs",{post});

}) 

