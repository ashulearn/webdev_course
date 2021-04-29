const {Router} = require('express')
const {
    createNewPost,
    findAllPosts
}  = require('../../controller/posts')
const route = Router()

route.get('/', async (req,res)=> {
    const posts =await findAllPosts()
    res.send(posts)
})
route.post('/', async (req,res) => {
    const {userId,tittle,body} = req.body
    if((!userId) || (!tittle) || (!body))
    {
        res.send({
            error : 'Required all fields'
        })
    }
    const post = await createNewPost(userId,tittle,body)
})


module.exports = {
    postsRoute : route
}