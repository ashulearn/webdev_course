let obj1 = {
    a:10,
    b:'scfcs'
}

let obj2 = Object.create(obj1) //this is called inheritance (prototype inheritance)

/* obj2.a -> it will try to find a in obj2
          ->if not found
          ->it will find in obj2.__proto__
          ->if not found
          ->it will find in obj2.__proto__.__proto__
          ->till it becomes null 
*/
// if we make a variable of name a in obj2 then it will shadow the variable in obj1 