let str = 'adss'                        //3 level from null
let num=6543                            //3 level from null
let boolean = true                      //3 level from null
let arr = [1,2,3]                       //3 level from null            
let obj = {
    a: 10,                              //2 level from null
    b:'asdc'
}
let fun = function () {                 //3 level from null 
    console.log('yay!')
}

// if x and y are not primitive
// x == y : true <- what does this means
//this means both refer to the same object in memory

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Boolean)
console.log(typeof Number)
console.log(typeof Object)
console.log(typeof Function)

//__proto__ is a hidden pointer which points to the blueprint from which it was created and prototype is the
// blueprint 
console.log(str.__proto__.__proto__==obj.__proto__)
console.log(num.__proto__.__proto__==obj.__proto__)
console.log(boolean.__proto__.__proto__==obj.__proto__)
console.log(arr.__proto__.__proto__==obj.__proto__)
console.log(fun.__proto__.__proto__==obj.__proto__)

//Everything indirectly inherits from the same thing 
//obj is inherited from
//i.e. in javascript everything is an object
console.log('======= prototypes =========')
console.log(str.__proto__==String.prototype)
console.log(num.__proto__==Number.prototype)
console.log(boolean.__proto__==Boolean.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(fun.__proto__==Function.prototype)

//String.prototype inherits from Object.prototype
// when we do typeof Object.create(Boolean.prototype) it will give us object 
// and when we do type of bool we get boolean but both of them inherits from Boolean.prototype