const {Router} = require('express')
const {createNewPost,findAllPosts} = require('../../controllers/posts')

const route = Router()

route.get('/',async (req,res)=>{
    const posts = await findAllPosts()
    res.send(posts)
})

route.post('/',async (req,res)=> {
    const {userId,title,body} = req.body
    if((!userId) || (!title) || (!body))
    {
        return res.status(404).send({
            error:'requires userId,title,body to create a post' 
        })
    }
    const post = await createNewPost(userId,title,body)
    res.status(201).send(post)

})

module.exports = {
    postsRoute : route
}