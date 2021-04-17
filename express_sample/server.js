const express = require('express')
const app = express()
const todoRoute = require('./routes/todos')

//to use the body paramerters we need to do these
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(4321, function () {
    console.log("servers stated at http://localhost:4321");
})

app.get('/',function (req,res) {
    res.send("Hello ");
})

app.use('/public',express.static(__dirname+'/public'));
app.use('/todos',todoRoute);