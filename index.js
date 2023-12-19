require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const userRoutes=require('./routes/userRoutes')
const adminRoutes=require('./routes/adminRoutes')
const cors=require('cors')
const cookieParser=require('cookie-parser')

const app=express()

app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',userRoutes)
app.use('/api/admin',adminRoutes)

app.use('/file',express.static('file'))

mongoose.connect('mongodb://127.0.0.1:27017/userManagementAngular')
.then(()=>{
    console.log('Database connected...')
})

app.listen(5000,()=>{
    console.log('App is listening on port 5000')
})