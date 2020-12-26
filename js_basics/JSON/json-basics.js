// ways to create an object in js

// one way
var apple = {
    taste : "sweet",
    color : "red"
}

//another way

function fruit(taste,color) {
    this.taste=taste
    this.color=color
}

let mango = new fruit("sweet","yellow")

//another way using class keyword

class fruitClass {
    constructor(color,taste) {
        this.color=color
        this.taste=taste
    }
}

let kiwi = new fruitClass("sour","green")