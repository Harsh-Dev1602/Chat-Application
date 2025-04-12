import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import router from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js"
import path from "path";

dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log(" Connected to Mongoose db.. ");
} catch (error) {
    console.log(error);
}


app.use("/api/user", router);
app.use("/api/message", messageRoute);

if (process.env.NODE_ENV === 'production') {
    const dirPath = path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirPath, './Frontend/dist', 'index.html'));
    });
}

server.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})