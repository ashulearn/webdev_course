const {Router} = require('express')

const postsRoute = Router()

postsRoute.get('/',(req,res)=> {
    res.send('TODO : all posts')
})
module.exports = {
    postsRoute
}