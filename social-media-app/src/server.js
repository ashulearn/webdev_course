const express = require('express')
const {db} = require('./db/model')
const {usersRoute} = require('./routes/users')
const {postsRoute} =require('./routes/posts')

const app = express()

app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use('/api/users', usersRoute)
app.use('/api/posts',postsRoute)
app.use('/',express.static(__dirname + '/public'))


db.sync()
    .then(function() {
        app.listen(4321, ()=> {
            console.log('Server started at port 4321')
        })
    })
    .catch((err)=> {
        console.log(err)
    })