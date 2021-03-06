console.log(alpha())


function alpha() {
    return "a";
}
console.log(alpha())
function beta() {
    return "b"
}
// here we see that the func alpha is calld before it defined in javascript we can call whenever we want because while running 
// all the functions are moved to top
// this is called javascript hoisting

// functions can also be defined like below but there hoisting doesn't work

let gamma = function () {
    return "c"
}

// POLYMORPHISM 

function area(height,widht) {
    if(widht === undefined)
    return Math.PI*height*height
    
    return height*widht
}

console.log(area(3,4))
console.log(area(4))
// in javascript we can call the function with less arguments because it has dynamic typechecking the arguments which are not defined
// are considered undefined and we can use this for implemnting polymorphism


// higher order functions : 
// when we can pass a function or return a function inside afunction then it is called a higher order function

function createGreet(greeting) {

    function greet(name) {
        console.log(greeting,name)
    }

    return greet
}

function getName() {
    return document.getElementById("namebox").value
}

let g1= createGreet('good morning')
let g2= createGreet('good evening')

console.log(typeof g1)


