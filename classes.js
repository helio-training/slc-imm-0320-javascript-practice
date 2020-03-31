'use strict';
// EXPLORING CLASS SYNTAX

class Person{
    // 'constructor' essentially sets up the object instance of type 'Person'
    constructor(name, age, gender = 'x', eyeColor = 'brown'){
        // 'this' refers to the details of this specific instance
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._eyeColor = eyeColor;
    }

    eat(food){
        return `${this.name} has eaten ${food}`;
    }
    sleep(){
        return `${this.name} has gone to sleep`;
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName
    }
    
    get age() {
        return this._age;
    }
    set age(ignored){
        this._age++;
    }

    get gender() {
        return this._gender;
    }
    set gender(newGender){
        if(newGender !== 'm' &&
            newGender !== 'f' &&
            newGender !== 'x'){
                throw 'Failed Gender Reassignment'
            }
        else {
            this._gender = newGender;
        }
    }
}

// Creating a new Instance of Person given the values provided
const wes = new Person('Wes', 36, 'm', 'blue');
// Function calls on the Person instance
console.log(wes.eat('Apple'));
console.log(wes.sleep());
// Getters and Setters are accessed like Properties not Functions
console.log("Wes' age", wes.age);
wes.age = 45;
console.log("Wes' age", wes.age);
console.log("Wes' starting gender", wes.gender);
wes.gender = 'x';
console.log("Wes' new gender", wes.gender);

// Demoing unique instances
const mike = new Person('Mike', 34, 'm');
console.log("Mike's age", mike.age);
console.log("Wes' age", wes.age);
mike.age = 65;
console.log("Mike's age", mike.age);
console.log("Wes' age", wes.age);
console.log(wes);
console.log(mike);