"use strict";

/*
// when comparing JS converts the string to number
alert("2" > 1); // true : cause when compparing '2' becomes 2
alert("01" == 1); // true : '01' becomes 1

// for boolean true is 1 and false in 0
alert(true == 1); // true
alert(false == 0); // true

// A funny consequence
// It is possible that at the same time:

// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.
let a = 0;
alert(Boolean(a)); // false : 0 is a falsy value

let b = "0";
alert(Boolean(b)); // true: "0" here string is a non empty value thats why its true

alert(a == b); // true : in comparison string converts in number. so b will be number '0' => 0.

// strict equality
alert(0 === false); // false : cause in strict mode 0 can't equal to false

alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true

alert(undefined > 0); // undefined when > / < it converts undefined into NaN
alert(undefined < 0); // undefined
alert(undefined == 0); // undefined  ; when equal undefined turns into null

alert(5 > 4); // true
alert("apple" > "pineapple"); // false
alert("2" > "12"); // false  -- dictionary comparison, first char "2" is greater than the first char "1".
alert(undefined == null); // true
alert(undefined === null); // false
alert(null == "\n0\n"); // false  -- null only equals undefined.

alert(null === +"\n0\n"); // false  --- Strict equality of different types.

*/
