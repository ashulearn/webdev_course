//Answer in context to C++/JAVA
/* what is 'this' keyword, what does it refer to ? 
   where we cannot use 'this' keyword ?
   
Ans1:- This keyword is used to refer to the current instance of the class. It can be used to acess any property to the 
current object.

Ans2:- We cannot use this keyword in the main function or in static classes.  
   
in js 'this' keyword works quiet differently.
   */

function CheckThis() {
    console.log(this)
}

let obj = {
    a: 10,
    b: 'acdsc',
    c: true,
    d: function () {
        console.log(this)
    },
    e: {
        l:256,
        m:'dsvfs '

    }
}

obj.d()
// here this keyword is called from inside object obj so, when we print this keyword it prints the object 

let x=obj.d
x()
/* here the funtion is stored in x and caleed from widow so 'this' points to window */

//this jisse call hota hai usko pi=oint karta hai
