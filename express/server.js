let express = require('express')
const app = express()

app.get('/', (req,res) => {
 res.send("hello browser")
})
app.listen(4444,() => {
    console.log('hello server')
})
app.get('/form', (req,res) => {
    res.sendFile(__dirname+"/files/form.html")
})
//dealing with variable in url
app.get('/:city/welcome',(req,res) => {
    res.send("welcome to " + req.params.city)
})
app.get('/:city/:greeting',(req,res) => {
    res.send(req.params.greeting +" to " + req.params.city)
})
app.get('/:person/:action',(req,res) => {
    res.send("Thank you " + req.params.person+ "for" + req.params.city)
})
//here we have same kind of url for both so it is handled always by 1st one