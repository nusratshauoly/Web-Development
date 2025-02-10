// primitive

// every primitive data type can become non-primitive or object/function/array data type

/*
- string
- boolean
- number
- null
- undefined
- symbol
*/

// Non-primitive

/*
- objects
- array
- functions
*/

// 1. Number =
let balance = 123;
let anotherBalance = new Number(120); //(new Number) is not directly usable

console.log(balance);
console.log(anotherBalance.valueOf());
console.log(typeof balance);

// 2. Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// 3. undefined
let firstName;
console.log(firstName);

let lastName = undefined;
console.log(lastName);

// 4. null
let firstName = null;
console.log(firstName);

// 5. string
let myString = "hello";
let myStringOne = "Hola";
let userName = "hitesh";

let oldGreet = myString + " " + "hitesh";
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;
console.log(greetMessage);

let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

// 6. symbol

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");
console.log(sm1);

console.log(sm1 == sm2);

// -------- symbol mdn javascript --------

/*

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol 

*/
