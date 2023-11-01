import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";

//import userRoute from "./routes/user.route.js";
//import transactionRoute from "./routes/transaction.route.js";


dotenv.config();

// initialize express
const app = express();
const port = 3001;

app.use(cors({
    credentials: true, 
    origin: [process.env.CORS_ACCEPTED_ORIGIN_1]
}));
app.use(json());
app.use(morgan("tiny"));
app.use(cookieParser());

// connect to mongodb
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
// check if connection is successful
mongoose.connection.once('open', () => {
    console.log("Connection Established Successfully");
});

app.listen(port, () => {
    console.log(`Server is active on port : ${port}`);
});