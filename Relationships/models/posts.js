const mongoose = require('mongoose');
const Schema=mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/relationDemo')
.then(()=>{
        console.log("connection successful");
    });

const userSchema=new Schema({
    name:String,
    email:String
});

const postSchema=new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async ()=>{
    let user1=new User({
        name:'Rahul',
        email:'rahul@gmail.com'
    });

    let post1=new Post({
        content:'Hello world!!',
        likes:7
    });

    post1.user=user1;

    await user1.save();
    await post1.save();
}

// addData();

const findData=async ()=>{
    const res=await Post.find().populate('user');
    console.log(res);
}
findData();


