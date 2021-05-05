const { Users, Posts } = require('../db/model')
async function createNewPost(userId, title, body) {
    const post = await Posts.create({
        title,
        body,
        userId
    })
    return post
}

//we will have an object passed into the showAllPosts function

async function showAllPosts(query) {
    //todo :handle query

    const posts =await Posts.findAll({
        include : [Users]
    })
    return posts
}

module.exports = {
    createNewPost,
    showAllPosts
}

// async function task() {
//     console.log(await createNewPost(
//         1,
//         'THIS is a first title',
//         'this is body'))
//     console.log(await createNewPost(
//         2,
//         'THIS is a second title',
//         'this is body'))
//     console.log(await createNewPost(
//         3,
//         'THIS is a third title',
//         'this is body'))
//     console.log(await createNewPost(
//         4,
//         'THIS is a forth title',
//         'this is body'))
//     console.log(await createNewPost(
//         5,
//         'THIS is a fifth title',
//         'this is body'))
// }
// task()
// async function task()
// {
//     const posts = await showAllPosts();
//     for(p of posts)
//     {
//         console.log(`username : ${p.user.username} - title : ${p.title}`)
//     }
// }