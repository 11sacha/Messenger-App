import express from 'express'
import dotenv from 'dotenv'
import { app } from './socket/socket.js'
import cookieParser from "cookie-parser";
dotenv.config()
import cors from 'cors';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongo.js'


const port = process.env.PORT || 7766

app.use(cors())
app.use(express.json());
app.use(cookieParser());


app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(port, async () => {
    await connectToMongoDB();
    console.log(`Server running on port ${port}`)
})