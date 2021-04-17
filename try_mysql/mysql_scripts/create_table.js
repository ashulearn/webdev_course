const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'mytestdb',
    password : 'Ashking0110'
});

connection.query(`
CREATE TABLE IF NOT EXISTS persons(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    city VARCHAR(30)
);`,
function(err,results) {
    if(err) 
    console.log(err);
    else 
    console.log("Table created sucessfully");
    connection.close();
}
)