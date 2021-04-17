const mysql = require('mysql2')


const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'mytestdb',
    password : 'Ashking0110'
});

connection.query(`
    SELECT * FROM persons;
`,
function (err,results,fields) {
    if(err)
    {
        console.log(err);
    }
    else 
    {
        console.log(results);
        console.log(fields);

    }
    connection.close();
}
)