'use strict';
// EXPLORING BUILT-IN JAVASCRIPT OBJECTS

// What kind of objects are Built-In?
console.log(Date.now());
console.log(Math.PI);
console.log(Math.min());
console.log(Math.max());

// What properties exist on console?
console.error('This message is bad!!!');
console.table([{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3, z:5 }]);
console.log([{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]);

// EXPLORING OBJECT SYNTAX, JSON - JavaScript Object Notation

// JSON is Comma Separated Key:Value Pairs
// Sometimes you might see the Key as a string, in JSON files it is needed
const personOne = { 
    'firstName': 'Tom',
    'lastName':  'Hanks',
    'age': 63,
    // Using 'function' Reserved word to enable 'this'
    'sayName': function () { console.log("Hello, I'm", this.firstName, this.lastName); }
}
// In a JavaScript file the Key doesn't need to be a string
const personTwo = {
    firstName: 'Tim',
    lastName: 'Allen',
    age: 66,
    // Escaping the single quote using a '\' instead of double quotes (like above)
    sayName: function () { console.log('Hello, I\'m', this.firstName, this.lastName); }
}
console.table([personOne, personTwo]);
personOne.sayName();
personTwo.sayName();
personTwo.firstName = "Mike";
personTwo.lastName = 'Corey';
personTwo.sayName();