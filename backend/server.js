require('dotenv').config()
const express =require('express')
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

//express app 
const app = express()


app.use(express.json());
//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //listen for req
    app.listen(process.env.PORT,()=>{
    console.log('Connected to DB & listening on port 4000')
    })
})
.catch((error)=>{
    console.log(error)
})

