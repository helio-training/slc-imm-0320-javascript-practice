// EXPLORING FUNCTION SYNTAX

function counter (x){
    const result = x + 1;
    return result;
    // return x + 1; // Same as above, more efficient because no extra variable
}
let count = 0;
count = counter(count);
count = counter(count);
count = counter(count);
console.log('count', count); // 3

// Two Variable Declarations and Definitions
const x = 10;
const y = 5;
// Variable Declaration
let result;
// Adding two values together, differently scoped x & y variables as parameters
function add(x, y = 1){ return x + y; }
// Variable Definition
result = add(x, y); 
console.log('First result', result); // 15
// Redefining a Variable
result = add(result);
console.log('Second result', result); // 16
// Redefining a Variable
result = add(x);
console.log('Third result', result); // 11

// More advanced add function, uses rest operator & [].reduce() & Arrow Syntax function
function addition(...numbers){
    return numbers.reduce((result, num) => { return result + num }, 0);
}
let output = addition(1, 2, 3, 4, 5); // 15, numbers = [ 1, 2, 3, 4, 5 ]
console.log('First output', output);
output = addition(5, 5, 5, 5); // 20, numbers = [ 5, 5, 5, 5 ]
console.log('Second output', output);


// EXPLORING ARROW SYNTAX

// No parameters, single line, not unique to Arrow Syntax
const hello = () => { console.log('Hello World'); }
hello();

// Syntactic Sugar of a full Arrow Syntax, is unique to Arrow Syntax
// Only works with one parameter, one expression, and auto returns the evaluate expression
const arrowCounter = x => x + 1;
// Desugared
// const arrowCounter = (x) => { return x + 1; }
let arrowCount = 0;
arrowCount = arrowCounter(arrowCount);
arrowCount = arrowCounter(arrowCount);
arrowCount = arrowCounter(arrowCount);
console.log('Arrow Count', arrowCount); // 3

// Passing Functions as Variables, not unique to Arrow, AKA Callback Function
const consumeFunction = (func, counter) => { return func(counter + 1); }
// Nesting calls without declaring Variables
console.log('Functions as Variables', 
    consumeFunction(arrowCounter, arrowCount)); // 5