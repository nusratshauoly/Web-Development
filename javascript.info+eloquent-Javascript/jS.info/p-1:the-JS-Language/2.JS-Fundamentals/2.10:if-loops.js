"use strict";

/*
let year = prompt("In which year was javascript created?");
if (year == 2015) {
  alert("You guessed it right!");
} else {
  alert("How can you be so wrong?");
}

let year = prompt("In which year the javascript was created?");

if (year < 2015) {
  alert("Too Early...");
} else if (year > 2015) {
  alert("Too late...");
} else {
  alert("exactly...");
}


// ----------------- conditional operator ------------------

let accessAllowed;
let age = prompt("How old r you?", "");

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);



let age = 28;
let accessAllowed = age > 18 ? true : false;

console.log(accessAllowed);


// --------------- multiple ? --------------

let age = prompt("age?", 18);

let message =
  age < 3
    ? "Hi, baby!"
    : age < 18
    ? "Hello"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";
alert(message);



let age = prompt("enter your age!");

if (age < 3) {
  alert("Hi baby");
} else if (age < 18) {
  alert("Hello!");
} else if (age < 100) {
  alert("Greetings");
} else {
  alert("What an unusual age!");
}



// ----------- Non- traditional use of '?'
let company = prompt("which company created javascript", "");

company == "Netscape" ? alert("Right") : alert("Wrong");

*/

/*
// ------------------- task -----------------
if ("0") {
  alert("Hello");
}

// Any string except an empty one (and "0" is not empty) becomes true in the logical context.

// ------- the name of javascript ----------

let officialName = prompt(`What is the “official” name of JavaScript?`);

if (officialName == "ECMAScript") {
  alert("Right");
} else {
  alert("You don't Know?");
}

// --------- show the sign ----------

let numberValue = prompt("enter a number");

if (numberValue > 0) {
  alert(1);
} else if (numberValue < 0) {
  alert(-1);
} else {
  alert(0);
}

// ---------- rewrite 'if' into '?' ---------
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let a = prompt("a");
let b = prompt("b");
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

// ---------- rewrite 'if..else' into '?' -----------

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt("enter login");
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";

console.log(message);

*/
