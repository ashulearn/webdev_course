// in async await there is no change in definition only the calling is different 
// definition is similar to promises

function helloSayer(times,name) {
    return new Promise((resolve,reject) => {
        let count = 0
        let loopId = setInterval(() => {
            count++
            console.log('hello ',name)
            if(count===times)
            {
                clearInterval(loopId)
                resolve()
            }
        },100)
    })
}

async function task() {
    await helloSayer(3,'ashu')
    await helloSayer(2,'aman')
}

task()