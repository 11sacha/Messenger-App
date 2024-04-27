import express from 'express'
import dotenv from 'dotenv'


import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongo.js'

dotenv.config()
const port = process.env.PORT || 7766

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.use('/api/auth', authRoutes)

app.listen(port, async () => {
    await connectToMongoDB();
    console.log(`Server running on port ${port}`)
})