// prob -1: checking if a number is greater than another number

let num1 = 5;
let num2 = 8;
console.log("I am regular upper code");

if (num1 > num2) {
  console.log("num 1 is greater than num2");
} else {
  console.log("Nope, num1 is not greater");
}
console.log("I am regular bottom code");

//prob - 2: checking if a string is equal to another string:
let userName = "chai";
let anotherUserName = "chai";

if (userName == anotherUserName) {
  console.log("pick another username");
}

// prob - 3 : checking if a variable is a number or not
// let score = 44;
let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

// prob - 4 : checking if a boolean value is true or false
let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is not ready");
}

// prob - 5 : checking if an array is empty or not
let items = [];
console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not impty");
}
