const { Users } = require('../db/model')
const { genRandomUsername } = require('../utils/username')

async function createAnoynUser() {
    const user = await Users.create({
        username : genRandomUsername()
    })
    return user
}

async function getUserById(id)
{
    return await Users.findOne({where : {id}})
}

async function getUserByName(username)
{
    return await Users.findOne({where : {username}})
}
module.exports = {
    createAnoynUser,
    getUserById,
    getUserByName
}
//testcode

// async function task() {
//     console.log(await createAnoynUser())
//     console.log('---------------------')
//     console.log(await createAnoynUser())
//     console.log('---------------------')
//     console.log(await createAnoynUser())
//     console.log('---------------------')
//     console.log(await createAnoynUser())
//     console.log('---------------------')
//     console.log(await createAnoynUser())
//     console.log('---------------------')
// }

// task();