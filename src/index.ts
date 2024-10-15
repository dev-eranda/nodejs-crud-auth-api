import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import http from "http";
import mongoose from "mongoose";

import router from "./router";

const PORT = 5000;
const MONGO_URL = "mongodb+srv://user:user@cluster0.5ybjl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}/`);
});

mongoose.Promise = Promise;
mongoose
   .connect(MONGO_URL)
   .then((conn) => {
      console.log(`MongoDB connected: ${conn.connection.host}`);
   })
   .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
   });
mongoose.connection.on("MongoDB connection error", (error: Error) => console.log(error));

app.use("/", router());
