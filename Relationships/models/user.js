const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/relationDemo').then(console.log("connection successful"));

const userSchema=new Schema({
    username:String,
    addresses:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
});

const User=mongoose.model("User",userSchema);

const addUsers= async()=>{
    let user1=User({
        username:"SherlocHolmes",
        addresses:[
            {
                location:"221B Baker street",
                city:"London"
            }
        ]
    })
    user1.addresses.push({ location:"P32 Wallstreet", city:"London"});
    let result=await user1.save();
    console.log(result);
}

addUsers();