const mysql = require('mysql2')

const insert = {
    name : process.argv[2],
    age : parseInt(process.argv[3]),
    city : process.argv[4],
}
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    database : 'mytestdb',
    password : 'Ashking0110'
});

connection.query(`
    INSERT INTO persons(name,age,city) VALUES (
        '${insert.name}',
        ${insert.age},
        '${insert.city}' 
    )
`,
function (err,results) {
    if(err)
    {
        console.log(err);
    }
    else 
    {
        console.log("Added sucessfully")
        console.log(results);

    }
    connection.close();
}
)