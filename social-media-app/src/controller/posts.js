const {Posts,Users} = require('../db/model')

async function createNewPost(userId,tittle,body)
{
    const post = await Posts.create({
        tittle,
        body,
        userId
    })

    return post
}

// showAllPosts({
//     username: 'sdvc',
//     tittle : 'sdc'
// })

async function showAllPosts(query) {
    //todo
    const posts = await Posts.findAll({
        include : [Users]
    })
    return posts

}


// async function task()
// {
//     // console.log(await createNewPost(1,'tittle saple 1','sample body 1'))
//     // console.log(await createNewPost(1,'tittle saple 1','sample body 1'))

//     const posts = await showAllPosts()
//     for(p of posts)
//     {
//         console.log(p.tittle)
//     }

// }
// task()

module.exports = {
    createNewPost,
    showAllPosts
}