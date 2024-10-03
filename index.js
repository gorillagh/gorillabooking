import express from "express";
import mongoose from "mongoose";
import { bookingRouter } from "./routes/all-routes.js";
import "dotenv/config";

const app = express();


const PORT = 3001

app.use(express.json())
app.use(bookingRouter)

// Create database
await mongoose.connect(process.env.MONGO_URI)


app.listen(3001, ()  => {
    console.log("Server is listening on port 3001")
});