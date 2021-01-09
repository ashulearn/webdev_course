const fs= require('fs')

fs.writeFile(__dirname+'/myfile.txt',"Hi my naem is Ashu",function (err) {
    if(err) throw err

    console.log("file written")
})
//last function is a callback function where we get error as an arg.
