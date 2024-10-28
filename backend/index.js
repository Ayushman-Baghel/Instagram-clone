import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user_routes.js";
import userMessage from "./routes/message_routes.js"
import userPost from "./routes/post_routes.js"
dotenv.config({});
const app=express();

const PORT=process.env.PORT || 4000;
//middlewares
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true,

}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));

//api
app.use("/api/v2/user",userRoute);
app.use("/api/v2/message",userMessage);
app.use("/api/v2/post",userPost);



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MONGODB connected successfully.');
    } catch (error) {
        console.log(error);
    }
}



app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"from backend",
        success:true
    })
})

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})