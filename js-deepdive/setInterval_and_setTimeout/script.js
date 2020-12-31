//setTimeout is used to call a function after a particular interval of time
//setInterval is used to call a function after every particualr time interval

console.log("time starts..")
function myfunc(){
    if(runCount>5){
        clearInterval(intervalId)
    }
    runCount++;
    console.log("Helo!")
}
setTimeout(myfunc,1000)

var intervalId;
let runCount=0;
intervalId = setInterval(myfunc, 1000);
//we can stop setInterval by calling clearInterval


//var has a functional scope where as let has a block scope

//in js every thing which is passed in function in is copy by value there is no copy by reference
//
