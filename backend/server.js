 import express from 'express';
 import dotenv from 'dotenv';

 import authRoutes from "./routes/auth.routes.js"
import connectToMongoDB from './db/connectToMongoDB.js';
 const app = express();
 dotenv.config();

 const port = process.env.PORT || 5000;

 app.get("/",(req,res)=>{
    res.send("Hello World!");
 });

 app.use("/api/auth",authRoutes);

 app.listen(port,() =>{
   connectToMongoDB();
   console.log(`Server Running on port ${port}`);
 });
