import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongo.js'

const port = process.env.PORT || 7766
const app = express();

app.use(express.json())
app.use('/api/auth', authRoutes)

// app.get('/', (req, res) => {
//     res.send("Hello world!")
// })



app.listen(port, async () => {
    await connectToMongoDB();
    console.log(`Server running on port ${port}`)
})