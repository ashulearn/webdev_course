const {db,Student} = require('./model')







const task = async () => {
    try {
        await db.sync()

        //insrt into table
        for(let i=1;i<35;i++)
        {
            let names = ['sunny','shasha','ava','mia','angela','lana','eva','jonny','danny','angelina']
            await Student.create({
                name : names[parseInt(Math.random()*10)],
                age : 20 + parseInt(Math.random()*10)
            })
        }
    } catch(e) {
        console.log(e)
    }
}
task();