"use strict";

/*

let a = 2 + 2;

switch (a) {
  case 3:
    alert("too small");
    break;
  case 4:
    alert("Exactly");
    break;
  case 5:
    alert("Too big");
    break;
  default:
    alert("I don't know such values");
}

// ----------- switch and case allow arbitrary expression

let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this allows, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
}

// --------- Grouping of "Case":

let a = 3;

switch (a) {
  case 4:
    alert("Right!");
    break;

  case 3:
  case 5:
    alert("Why don't you take a math class?");
    break;

  default:
    alert("The result is strange. really");
}

// ------- type matters ------
let arg = prompt("Enter a value?");
switch (arg) {
  case "0":
  case "1":
    alert("One or Zero");
    break;

  case "2":
    alert("Two");
    break;

  case "3":
    alert("Never executes!");
    break;

  default:
    alert("An unknown value");
}

//-------- Rewrite the "switch" into an if

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// let browser = prompt("enter the variable");

if (browser == "Edge") {
  alert("You've got the Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// -------- ReWrite "if" into "Switch"
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2, 3");
    break;
}


*/
