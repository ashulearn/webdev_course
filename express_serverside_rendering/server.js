const express= require('express');
const app = express();
const todoRoute = require('./routes/todos');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine' , 'hbs');
app.set('views','views');
app.use('/todos',todoRoute)
app.listen(4321,() => {
    console.log("server started at http://localhost:4321");

})

