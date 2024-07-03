require('dotenv').config()
const express =require('express')
const workoutRoutes = require('./routes/workout')


//express app 
const app = express()

//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//listen for req

app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000n')
})