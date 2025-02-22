"use script";
/*
alert(5 % 2); // % remainder

// exponentiation (**)

alert(2 ** 2); //  2² = 4

alert(4 ** 1 / 2); // 1/2 to √2
alert(9 ** 1 / 3); // 1/3 = √3

// string concatenation with binary +
let s = "my" + "string";
alert(s);

//  In '+' number converts to string
alert("1" + 2); // '12'
alert(2 + "1"); // '12'

alert(2 + 2 + "1"); // "41"
alert("1" + 2 + 2); // "122"

// In '-' and '/' string converts to number
alert(6 - "2"); // 4
alert("6" / "2"); // 3

//  unary + => doesn't do anything to numbers but if the operand is not number, it converts it to numbers

// no effect on numbers
let x = 1;
alert(+x); //1

let y = -2;
alert(+y); //-2

// converts non-numbers
alert(+true); // 1
alert(+""); // 0

// adding strings
let apples = "2";
let oranges = "3";
alert(apples + oranges);

// convert string to Number
let apple = "3";
let orange = "4";

alert(+apple + +orange); // 7

// can be write as this
alert(Number(apple) + Number(orange));

// ---------------- assignment operator -----
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

//

let counter = 1;
alert(2 * ++counter); // 4

let counter1 = 1;
alert(2 * counter1++); // 2

*/

/*

// post fix and prefix forms
let a = 1,
  b = 1;

let c = ++a;
let d = b++;

alert(++a);
alert(b++);
alert(a);
alert(b);
c = 2;
d = 1;

*/

/*
// 2nd task
let a = 2;
let x = 1 + (a *= 2); // 1 + (2 *= 2) => 1 + 4 => 5
alert(x);
*/

/*
// -------- type conversions ----------
alert("" + 1 + 0); // "10"
alert("" - 1 + 0); // -1
alert(true + false); // 1
alert(6 / "3"); // 2
alert("2" * "3"); // 6
alert(4 + 5 + "px"); // "9px"
alert("$" + 4 + 5); // "$45"
alert("4" - 2); // 2
alert("4px" - 2); // NaN
alert("  -9  " + 5); // " -95"
alert("  -9  " - 5); // -9 - 5 => -14
alert(null + 1); // 1
alert(undefined + 1); // NaN
alert(" \t \n" - 2); // - 2

*/

/*
// ------------- fix the addition ------------
let a = Number(prompt("first number?", 1));
let b = Number(prompt("Second number?", 2));
alert(a + b);

// or
let a = +prompt("first number?", 1);
let b = +prompt("Second number?", 2);
alert(a + b);

// or
let a = +prompt("first number?", 1);
let b = +prompt("Second number?", 2);
alert(+a + +b);
*/
