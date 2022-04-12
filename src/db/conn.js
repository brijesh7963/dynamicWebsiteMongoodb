//connecting mongoose compass for storing database
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/thapadynamic",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection sucessful");
}).catch((err)=>{
    console.log("error is:"+err);
})