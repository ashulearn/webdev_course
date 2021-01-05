//Promises are used to make call backs in the original function we return a new Promise which has an
// function with parameter resolve and reject resolve is called when every thing is fine and reject is
//  called when we get an error, we can also use async and await for the same thing 



function helloSayer(times,name,) {
    return new Promise((resolve,reject) => {
        let count =0
        let loopId = setInterval(()=> {
            count++;
            console.log('Hello',name)

            if(count===times){
                clearInterval(loopId)
                resolve()
            }
            

            resolve()
        },100)
    })
}

helloSayer(2,'Ashu')
.then(()=>helloSayer(3,'Aman'))

