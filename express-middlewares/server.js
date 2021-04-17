const express = require('express')
const app = express()

app.listen(4321,() => {
    console.log("stated server at https://localhost/4321");
})
app.use('/',express.static(__dirname+'/public'));
