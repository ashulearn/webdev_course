function Person(name,age) {
    this.name=name
    this.age=age
}

Person.prototype.isAdult = function () {
    return this.age>=18
}
Person.prototype.city = 'Delhi'
let p = new Person('Harry Potter',15)
let p2 = new Person('John Doe',30)

console.log(p.isAdult())
console.log(p2.isAdult())
console.log(p.__proto__==p2.__proto__)
console.log(p.__proto__)  //both are inheriting from a class functoin named Person.prototype
