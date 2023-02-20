const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./connectDB/connectDB');
const bookRouter=require("./routes/bookRoutes");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/books",bookRouter);

app.listen(process.env.PORT,async()=>{
    try{
        await connectDB();
        console.log("Server  is up at port ",process.env.PORT);
    }catch(e){
        console.log(e);
    }
});
