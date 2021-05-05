


const ADJECTIVES = [
    'determined',
    'remarkable',
    'frightened',
    'emotional',
    'cool',
    'magnificent',
    'glossy'
]

const OBJECTS = [
    'mall',
    'hospital',
    'ladder',
    'grandmother',
    'girlfriend',
    'guest',
    'photo'

]

function genRandomUsername() {
     const adj = ADJECTIVES[Math.floor(Math.random()*7)]
     const obj = OBJECTS[Math.floor(Math.random()*7)]
     return `${adj}-${obj}`;
}

module.exports = {
    genRandomUsername
}
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())
// console.log(genRandomUsername())