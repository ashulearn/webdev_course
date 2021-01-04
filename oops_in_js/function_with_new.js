// function Person(name,age) {
//     this.name = name
//     this.age = age
//     return 10
// }

// let p = Person('Harry Potter',15)
// console.log(p)
// console.log(name)
// console.log(age)

// Output::
// 10
// Harry Potter
// 15

function Person(name,age) {
    this.name = name
    this.age = age
    return 10
}

let p=new Person('Harry Potter',18)
console.log(p)
//when we use the new keyword then the return statement is ignored and an object is returned to p
