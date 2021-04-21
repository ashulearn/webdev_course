const {db,Student} = require('./model')

const task = async function () {
    try {
        await db.sync()
        const students = await Student.findAll()
        console.log(students)// here we get the table in form of JSON object we can acess it and peroform queries check sequilie docs for query
    } catch(e) {
        console.log(e)
    }

}

task();