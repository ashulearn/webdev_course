const express = require('express')
const app = express()

const {db} = require('./db/model')

db.sync({alter : true})
    .then(function() {
        app.listen(4321, ()=> {
            console.log('Server started at port 4321')
        })
    })
    .catch((err)=> {
        console.log(err)
    })