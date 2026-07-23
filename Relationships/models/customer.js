const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/relationDemo').then(()=>console.log("connection successful"));

const orderSchema=new Schema({
   item:String,
   price:Number
});

const Order=mongoose.model("Order",orderSchema);

const customerSchema=new Schema({
   name:String,
   orders:[
    {
        type:Schema.Types.ObjectId,
        ref:"Order"
    }
   ]
});

//Mongoose middlewares
// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res= await Order.deleteMany({_id:{$in:customer.orders}});
        console.log(res);
    }

});

const Customer=mongoose.model("Customer",customerSchema);





const addCust=async ()=>{
    let cust=new Customer({
        name:"Arjun"
    });
    let ord=new Order({
        item:"Pizza",
        price:250
    });
    cust.orders.push(ord);

    await ord.save();
    let res= await cust.save();
    console.log(res);
    

}
    
 //addCust();

const delCust=async ()=>{
    let res=await Customer.findByIdAndDelete("6a553721462b7dd90d13c315");
    console.log(res);
}

delCust();







