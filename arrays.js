// EXPLORATION OF ARRAYS

// Simple Array Syntax
const myArray = [ 'Wes', 'Alex', 'Carson', 'John', 'Josh' ];
let index = 2;
console.log(myArray);
myArray[index] = myArray[2].toUpperCase();
console.log(myArray);

// Looping over an Array using a changing Index
for(let i = 0; i < myArray.length; i++){
    console.log(`Name at index:${i} is`, myArray[i]);
}

// Adding to the end of an Array
myArray.push('Mike');
console.log(myArray);

// To further practice look into: .pop(), .shift(), .unshift(), .join()

// Removing from the end of an Array
const mike = myArray.pop();
console.log(mike);

// Removing from the front of an Array
const wes = myArray.shift();
console.log(wes);
console.log(myArray);

// Adding to the front of an Array
myArray.unshift('Amy');
console.log(myArray);

// Converting our Array to a String
const names = myArray.join(', ');
console.log(names);

// Combining two Arrays
const academics = [ mike, wes ];
const fullClass = myArray.concat(academics);
console.log(fullClass);
console.log(academics);
console.log(myArray);