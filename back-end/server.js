import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";
dotenv.config()

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import connectToMongoDB from './db/connectToMongo.js'

const port = process.env.PORT || 7766
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.listen(port, async () => {
    await connectToMongoDB();
    console.log(`Server running on port ${port}`)
})