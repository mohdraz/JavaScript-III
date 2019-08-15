/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windowl/Global Object, the value of this key word will the window as it's the global
* 2. implicit binding, in which this ties to the object which is before dot
* 3. new bindins, it's when construction function is used
* 4.  explicit, when call or apply method is used to explicity bind this
*
* write out a code example of each explanation above
*/

// Principle 1 

// code example for Window Binding

console.log(this);
function sayGlobal(name) {
    console.log(this);
    return name;
}

sayGlobal('raza');

// Principle 2

// code example for Implicit Binding

const mySample = {
    greeint: 'Hello', 
    sayHello: function(name) {
        console.log(`${this.greeint} my name is ${name}`);
    }
}

mySample.sayHello('Raza');


// Principle 3

// code example for New Binding

function Person(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.speak = function() {
        console.log('This new binding', this);
        return `Hello, my name is ${this.name}, and I am ${this.age} years old!`;
    }
}

const raza = new Person({name: 'Raza', age: 29});
const mark = new Person({name: 'Mark', age: 27});

console.log(raza.speak());
console.log(mark.speak());

// Principle 4

// code example for Explicit Binding

raza.speak.call(mark);
mark.speak.apply(raza); 