const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require('express');
const app=express();
const path=require("path");
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'delta_app',
      password: 'root1234'
    });

    let getRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
     faker.internet.email(),
     faker.internet.password(),
];
};

  //let q="INSERT INTO user VALUES?"; //query string
  //Inserting two tuples
  // let users=[["user1a","user123a","abca@gmail.com","abc@123a"],["user1b","user123b","abcb@gmail.com","abc@123b"]];

  //Inserting 100 random users with the help of faker
  // let data=[];
  // for(let i=1;i<=100;i++)
  // {
  //   data.push(getRandomUser());

  // }


//   try {
//     connection.query(q,[data],(err,result)=>{
//       if(err)throw err;
//       console.log(result);
//       console.log(result.length);
//     });
//  } catch (err) {
//     console.log(err);
//   }

//   connection.end();

app.get("/",(req,res)=>{ //Displays the count of all the users
  let q="SELECT COUNT(*) FROM user";
   try {
    connection.query(q,(err,result)=>{
      if(err)throw err;
      //console.log(result);
      //console.log(result[0]["COUNT(*)"]);
      let count=result[0]["COUNT(*)"];
     res.render("home.ejs",{count});
    });
 } catch (err) {
    console.log(err);
  }

  
  
})

app.get("/user",(req,res)=>{
  let q="SELECT * FROM user";
  try{
     connection.query(q,(err,users)=>{
    if(err)throw err;
    //console.log(users);
    res.render("showusers.ejs",{users});
  })
  }catch(err){
    console.log(err);
  }
 

})

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id= '${id}' `;
  try{
    connection.query(q,(err,result)=>{
      if(err)throw err;
      //console.log(result[0]);
       let user=result[0];
       res.render("edit.ejs",{user});
      
    })
   
  } catch(err){
      console.log(err);
    }
     
    
 
});

//Update DB route
app.patch("/user/:id/",(req,res)=>{
  //res.send("updated");
  let {id}=req.params;
  let {password:formPass, username:newUsername}=req.body;
  console.log("Body: ",req.body);
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
  connection.query(q,(err,result)=>{
    if(err)throw err;
    let user=result[0];
    if(formPass.trim() !== user.password.trim()){
      res.send("WRONG PASSWORD!!");
    }
    else{
      let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}' `;
      try{
        connection.query(q2,(err,result2)=>{
          if(err)throw err;
          res.redirect("/user");
        
      })

      }catch(err){
        console.log(err);
      }
      
       //res.send(user);
    }
   

  })}catch(err){
    console.log(err);
  }
  
})

//Add a new user
app.post("/user",(req,res)=>{
  res.render("adduser.ejs");
})

app.post("/user/new",(req,res)=>{
  let {username,email,password}=req.body;
  let id=uuidv4();
  let q=`INSERT INTO user VALUES(?,?,?,?)`;
  try{
    connection.query(q,[id,username,email,password],(err,result)=>{
    if(err)throw err;
    console.log(result);
    res.send(result);

  })

  }catch(err){
    console.log(err);
  }
  
})

//Delete a user
app.post("/user/:id/delete",(req,res)=>{
  let {id}=req.params;
  let q=`DELETE FROM user WHERE id=?`;
  connection.query(q,[id],(err,result)=>{
    if(err){
      console.log(err);
      
    }
    console.log(result);
    res.redirect("/user");

  })

})

app.listen(8080,()=>{
  console.log("Server is listening to port 8080");
})


