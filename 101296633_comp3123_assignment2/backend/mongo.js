const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/comp3123-assignment2")
.then(()=>{
    console.log("mongodb Connected!");
})
.catch(()=>{
    console.log('connection failed');
})

const newSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model.model("collection",newSchema)

module.exports=collection