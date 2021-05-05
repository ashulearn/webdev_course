const { Users } = require('../db/model')
const { genRandomUsername } = require('../utils/username')

async function createAnoynUser() {
    const user = await Users.create({
        username : genRandomUsername()
    })
    return user
}

module.exports = {
    createAnoynUser
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