const Sequelize = require('sequelize')
const db = new Sequelize('Shopdb','root','Ashking0110',{
    host : 'localhost',
    dialect : 'mysql'
})

const User = db.define('users', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false 
    }
})
const Product = db.define('products', {
    id: {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name :{
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer : Sequelize.STRING,
    price : {
        type : Sequelize.FLOAT,
        allowNull:false,
        defaultValue : 0.0
    }
     
})

db.sync()
    .then(()=> {console.log("database created") })
    .catch((err)=>console.log(err))
module.exports = {
    User,Product
}