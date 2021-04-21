const Product = require('../../db').Product
const route = require('express').Router();

route.get('/', (req,res)=> {
    //send all the products
    Product.findAll()
        .then((products)=> {
            res.send(products)
        })
        .catch((err)=> {
            console.log(err)
        })
})

route.post('/',(req,res)=> {
    if(isNaN(parseFloat(req.body.price)))
    {
        return res.send("price is not a number")
    }
    //Add new product
    Product.create({
        name : req.body.name,
        manufacturer : req.body.manufacturer,
        price : parseFloat(req.body.price)
    })
    .then((product)=> {
        res.send(product)
    })
    .catch((err)=> {
        console.log(err)
    })
})

module.exports = route