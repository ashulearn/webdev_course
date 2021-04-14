function outer(arg1) {
    let var1=10
    function inner(arg2) {
        let var2=20

        console.log(arg1,var1,arg2,var2)
    }

    return inner
}

let x=outer('param1')

x('param2')

// here we are able to access the arg1 and var1 from outside the function becaues we are calling the inner function by storing it in x 
// we are able to access these bacause of closure scope 
// CLOSURE SCOPE :-
// Where the funtion is born all the scope available at the birth place of function is captured by the function this is called 
// closure scope.This can be infinitely nested meaning inner captures the scope of outer as well as script and the variables can be shadowed in this.
