const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(()=>{
    console.log("Connection successful");

}).catch((err)=>{console.log(err)});

async function main()//async function that returns a promise if the connection is established or return an error if not
{
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema=new mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number
    }
);

const User=mongoose.model("User",userSchema);

// const user2=new User(
//     {
//         name:"Eve",
//         email:"eve@yahoo.in",
//         age:40,
//     }
// );
//user2.save();


// user2.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

// User.insertMany([
//     {name:"Peter",email:"peter@gmail.com",age:30},
//     {name:"Bruce",email:"bruce@gmail.com",age:40},
//     {name:"Chris",email:"chris@gmail.com",age:35},
// ]).then((res)=>{
//     console.log(res);
// }).catch(err=>{console.log(err)});

User.find({age:{$gt:30}})
.then(res=>console.log(res))
.catch(err=>console.log(err));

// User.findById("69dcd650b08201f205564959")
// then((res)=>{console.log(res)})
// .catch(err=>{console.log(err)});

// User.updateOne({name:"Bruce"},{age:49})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});

// User.updateMany({age:{$gt:47}},{age:50})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});

// User.findOneAndUpdate({name:"Bruce"},{age:47},{new:true})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});

// User.findOneAndUpdate({name:"Bruce"},{age:47},{new:true})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});

// User.deleteOne({name:"Bruce"})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});


// User.deleteMany({age:{$lt:40}})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});


// User.findByIdAndDelete("69dcd54244fbf7452dba0b78")
// .then(res=>{console.log(res)})
// .catch(err=>{console.log(err)});





