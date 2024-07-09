import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import route from './routes/userRoute.js'
import cors from 'cors'
import corsOptions from './configs/cors.js'

const app = express()

app.use(bodyParser.json())
dotenv.config()

const PORT = process.env.PORT || 8001
const MONGO_URL = process.env.MONGO_URL;

app.use(cors(corsOptions))

mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("DB connected successfully")
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`)
        })
    })
    .catch((error) => console.log(error))

app.use('/api', route) 

