"use strict";

/*
// // ------------ local variables -----------

function showMessage() {
  let message = "Hello, I'm Javascript";
  alert(message);
}
showMessage();
alert(message); // ❌ the variable is only show inside the function value

// --------------- Outer variables -------------
let userName = "John";

function showMessage() {
  let message = "Hello, " + userName;
  alert(message);
}
showMessage();

// -------- can modify also -------
let userName = "John";

function showMessage() {
  userName = "Bob";
  let message = "Hello, " + userName;
  alert(message);
}

alert(userName);
showMessage();
alert(userName);

// // ------  Outer Variables ------  If a same-named variable is declared inside the function then it shadows the outer one.

let userName = "John";

function showMessage() {
  let userName = "Bob";
  let message = "Hello ," + userName;
  alert(message);
}

showMessage(); // Hello, Bob

alert(userName); // John

// // ------- Parameters --------

function showMessage(from, text) {
  alert(from + ": " + text);
}
showMessage("Ann", "Hello!");
showMessage("Ann", "What's up?");

// // -----

function showMessage(from, text) {
  from = "*" + from + "*";
  alert(from + ": " + text);
}
let from = "Ann";
showMessage(from, "Hello");
alert(from);

// // ---------- Default Values ----------
function showMessage(from, text) {
  alert(from + ": " + text);
}
showMessage("Ann");

// // -------------
function showMessage(from, text) {
  alert(from + ": " + text);
}
showMessage("Ann", undefined);

// // -------------
function showMessage(from, text = "no text given") {
  alert(from + ": " + text);
}
showMessage("Ann");

// // ----------- can be passed another function as parameter
function showMessage(from, text = anotherFunction()) {}

// // ------------- default parameter in old JS code ----------
function showMessage(from, text) {
  if (text === undefined) {
    text = "no text given";
  }
  alert(from + ": " + text);
}
showMessage("Ann");

// --- using || ---
function showMessage(from, text) {
  text = text || "no text given";
}
showMessage("Ann");

// // ----------- alternative default parameters ---------
function showMessage(text) {
  if (text === undefined) {
    text = "empty message";
  }
  alert(text);
}
showMessage();

// // ---- or

function showMessage(text) {
  text = text || "empty;";
}
alert(showMessage());

// // -------- using ?? (nullish coalescing operator)
function showCount(count) {
  alert(count ?? "unknown");
}
showCount(0); // 0
showCount(null); // unknown
showCount(undefined); // unknown

// // -------- returning a value --------
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert(result);

// // --------------
function calcAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);
if (calcAge(age)) {
  alert("Access granted");
} else {
  alert("Access denied");
}

// ------- return without a value
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  alert("Showing you the movie"); // false
}

// // ------ with an empty return or without it returns undefined
function doNothing() {}
alert(doNothing() === undefined);

// --- or
function doNothing() {
  return;
}
alert(doNothing() === undefined);

// -----------------

// functions == comments ()

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i);
  }
}
showPrimes(10);

// ------- or (break the function into smaller function)

function showPrime(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
}



// // ------ Is "else" required ? ---------

// // The following function returns true if the parameter age is greater than 18.

// // Otherwise it asks for a confirmation and returns its result:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}
alert(checkAge(19));
// Will the function work differently if else is removed?
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  return confirm("Did parents allow you?");
}
alert(checkAge(17));

// // No difference

// ----------------------
// // --- Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you");
  }
}

// // Rewrite it, to perform the same, but without if, in a single line.

// // Make two variants of checkAge:

// // Using a question mark operator ?
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you");
}
alert(checkAge(14));

// Using OR ||
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you");
}
alert(checkAge(19));

// -----------------------
// // --------- Function min(a, b) --------
// // Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

alert(min(2, 5)); // 2
alert(min(3, -1)); // -1
alert(min(1, 1)); // 1

// ------------------
// // ------- Function pow(x, n) ----------
// // Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  return x ** n;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use `);
} else {
  alert(pow(x, n));
}

*/
