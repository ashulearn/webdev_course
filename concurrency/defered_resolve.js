function downloadPromise () {
    return new Promise(function (resolve,reject) {
        console.log('Starting download')
        setTimeout(function () {
            console.log('DOwnloaded file')
            resolve()
        },3000)
    })
    
}

let downloadedFile = downloadPromise()

setTimeout(function () {
    downloadedFile.then(function() {
        console.log('after download')
    })
},5000)


