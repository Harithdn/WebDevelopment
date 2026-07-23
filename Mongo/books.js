const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(()=>{
    console.log("Connection successful");

}).catch((err)=>{console.log(err)});

async function main()//async function that returns a promise if the connection is established or return an error if not
{
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },

        author:{
            type:String
        },
        price:{
            type:Number,
            min:[1,"price is too low to be listed"]
        },
        discount:
        {
            type:Number,
            default:0
        }
    }
);

const Book=new mongoose.model("Book",bookSchema);

// let book1=new Book(
//     {
//         title:"Captain America",
//         author:"Stan Lee",
//         price:100
//     }
// )
// book1.save().then(res=>console.log(res));

Book.findByIdAndUpdate("6a343b2596270d0674097e3a",{price:-1000},{new:true,runValidators:true})
.then((res)=>{console.log(res)})
.catch((err)=>{console.log(err.errors.price.properties.message)});
