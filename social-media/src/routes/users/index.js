const { Router } = require('express')
const {
    createAnoynUser,
    getUserById,
    getUserByName
} = require('../../controllers/users')

const route = Router()


route.get('/:id', async (req, res) => {
    let user;
    if (isNaN(parseInt(req.params.id))) {
        user = await getUserByName(req.params.id)
    }
    else {
        user = await getUserById(req.params.id)
    }

    if(user)
    {
        res.status(200).send(user)
    }
    else {
        res.status(404).send({
            error : 'no entry found'
        })
    }
})
route.post('/',async (req,res)=> {
    const user = await createAnoynUser()
    res.status(201).send(user)
})
module.exports = {
    usersRoute: route
}