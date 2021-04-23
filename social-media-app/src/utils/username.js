

const ADJECTIVES = [
    'funny',
    'smoggy',
    'zealous',
    'sudden',
    'rapid',
    'vulgar',
    'adaptable'
]
const OBJECTS = [
    'Nightgown',
    'Banjo',
    'Piano',
    'Spoons',
    'twister',
    'toothpaste',
    'wallet'
]

function generateRandomUserName() {
    let username = ADJECTIVES[parseInt(Math.random()*7)] +'-'+ OBJECTS[parseInt(Math.random()*7)]
    return username
}

exports = module.exports = {
    generateRandomUserName
}