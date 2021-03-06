
//there are three ways to declare a variable
// let a=10; this has a block scope
// var a=10; this has a function scope
// a=10; this has global scope
class Person {
    constructor(name, age) {
        this.name=name
        this.age=age
    }

    isAdult()
    {
        if(this.age > 18)
        return true
        else 
        return false
    }
}

let p1 = new Person('joe doe',22)
let p2 = new Person('jane doe',15)

console.log(typeof Person) //we will get function,there is no datatype called class it is implemented as a function

console.log(p1.__proto__==Person.prototype)//true
console.log(p1.__proto__.__proto__==Object.prototype)//true

class Student extends Person{
    constructor(name,age,grade) {
        super(name,age)
        this.grade=grade
    }
}



let s1=new Student('HArry Potter',15,5)
let s2=new Student('Hermoine Granger',15,6)

console.log(s1.__proto__==Student.prototype)//true
console.log(s1.__proto__.__proto__==Person.prototype)//true
console.log(s1.__proto__.__proto__.__proto__==Object.prototype)//true

//inheritance chain
//Object.prototype --> Person.prototype --> Student.prototype
//Object not--> Person not--> Student