const mongoose=require("mongoose");
const Chat=require("./models/chats.js")

//Connect mongoose
main().then(res=>console.log("Connection successful"))
.catch(err=>console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

const allchats=[
    {
        from:"Neha",
        to:"Priya",
        msg:"hello",
        created_at:new Date()
    },
    {
        from:"Priya",
        to:"Neha",
        msg:"hii",
        created_at:new Date()
    },
    {
        from:"Tony",
        to:"Peter",
        msg:"Love youu 3000",
        created_at:new Date()
    },
    {
        from:"Neha",
        to:"Rahul",
        msg:"bye",
        created_at:new Date()
    },
    {
        from:"Modi",
        to:"Meloni",
        msg:"Melody",
        created_at:new Date()
    }


]


Chat.insertMany(allchats)