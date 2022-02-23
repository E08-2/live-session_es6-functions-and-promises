// * ES6 FUNCTIONS - REVISION

// ES5 function declaration
function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello("Bob");

// ES6 function declaration
// declare  name    parameter(s)
const sayHelloES6 = name => {
    console.log(`Hello ${name}!`);
}

sayHelloES6("Bobby");

// ===============================

// We can also make the ES6 function smaller by keeping it to one line...
// If the ES6 function is in one line, it will return any value after the arrow => automatically
// But if you use an ES6 function with curly braces, you still need the "return" keyword!

// If using curly braces, we have to use the "return" keyword to get a return value
const addOneToNumber = num => {
    return num + 1;
}

// If using a single line function, will automatically return the value after =>
// In fact, we cannot use the "return" keyword in a single line ES6 function
const addTwoToNumber = num => num + 2;

console.log(addOneToNumber(5));
console.log(addTwoToNumber(5));