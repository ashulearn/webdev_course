const {Router} = require('express')
const {
    getUserById,
    getUserByUsername,
    createAnonUser
} = require('../../controller/users')
const route = Router()

route.get('/:id', async (req,res) => {
    let user;
    if(isNaN(parseInt(req.params.id)))
    {
        //when parameter is username
        user=await getUserByUsername(req.params.id)
    }
    else {
        //when parameter is userId
        user = await getUserById(req.params.id)
    }

    if(user) {
        res.send(user)
    } else {
        res.send( {
            error : 'No user found'
        })
    }
})
route.post('/',async (req,res)=> {
    const user = await createAnonUser()
    res.send(user)
})
module.exports = {
    usersRoute : route
}