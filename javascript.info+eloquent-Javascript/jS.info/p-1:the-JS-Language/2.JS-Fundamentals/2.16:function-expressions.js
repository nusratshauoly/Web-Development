"use strict";
/*
// -------- function is a value

function sayHi() {
  alert("hello!");
}
alert(sayHi);

// --------
function sayHi() {
  alert("Hello");
}
let func = sayHi;

func();
sayHi();

// // ------------- function expression -------

let sayHi = function () {
  alert("Hello");
};
let func = sayHi;
alert(func);

// // ------------ callback function ---------
function ask(question, yes, no) {
  if (confirm(question)) {
    return yes();
  } else {
    return no();
  }
}

function showOk() {
  alert("You agreed");
}

function showCancel() {
  alert("You canceled the execution");
}

// ask("Do you agree", showOk, showCancel);

// // --------- function expression --------------

function ask(question, yes, no) {
  if (confirm(question)) {
    return yes();
  } else {
    return no();
  }
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed");
  },
  function () {
    alert("You canceled the execution");
  }
);

// // ----------- function expression vs function declaration ------------

// // ----- function declaration -----

function sum(a, b) {
  return a + b;
}
 sum(2, 3);

// // ------- function expression -------

let sum = function (a, b) {
  return a + b;
};
alert(sum(2, 3));

// // // // A Function Declaration can be called earlier than it is defined.

alert(sayHi("John")); // Hello, John

function sayHi(name) {
  alert(`Hello, ${name}`);
}

// // A Function Expression is created when the execution reaches it and is usable only from that moment

alert(sayHi("John")); // Hello, John

let sayHi = function (name) {
  alert(`Hello, ${name}`);
};

// // --------------  In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

let age = prompt("What is your age", 18);

if (age < 18) {
  function welcome() {
    alert("Hello");
  }
} else {
  function welcome() {
    alert("greetings");
  }
}
welcome();

// // ------- another example of function declaration
let age = 16;

if (age < 18) {
  welcome(); // runs

  function welcome() {
    alert("Hello");
  }
  welcome(); // runs
} else {
  function welcome() {
    alert("Greetings");
  }
}
alert(welcome()); // won't run

// // ------- another example of function expression
let age = prompt("What is your age", 18);
let welcome;

if(age < 18){
    welcome = function(){
        alert("Hello");
    };
}
else{
    welcome = function(){
        alert("Greetings");
    };
}
welcome();

// // ----- or => using (?) ternary operator:
let age = prompt("What is your age", 18);

let welcome =
  age < 18
    ? function () {
        alert("Hello");
      }
    : function () {
        alert("Greetings");
      };

welcome();


*/
