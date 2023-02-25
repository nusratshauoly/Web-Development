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

function trueOrFalse(wasThatTrue){
  if(isItTrue){
      return "Yes, that was true";
  }
  return "No, that was false";

}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));


function testEqual(val){
  if(val == 12){
     return "equal";
  }
  return "Not Equal";
}
testEqual(10);


function testStrict(val){
   if(val === 7){
      return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

function compareEquality(a, b){
 if(a === b){
     return "Equal"; 
}
return "Not Equal";
}
compareEquality(10, "10");

function testNotEqual(val){
   if(val != 90){
      return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

function testStrictNotEqual(val){
   if(val !== 17){
       return "Not Equal";
  }
return "Equal";
}

testStrictNotEqual(10);



function testGreaterThan(val){
    if(val > 100){
        return "Over 100";
    }
    else if(val > 10){
        return "Over 10";
    }
    else{
        return "10 or under";
    }
}
console.log(testGreaterThan(10));

function testGreaterOrEqual(val){
  if(val >= 20){
    return "20 or Over";
  }
  else if(val >= 10){
    return "10 or Over";
  }
  else{
    return "Less than 10";
  }
}
console.log(testGreatOrEqual(10));

function testLessThan(val){
   if(val < 25){
       return "Under 25";
  }
  else if(val < 55){
       return "Under 55";
  }
  else{
       return "55 or Over";
  }
}
console.log(testLessThan(10));

function testLessOrEqual(val){
  if(val <= 12){
      return "Smaller Than or Equal to 12";
  }
  else if(val <= 24){
      return "Smaller Than or equal to 24";
  }
  else{
      return "More Than 24";
  }
}
console.log(testLessOrEqual(10));


function testLogicalAnd(val){
  if(val <= 50 && val >= 50){
       return "Yes";
  }
  else{
       return "No";
  }
}

console.log(testLogicalAnd(10));




function testLogicalOr(val){
  if(val < 10 || val > 20){
       return "Outside";
  }
  else{
       return "Inside";
  }
}

console.log(testLogicalOr(15));

function  testElse(val){
  let result = "";

  if(val > 5){
     result = "Bigger than 5";
  }
  else{
     result = "5 or Smallar";
  }
return result;
}
testElse(4);



function testElseIf(val){
   if(val > 10){
      return "Greater than 10";
  }
  else if(val < 5){
      return "Smaller than 5";
  }
  else{
      return "Between 5 and 10";
  }
}
console.log(testElseIf(7));


function orderMyLogic(val){
    if(val < 5){
        return "Less than 5";
    }
    else if(val < 10){
        return "Less then 10";
    }
    else{
        return "Greater than or equal to 10";    
    }
}
console.log(orderMyLogic(7));

function caseInSwitch(val){
   let answer = "";
   switch(val){
     case 1:
      answer = "alpha";
      break;
     case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;  
  }
  return answer;
}
console.log(caseInSwitch(1));

function chainToSwitch(val){
  let answer = "";

  switch(val){
    case "bob": 
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
    break;
    
  }
  return answer;
}
console.log(chainToSwitch(7));


//returning boolean value with functions
function isLess(a,b){
  return a < b;
}
console.log(isLess(10, 15));


console.log(Math.PI);

function getRndInteger(min, max){
return Math.floor(Math.random() * (max-min + 1)) + min;
}


// 
function abTest(a, b){
if(a < 0 || b < 0){
    return undefined;
}
return Math.round(Math.pow(Math.sqrt(a) + Math.E.sqrt(b), 2));
}

abTest(2, 2);


let count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
          count--;
          break;
    }
  var holdbet = "Hold";
  if(count > 0){
      holdbet = "Bet";
  }
  return count + " " + holdbet;
}

console.log(cc(2), )


const testObj = {
   "hat" : "ballcap",
   "shirt": "jersey",
   "shoes": "cleats"
};
const  hatValue = testObj.hat;
const shirtValue = testObj.shirt;

const testObj = {
    "an entree" : "hamburger",
    "my side" : "veggies",
    "the drink" : "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj.["the drink"];
console.log(entreeValue);
console.log(drinkValue);


// 

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];
console.log(player);


// 
function phoneticLookup(val){
  var result = "";


  var lookup = {
      "alpha" : "Adams",
      "bravo": "Boston",
     "charlie": "Chicago",
     "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
    result = lookup[val];
    return result;
}


///
var myObj = {
   gift: "pony",
   pet: "kitten",
   bed: "sleigh"
}

function checkObj(obj, checkProp){
  if(obj.hasOwnProperty(checkProp)){
     return obj[checkProp];
  }
  else{
   return "Not Found";
  }
}

const myStorage = {
   "car":{
     "inside":{
       "glove box": "maps",
       "passenger seat": "crumbs"
    },
    "outside":{
        "truth": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);


const myPlants = [
 {
   type: "flowers",
   list: [
      "rose",
      "tulip",
      "dandelion"
  ]
},
{
type : "trees",
list: [
   "fir",
   "pine",
   "birch"
]
}
];

const secondTree = myPlants[1].list[1];
console.log(secondTree);


const myArray = [];
let i = 5;
while(i >= 0){
   myArray.push(i);
   i--;
}
console.log(myArray);

const myArray = [];
let i = 5;
while(i >= 0){
   myArray.push[i];
   i--;
}
console.log(myArray);


const myArray = [];

for(let i = 0; i < 5; i++){
   myArray.push(i);

}
console.log(myArray);


const myArray = [];
for(let i = 9; i >= 1; i -= 2){
    myArray.push();
}
console.log(myArray);

const myArray = [];
for(let i = 9; i >= 1; i -= 2){
     myArray.push(i);
}
console.log(myArray);


const myArray = [2, 3, 4, 5, 6];
const total = 0;

for(let i = 0; i < myArray.length; i++){
  total += myArray.length();
}
console.log(total);

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for(let i = 0; i < myArr.length; i++){
   total += myArr[i];
}
console.log(total);


function multiplyAll(arr){
    let product = 1;

  for(let i = 0; i < arr.length; i++){
     for(let j = 0; j < arr[i].length; j++){
        product = product * arr[i][j];
    }
  }
return product;

}


const myArray = [];
let i = 10;

do{ 
  myArray.push();
  i++;
}while(i < 5)

console.log(i, myArray);

const myArray = [];
let i = 10;


do{
  myArray.push(i);
  i++;
}while(i <5)

console.log(i, myArray);


function sum(arr, n){
  if(n <= 0){
     return 0;
  }else{
     return sum (arr, n - 1) + arr[n - 1];
  }
}



function lookUpProfile(name, prop){
  for(let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
     return contacts[i][prop] || "No such property"; 
    } 
  }
  return "No such contact";
}

const data = (lookUpProfile("Akira", "likes"));
console.log(data);

function randomFraction(){
   var result = 0;
   while(result === 0){
      result = Math.random();
  }
  return result;
}


function randomWholeNum(){
   return(Math.floor(Math.random() * 10));


}

console.log(randomWholeNum());

function randomRange(myMin, myMax){
return Math.floor(Math.random() * myMax - myMin + 1) + myMin;

}
let randomNumber = randomRange(5, 15);
console.log(randomNumber);


function convertToInteger(str){
      return parseInt(str);
}
convertToInteger("56");



function convertToInteger(str){
     return parseInt(str, 2);
}
console.log(convertToInteger("10011"));