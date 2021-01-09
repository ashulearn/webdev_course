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
            setTimeout( ()=> {//fake 3sec resize task
                let resizedFile = filename.split(".")[0] + "-resized.png"
                resolve(resizedFile)
            },3000)
        }
    })
}

download("ftp://ashu.com/img.png")
        .then(resize)
        .then(function (resizedFile) {
            console.log("the final file is at " + resizedFile)
        })
        .catch(function (err) {
            console.error(err)
        })
        //inaces of promises we can put a single catch block which can handle error in all then functions