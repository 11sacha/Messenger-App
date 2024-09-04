import express from 'express'
import dotenv from 'dotenv'
import { app, server } from './socket/socket.js'
import cookieParser from "cookie-parser";
import path from "path";

import cors from 'cors';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongoDB from './db/connectToMongo.js'

const __dirname = path.resolve();

dotenv.config()
const port = process.env.PORT || 7766

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, "/front-end/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "front-end", "dist", "index.html"));
});

app.get('/', (req, res) => {
    res.send("Server's running!")
})

server.listen(port, async () => {
    await connectToMongoDB();
    console.log(`Server running on port ${port}`)
})