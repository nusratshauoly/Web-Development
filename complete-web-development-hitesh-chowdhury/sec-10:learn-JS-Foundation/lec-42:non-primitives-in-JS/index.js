//  ------------- non primitives in javascript ------------

// ------- object ----------

// we can declare object variable with (const) and can also change inside the value cause it's a primitive value.

const userName = {
  firstName: "hitesh",
  isLoggedIn: true,
  "last name": "chimaji",
};
userName.firstName = "Mr. H";
userName.lastName = "chowdhury";
console.log(userName);
console.log(userName.firstName);
console.log(userName.lastName);
console.log(typeof userName);
console.log(userName["last name"]);

let today = new Date();
console.log(today.getDate());

// -------------- Array ---------------
let heroes = ["a", "b", "c", true];
let anotherUser = ["hitesh", true];
console.log(anotherUser[0]); // ANS: hitesh

// ------------- type conversion -------------
console.log(1 + "1");
console.log("1" + 1);

let isValue = true; // JS considers 'true' as 1 & 'false' as 0.
console.log(isValue + 1); // ans : 2

console.log(Number(isValue)); // if i want the answer as a (Number)

let isValue = "2";
console.log(typeof Number(isValue)); // convert string to a number

let isValue = "2abc";
console.log(typeof Number(isValue)); // number

console.log(Number(null)); // 0

console.log(Number(undefined)); // NaN
