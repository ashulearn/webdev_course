const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./route/api').route) //here we have index.js in route/api so it will require route from there
app.listen(4321,() => {
    console.log('server started')
})