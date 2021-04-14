let downloadpromise = function () {
    return new Promise(function(res,rej) {
        console.log("start download");
        setTimeout(function() {
            console.log("download complete");
            res();
        },3000)

    })
}

downloadpromise().then(function() {
    console.log("After ");
})
