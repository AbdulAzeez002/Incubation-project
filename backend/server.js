const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000
// const {errorHandler}=require('./middleware/errorMiddleware')
// const colors=require('colors')
const connectDB=require('./config/db')

const {viewAppDetails,allApplication,registeredApplication,newApplication,pendingApplication,blockedApplication,changingStatus} = require('./controllers/adminControllers')

const {getBookingSlots, getApplications,slotUpdate,slotDuplicate}=require('./controllers/slotControllers')

const app=express()

app.use(express.json())  // middleware to print json data
app.use(express.urlencoded({extended:false}))
  

console.log('hyyy')

// app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/incubation',require('./routes/incubationRoutes'))

app.get('/newApplication',newApplication)
app.get('/pendingApplication',pendingApplication)
app.get('/registeredApplication',registeredApplication)
app.get('/blockedApplication',blockedApplication)
app.get('/allApplication',allApplication)
app.get('/allApps',allApplication)
app.post('/changingStatus',changingStatus)
app.get('/viewApplication/:id',viewAppDetails)

app.get("/getBookingSlots", getBookingSlots);
app.get("/getApplications", getApplications);
app.post("/slotUpdate", slotUpdate);
app.patch("/slotDuplicate", slotDuplicate);



 app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})