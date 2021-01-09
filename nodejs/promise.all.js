//using promise.all we can do tasks parallely


function download (url) {
    return new Promise((resolve,reject) => {
        if(!url.startsWith("http")) {
            reject(new Error("url is incorrct"))
        }
        else {
            console.log("download started")
            setTimeout(() => {
                let filename = url.split('/').pop()

                resolve(filename) 
            },3000)
        }
    })
}

function resize (filename) {
    return new Promise( (resolve,reject) => {
        if(!filename.endsWith("png")) {
            new Error("image is not png")
        }
        else {
            console.log('resize started')
            setTimeout( ()=> {//fake 3sec resize task
                let resizedFile = filename.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}
function upload (resizedFile) {
    return new Promise((resolve,reject) => {
        setTimeout(function () {
            let uploadUrl = 'http://www.imgur.com' + resizedFile
            resolve(uploadUrl)
        },3000)
    })
}
Promise.all([
    download('http://cb.lk/logo.png'),
    download('http://cb.lk/banner.png'),
    download('http://cb.lk/promo.png')

]) .then( function (values) {
    console.log(values)
    return Promise.all(
        values.map(resize)
    )
}).then((values)=> {
    console.log(values)
}).catch((err) => {
    console.error(err)
})