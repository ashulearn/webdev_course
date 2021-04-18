const mysql = require('mysql2')

const connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password : 'Ashking0110',
    database : 'mytestdb'
})

function getAllPersons() {
    return new Promise( (resolve,reject) => {
        connection.query(`
            SELECT * FROM persons;
        `,
        function (err,rows,cols) {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(rows);
            }

        })
    })
}

function addNewPerson(name,age,city) {
    return new Promise((res,rej)=> {
        connection.query(`
            INSERT INTO persons(name,age,city) VALUES(?,?,?)
        `,[name,age,city],(err,results)=> {
            if(err)
            {
                rej(err);
            }
            else 
            {
                res();
            }
        })
    } )
}
//in this function we write the name,age and city in array and ? in the query to avoid sql_injection
module.exports = {
    getAllPersons,
    addNewPerson
}