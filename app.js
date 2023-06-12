const express=require('express')
const app=express()
const UserPage=require('./users.js')
app.get('/',(req,res)=>{
    res.send("homepage")
})
app.use('/users',UserPage)
app.listen(3500)