const sequilize = require('sequelize')

const db = new sequilize('coding_blocks','root','Ashking0110', {
    host : 'localhost',
    dialect : 'mysql'
})

db.authenticate()
    .then(()=> {
        console.log('server connected')
    })
    .catch((err)=> {
        console.log(err)
    })

module.exports = {
    db
}