const express = require('express')

const app = express()

app.listen(4321,()=> {
    console.log("server started at http://localhost:4321")

})

// we can mount a folser to aparticular folder i.e if the given route is acceses the use files from this folder
app.use('/xyz',express.static(__dirname+'/public'));//so if we do http://localhost/xyz/a.html the a.html will open
app.get('/',(req,res) => {
    res.send("Hello bhai")
})

app.get('/hello', (req,res) => {
    let name ='Guest';
    if(req.query.user) name=req.query.user;

    res.send('hello ' + name);
})
