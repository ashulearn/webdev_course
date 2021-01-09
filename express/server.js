let express = require('express')
const app = express()

app.get('/', (req,res) => {
 res.send("hello browser")
})
app.listen(4444,() => {
    console.log('hello server')
})