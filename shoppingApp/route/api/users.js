const User = require('../../db').User
const route = require('express').Router()
route.get('/',(req,res) => {
    //we want to send an array of users from the db
    User.findAll()
        .then((users)=> {
            res.send(users)
        }) 
        .catch((err)=> {
            console.log(err)
        })
})

route.post('/', (req,res)=> {
     //we expect the req to have name in it and we create a new user
     User.create({
         name : req.body.name
     })
     .then((user)=> {
         res.send(user)
     })
     .catch((err)=> {
         res.send(err)
     })
})

exports = module.exports = route 