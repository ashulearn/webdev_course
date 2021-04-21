const sequilize = require('sequelize')
const dataTypes = sequilize.DataTypes

const db = new sequilize('sampledb1','root','Ashking0110',{
    host : 'localhost',
    dialect : 'mysql'
})

const Student = db.define('student', {
    name : {
        type: dataTypes.STRING(30),
        allowNull : false,

    },
    age : {
        type : dataTypes.INTEGER,
        allowNull : false,
        defaultValue : -1
    }
})

db.sync()
    .then(()=> {console.log('db synced')})
    .catch((err)=>{console.log(err)})

module.exports = {
    db,Student
}