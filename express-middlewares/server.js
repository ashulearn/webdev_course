const express = require('express')
const app = express();

app.listen(4321,()=> {
    console.log('server started at https://localhost/4321');
})
function m1(req,res,next)
{
    console.log("running m1");
    next();
}
function m2(req,res,next)
{
    console.log("running m2");
    next();
}
function m3(req,res,next)
{
    console.log("running m3");
    next();
}
function m4(req,res,next)
{
    console.log("running m4");
    next();
}
function m5(req,res,next)
{
    console.log("running m5");
    next();//next is used to tell express to go to next middlewares
}
//here m1,m2 and so on are called middle wares in app.get the forst parameter is only endpoint others are middlewares.
app.get('/hello',m1,m2 ,(req,res) => {
    res.send('hello world')
})