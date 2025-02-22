"use strict";

/*
// --------- || (or operator) ----------
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed");
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert(firstName || lastName || nickName || "annoymous");

let firstName = "";
let lastName = "";
let nickName = "";

alert(firstName || lastName || nickName || "annoymous");

alert(1 && 2 && null && 3);

alert(1 && 2 && 3);

*/

/* 
// ---------------- task ------------------

// wha's the result of OR?
alert(null || 2 || undefined); // 2

// what's the result of OR'ed alerts?
alert(alert(1) || 2 || alert(3)); // 1 , then 2

// what is the result of AND?
alert(1 && null && 2); // null

// what's the result of AND'ed alerts?
alert(alert(1) && alert(2)); // 1, then => undefined

// the result of OR AND OR
alert(null || (2 && 3) || 4); // 2 && 3 => 3 => null || 3 || 4 => 3

// check the range between
let age;
if (age >= 14 || age <= 90);
if (!(age >= 14 || age <= 90));
if (age < 14 || age > 90);
if (-1 || 0);
if (!(age >= 14 && age <= 90));
// check the range outside

//  Aquestion about "if"

if (-1 || 0) alert("first"); // -1 => first

if (-1 && 0) alert("second"); // 0 => won't run

if (null || (-1 && 1)) alert("third"); // null || 1 => 1 => third

*/

/*
// ----------- check the login ------------

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let userName = prompt("Who's there?");
if (userName === "Admin") {
  let pass = prompt("Password?");

  if (pass === "TheMaster") {
    alert("welcome");
  } else if (pass === "" || pass === null) {
    alert("cancelled");
  } else {
    alert("Wrong Password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don’t know you");
}

*/
