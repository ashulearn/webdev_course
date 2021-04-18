const sequilize = require('sequelize')
const db = new sequilize('sampledb1','root','Ashking0110',{
    host : 'localhost',
    dialect : 'mysql'
})

db.authenticate()
    .then(()=> {
        console.log("done")
    })
    .catch((err)=> {
        console.log(err)
    })
