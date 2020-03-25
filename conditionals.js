// EXPLORING SWITCH CONDITIONALS

let isRunning = true;
// let isRunning = false;
// let isRunning;
switch(isRunning){
    case true:
        isRunning = false;
        break;
    case false:
        isRunning = true;
        break;
    default:
        isRunning = 'undefined!'
}
console.log('Running is', isRunning);


// EXPLORING IF/ELSE CONDITIONALS

// Two branches in your code with If/Else
const votingAge = 18;
// let myAge = 34;
// let myAge = 18;
let myAge = 8;
if (myAge >= votingAge) { // Here is the Condition check
    // if condition is TRUTHY ran this code
    console.log('I can vote!');
} else {
    // if condition is FALSEY ran this code
    console.log('I am not able to vote');
}

// Multiple branches in your code with If/Else-if
const wantsSugar = true;
const wantsCream = true;
// Evaluating the booleans for later condition checking
const combo = wantsCream && wantsSugar;
if(combo){
    console.log(`Here's your coffee with Cream and Sugar`)
} else if(wantsSugar){
    console.log(`Here's your sweet coffee`)
} else if(wantsCream){
    console.log(`Here's your creamy coffee`)
} else {
    console.log(`Your black coffee is ready`)
}

