const Sequelize = require('sequelize')
const db = new Sequelize({
    dialect : 'mysql',
    database : 'socialmediadb',
    username : 'root',
    password : 'Ashking0110'
})

const COL_ID_DEF = {
    type : Sequelize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
}
const COL_USERNAME_DEF = {
    type : Sequelize.DataTypes.STRING(30),
    allowNull : false,
    unique : true
    
}
const COL_TITTLE_DEF = {
    type : Sequelize.DataTypes.STRING(140),
    allowNull : false,

    
}
const Users = db.define('user', {
    id : COL_ID_DEF,
    name : COL_USERNAME_DEF
})

const Posts = db.define('post', {
    id : COL_ID_DEF,
    tittle : COL_TITTLE_DEF,
    body : {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false
    }
})

const Comments = db.define('comment' , {
    id : COL_ID_DEF,
    tittle : COL_TITTLE_DEF,
    body : {
        type : Sequelize.DataTypes.TEXT('tiny')
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)
exports = module.exports = {
    db,Users,Comments,Posts
}