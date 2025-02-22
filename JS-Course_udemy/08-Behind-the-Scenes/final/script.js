'use strict';

// /////////////////////////////////////////
// vid - 94 : Scope and the scope chain

// * Scoping: How our program's variables are organized and accessed by the javascript engine " Where do variables live? or where can we access a certain variable, and where not?"

// * lexical scoping: Scoping is controlled by placement of functions and blocks in the code. rules of where we can access variables are based on exactly where in the code functions and blocks are written

// * Scope: Space or environment in which a certain variable is declared(variable environment in case of functions). There is global scope, function scope and block scope.

// * Scope of a variable : Region of our code where a certain variable can be accessed.

// * scope chain: Every scope always has access to all the variables from all its outer scopes. This is the scope chain

//* When a variable is not in the current scope, the engine looks up in the scope until it finds the variable it's looking for. This is called variable lookup

// * the scope chain is a one way street: a scope will never, ever have access to the variables of an inner scope

// * { inner scope/ child scope always look for variable of outer scope or parent scope but it will never happen that outer scope/parent scope  will look for in inner scope/child scope }

// * the scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes

// * The scope chain has nothing to do with the order in which functions were called. It does not effect the scope chain at all!

// ------ 3 Types of Scope -------

// ------ Global Scope ---------

const me = 'Jonas';
const job = 'teacher';
const year = 1989;
/*
-- Outside of any function or block
-- Variables declared in global scope are accessible everywhere (in function & block scope also)

*/

//------- Function Scope -------
function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}
console.log(now); // ReferenceError
/*
  -- Variables are accessible only inside function, NOT outside
  -- Also called local scope
  -- var is a function scope
*/

// -------- Block Scope (ES6) ---------
if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food = 'Avocado toast';
} // ← (example: if block, for loop block etc.)

console.log(millenial); // ReferenceError
/*
-- Variables are accessible only inside block (block scoped)
-- However, this only applies to let and const variables
-- Functions are also block scoped (only in strict mode)
*/

// ---------- scope chain vs call stack -------
const a = 'Jonas';
first();

function first() {
  const b = 'Hello!';
  second();

  function second() {
    const c = 'HI!';
    third();
  }
}

function third() {
  const d = 'Hey!';
  console.log(d + c + b + a); // referenceError => here we can find value od (d = its inside this function scope, a = its a global scope) but can't access the value of (c => its in another function scope, b => it's in the child function of another outer parent function) that's why it's a reference error
}

///////////////////////////////////////
// vid - 95: Scoping in Practice

function calcAge(birthYear) {
  // (calcAge) is in global scope
  const age = 2037 - birthYear;

  function printAge() {
    // function scope
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas'; // global variable
calcAge(1991); // call the (global scope) function
// console.log(age);
// printAge();

///////////////////////////////////////
// vid - 97: Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

///////////////////////////////////////
// vid - 99: The this Keyword in Practice
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();

///////////////////////////////////////
// vid - 100: Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);

///////////////////////////////////////
// vid - 102: Object References in Practice (Shallow vs. Deep Copies)

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = jessica1;
// marriedJessica.lastName = 'Davis';

console.log('Before:', jessica1);
console.log('After:', marriedJessica);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  familiy: ['Alice', 'Bob'],
};

// Shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = 'Davis';

// jessicaCopy.familiy.push('Mary');
// jessicaCopy.familiy.push('John');

// console.log('Before:', jessica);
// console.log('After:', jessicaCopy);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.familiy.push('Mary');
jessicaClone.familiy.push('John');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);
