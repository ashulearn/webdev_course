const express = require('express')

const app = express()

app.listen(4321,()=> {
    console.log("server started at http://localhost:4321")

})
app.get('/',(req,res) => {
    res.send("Hello bhai")
})
