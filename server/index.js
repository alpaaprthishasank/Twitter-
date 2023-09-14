import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";

const app = express();
dotenv.config();

const connect=()=>{
  mongoose.set("strictQuery",false);
  mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connect to mongodb database')
  }).catch((err)=>{
    console.log(err)
  })
}
/*
mongoose
  .connect(
    "mongodb+srv://alaparthishasanksai:3VoyRi6mM7BjoFDN@cluster0.aw8sttw.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Db connected"))
  .catch(err => console.log(err));
*/

app.use(cookieParser());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/tweets", tweetRoutes);

//mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(8000, () => {
 connect();
  console.log("Listening to port 8000");
});
