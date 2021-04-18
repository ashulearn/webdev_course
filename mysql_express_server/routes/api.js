const route = require('express').Router()
const db = require('../db')

route.get('/persons', (req,res)=> {
    //send all the persons as array
    db.getAllPersons()
        .then((persons)=> res.send(persons))
        .catch((err)=> res.send(err))
})

route.post('/persons', (req,res)=> {
    //add new persons
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
        .then(()=> res.redirect('/api/persons'))
        .catch((err)=> res.send(err))
})

exports = module.exports ={
    route
}