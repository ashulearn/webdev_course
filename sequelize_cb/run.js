const {db} = require('./db/model')
const {app} = require('./server')

const start = async function () {
    try {
        await db.sync();

        app.listen(4321, () => {
            console.log("seerver started at localhost")
        })
    }catch(e) {
        console.log(e)
    }
}
start();