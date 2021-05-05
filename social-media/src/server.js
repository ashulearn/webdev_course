const express = require('express')
const { db } = require('./db/model')

const app = express()

db.sync({force : true})
    .then(
        app.listen(4321,()=> {
            console.log("server started")
        })
    )
    .catch((err)=> {
        console.log("server not started")
        console.log(err)
    })