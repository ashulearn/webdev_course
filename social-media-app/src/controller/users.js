const {Users} = require('../db/model')
const {generateRandomUserName} = require('../utils/username')

async function createAnonUser()
{
    const user = await Users.create({
        name : generateRandomUserName()
    })

    return user
}

async function getUserById(id) {
    return await Users.findOne({where : { id }})
}

async function getUserByUsername({where : { username }}) {
    return await Users.findOne({
        username
    })
}

module.exports= {
    createAnonUser,
    getUserById,
    getUserByUsername
}
// async function task() 
// {
//     console.log(await createAnonUser())
//     console.log('------------------------')
//     console.log(await createAnonUser())
//     console.log('------------------------')
//     console.log(await createAnonUser())
//     console.log('------------------------')
//     console.log(await createAnonUser())
//     console.log('------------------------')

// }

// task()