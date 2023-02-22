// 1.

// the is a single comment.
/*
  this is a multiline comment.
*/
var number = "beautiful";
number = 8;

let ourName = "freecodecamp";
ourName = "free";

const pi = 3.1416;
// assigning a value of one variable to another
 var a;
  a = 7;
  var b;
  b = a;
  console.log(b);


// initializing a value;
var a = 9;

// declare string variables


// uninitializd value
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a);
console.log(b);
console.log(c);

// case sensivity

// add
const sum = 10 + 10;
console.log(sum);
// subtraction
const difference = 45 - 33;
console.log(difference);
// multiplication
const product = 8 * 10;
console.log(product);

// divide
const quotient = 66 / 33;
console.log(quotient);

// increment a number
let myVar = 87;
// myVar = myVar + 1;
myVar++;
console.log(myVar);

// decrement a number
let myVar = 11;
// myVar = myVar - 1;
myVar--;
console.log(myVar);
// decimal number
// quotient
const quotient = 2.2 / 2.0;
console.log(quotient);
// remainder
// augmented addition
 let a = 3;
 let b = 17;
 let c = 12;

 a += 12;
 b += 9;
 c += 7;

 console.log(a);
 console.log(b);
 console.log(c);

//  augmented subtraction
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
console.log(a);
console.log(b);
console.log(c);

// augmented multiplication
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;

console.log(a);
console.log(b);
console.log(c);

// augmented division

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;

console.log(a);
console.log(b);
console.log(c);

// 
const myStr = "FirstLine\n\t\SecondLine\nThirdLine" 

// strings with plus operator
const myStr = "This is the start. " + "This is the end."
console.log(myStr);

let myStr = "This is the first sentence. "
myStr += "This is the second sentence."
console.log(myStr);

const myName = "Nusrat";
const myStr = "My name is " + myName + " and I am well!"
console.log(myStr);

const someAdjective = "WoW";
let myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// first character

let firstLetterOfLastName = "";
const lastName = "LoveLace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

let myStr = "Jello World";
myStr = "Hello World";
console.log(myStr);

const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);


const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "The" + " " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + " " + myAdverb;
console.log(wordBlanks);

// arrays
const myArray = ["nusrat", 25];

const myArray = [["nusrat", 25], ["nabila", 34]];

const myArray =[50, 60, 70];
console.log(myArray[0]);
const myData = myArray[0];

// 
const myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray);

const myArray =[
[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];
console.log(myData);

let myGlobal = 10;
function fun1(){
   oppsGlobal = 5;
}
function fun2(){
    let output = "";
    if(typeof myGlobal != "indefined"){
    output += "myGlobal: " + myGlobal;
    }
    if(typeof oopsGlobal != "undefined"){
    output += " oopsGlobal: " + oopsGlobal;
    }
console.log(output);
} 

// local scope and function

function myLocalScope(){
  const myVar = 5;
  console.log('inside myGlobalScope', myVar);
}
myLocalScope();
console.log('inside myGlobalScope', myVar);


const outerWear = "T-shirt";
function myOutfit(){
   const outerWear = "sweater";
   return outerWear;
}
console.log(myOutfit());
console.log(outerWear());

let sum = 0;

function addThree(){
  sum = sum + 3;

}
function addFive(){
    sum = sum + 5;
  
  }

console.log(addThree());
console.log(addFive());

let processed = 0;
function processArg(num){
   return (num + 3) / 5;
}
processed = processArg(7);

function nextInLine(arr, item){
 arr.push(item);
 return arr.shift();

}
let testArr=[1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


function welcomeToBooleans(){

return true;
}