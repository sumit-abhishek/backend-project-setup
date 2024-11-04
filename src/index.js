// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import mongoose from "mongoose";
// import { DB_NAME } from "./constansts";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

//Another Way of Connecting DB
connectDB();

//One Way to Connect With Database

/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listning on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
})();
*/
