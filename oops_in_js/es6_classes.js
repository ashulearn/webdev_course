//this is a syntactical sugar added in ES6 
// internally work is done for function only
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }

}

let p = new Person('Harry Potter' , 15)
console.log(typeof Person)
//we can now extend classes

class Student extends Person{

}
let s=new Student('ROb Percival',16)
console.log(s.name)