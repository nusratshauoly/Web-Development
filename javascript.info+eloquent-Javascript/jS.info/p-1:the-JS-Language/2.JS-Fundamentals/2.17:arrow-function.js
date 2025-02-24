"use strict";

/*
let sum = (a, b) => a + b;

alert(sum(2, 3));

// ------- without arrow function -------

let sum = function(a, b) {
    return a + b;
}

// -----

let double = (n) => n * 2;
alert(double(3));

// -----
let sayHi = () => alert("Hello");

alert(sayHi());

// ---------- arrow function can be used as a function expression
let age = prompt("what is your age", 18);

let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings");

welcome();

// -------------- multiline arrow function

let sum = (a, b) => {
  let result = a + b;
  return result;
};

alert(sum(1, 2)); // 3

// ----------------- task : Rewrite with arroe function --------------

// Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

//   -------- solve it as a arrow function

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

*/
