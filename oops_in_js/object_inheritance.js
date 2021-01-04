//in js we donot have classes they are functions so in js we can inherit directly from objects

let a= {
    p:'dscs',
    q:1651,
    r:true
}

let b=Object.create(a)
console.log(a)
console.log(b)
console.log(a.p)
console.log(b.p)
//we get same ans because b is chid of a
b.q='cdscs'
console.log(b.q)
//here q becomes new property in b and the previous value is hidden

