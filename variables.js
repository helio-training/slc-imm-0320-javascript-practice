// 'var', 'const', 'let Walkthrough & Examples

// Want to avoid using 'var'
var count = 0;
// count = 0 before the next line
count = count + 1;
// count = 1 before the next line
count = count + 1;
// count = 2 before the next line
count = count + 1;
console.log('count equals', count)

// 'const' can't be reassigned, start with 'const' and ask, 'Will this Change?'
const constant = 'Hello World'
// constant = 6 // Won't work
console.log('constant equals', constant)

// Variables with 'let' can change
let time = new Date()
console.log('First time', time)
// 'let' can be reassigned a new value, that value is an object
time = { date: new Date() }
console.log('Second time', time)

// BLOCK SCOPE Walkthrough & Examples

{
    var exposed = 'Hi'
    let hidden = 'Good bye'
    console.log(hidden)
}
console.log(exposed)
// console.log(hidden) // At this scope hidden is not defined
