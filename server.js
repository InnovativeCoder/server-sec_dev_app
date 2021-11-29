const express = require('express')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const connectDB= require("./config/db")
app.use(bodyparser.json())

require('dotenv').config({
    path:'./config/config.env'
})

//Connect to db
connectDB()

//Config for only development
// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors())
    app.use(morgan('dev'))
}

const authRouter = require('./routes/auth.routes')
const userRouter = require('./routes/user.routes')

//Use Routes
app.use('/api', authRouter)
app.use('/api', userRouter)

const PORT = process.env.PORT

app.use((req, res, next) => {
    res.status(404).json({
        success:false,
        message: "Page not found"
    })
})

app.listen(PORT, ()=>{
    console.log(`App listening on ${PORT}`)
})
