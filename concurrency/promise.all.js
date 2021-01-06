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
    await Promise.all([helloSayer(3,'ashu'),
    helloSayer(3,'harshita'),
    helloSayer(3,'archana')])
    
    Promise.all([
        helloSayer(3,'aman'),
    helloSayer(3,'hind'),
    helloSayer(2,'devi')
    ])
    
}

task()