//express is a js framework which helps us to write server side code for websites for listening,accepting and parsing req
const express=require("express");//express is a function 
const app=express();//the express function returns an object
// console.dir(app);//app is an object which helps us to write the server side application code
const port=3000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);

})

//app.use function send the same response for all the paths
// app.use((req,res)=>{
//     console.log("request received");
//     // console.dir(res);
//     let code="<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li></ul>"
//     res.send(code);
// })

//app.get function sned response for a particular path specified
app.get("/home",(req,res)=>{
    res.send("you contacted home path");
})
app.get("/help",(req,res)=>{
    res.send("you contacted help path");
})
// app.get(/.*/,(req,res)=>{//syntax if the user contacted some random path
//     res.send("you contaced some random path");
// })

app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    // res.send(req.params);
    let {username,id}=req.params;
    res.send(`<h1>Welcome to the page of @${username}</h1>`);
})

//Query Strings
app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q)
    {
        res.send(`<h1>Nothing searched</h1>`);
    }
    res.send(`<h1>Search results for ${q}<h1>`);
})

app.post("/",(req,res)=>{//post request
    res.send("you sent a post request to root path");
})
