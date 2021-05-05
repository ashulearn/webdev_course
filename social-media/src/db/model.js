const Sequilize = require('sequelize')
const db = new Sequilize({
    dialect : 'mysql',
    database : 'cbsocialmediadb',
    username : 'root',
    password : 'Ashking0110'
})
const ID_COL = {
    type : Sequilize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true,
}
const COL_USERNAME_DEF = {
    type : Sequilize.DataTypes.STRING(30),
    allowNull : false,
    unique : true
}
const COL_TITLE_DEF = {
    type : Sequilize.DataTypes.STRING(140),
    allowNull : false
}
const Users = db.define('user', {
    id : ID_COL,
    username : COL_USERNAME_DEF
})
const Posts = db.define('post', {
    id : ID_COL,
    title : COL_TITLE_DEF,
    body : {
        type : Sequilize.DataTypes.TEXT,
        allowNull : false
    }
})
const Comments = db.define('comment', {
    id : ID_COL,
    title : COL_TITLE_DEF,
    body : {
        type : Sequilize.DataTypes.TEXT({length:'tiny'})
    }
})

Users.hasMany(Posts)
Posts.belongsTo(Users)

Users.hasMany(Comments)
Comments.belongsTo(Users)

Posts.hasMany(Comments)
Comments.belongsTo(Posts)


module.exports = {
    db,
    Users,
    Posts,
    Comments
}