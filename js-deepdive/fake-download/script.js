function fakeDownlaod (correct) {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            let downlaodedData = "some web data";
            if(correct)
            resolve(downlaodedData);
            else
            reject(new Error("ABe ja na"))
        },1000);
    });
};
fakeDownlaod(true).then(function (data) {
    console.log("The data downloaded is :");
    console.log(data);
}).catch(function (err) {
    console.log(err);
})
