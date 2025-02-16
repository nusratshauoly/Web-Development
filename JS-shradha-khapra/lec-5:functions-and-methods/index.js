console.log("hello!");
"abc".toUpperCase();
[1, 2, 3].push(4);


// ------------------- Functions in JS ------------------
// Block of code that performs a specific task, can be invoked whenever needed

// functions have another specific task is that the code, if you find a piece of code like that is repeated, and if you have to write it again and again then instead of writing repeatedly , we can convert it inside a function. whenever need it just call the function.

// function parameters are like local variables of function and it has block scope. means it is available on the function block

// ---- function definition

// --- 1st type
function functionName(){
    // do some work   
}

//  &&

// --- 2nd type
function functionName(param1, param2 ...){ // with parameter
    // do some work
}

// ---- function call
functionName();


// ----- example
function myFunction() {
    console.log("we r learning JS");
    console.log("welcome to Apna College!");
}
myFunction();
myFunction();

//  if we have some specific message to print then it will depend on the input, to define the inputs we'll keep our input in between the ()=> parenthesis. its called parameter.

function myFunction(msg) {  // parameter => input
    console.log(msg);
    console.log("we r learning JS");
    console.log("welcome to Apna College!");
}
myFunction("I love JS");  // send the message into the parameter
myFunction("I like JS", 100);

// 

function myFunction(msg, n) {  // parameter => input
    console.log(msg * n);
}
myFunction("I like JS", 100);  // ans will be (NaN) because can not pass different values of parameter to calculate.

// 
// function => 2 numbers, sum

function sum(x, y) {
    // inside function the parameters will act as a (local variables => scope,  means this parameters remains within the scope of this function)

    let sum = x + y;
    console.log("before return");
    console.log(x); // the x will print here cause it's in the local variable
    return sum;
    console.log("after return"); // after return this statement will never run
}
// call the function
let val = sum(3, 4);
console.log(val);
console.log(x);  // the x value is not print here, it will not defined

// ----
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 2));

// ------

function multiplication(a, b) {
    return a * b;
}
console.log(multiplication(2, 2));

// -------------------------- arrow function

/*
-- Compact way to writing a function
-- we use arrow function for small work like sum, multiplication like these type of small work
-- if we have a function which is doing a lot of work, there will be three, four, or six lines of code inside it. For those cases we generally won't use arrow functions.

const functionName = (param1, param2 ...) => {
            // do some work
    }

*/

const arrowSum = (a, b) => {
    console.log(a + b);
}
console.log(arrowSum(3, 5));

// --
const arrowMul = (a, b) => {
    //console.log(a * b);
    return a * b;
}
let result = arrowMul(5, 6);
console.log(result);

// ------- single line arrow function
const printHello = () => console.log("hello");


// 

/*
Qs: Create a function using the  "function" keyword that takes a String as an argument and returns the number of vowels in the string.
*/
// -- using regular function 
function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("see you now"));
/*
Qs : create an arrow function to perform the same task.
*/
// -- using arrow function
const countVowels = (str) => {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Now you see me"));
// --------------------------------------------------

/*
// ---------------- forEach  function -------------

// --------- forEach loop in Arrays

-- arr.forEach(callBackFunction) // forEach writing rules 


* CallbackFunction: Here, it is a function to execute for each element in the array.
* In forEach there will be 3 parameters (value, index, array)

* forEach method only used for arrays, not for strings


* A callback is a function passed as an argument to another function.

* functions can pass in Javascript as a parameter + can return the value

arr.forEach(val) => {
    console.log(val);
}

// when a function associates with object it becomes method 
// "abc".toUppercase();
// we always need string to use (toUppercase()).
// "abc" => string, toUpperCase() => method
   
*/

function myFunc(num) {
    return num;
}

// --------

// * functions can pass in Javascript as a parameter + can return the value


function abc() {
    console.log("hello");
}

function myFunc(abc) {  // can pass function as a parameter and return the value
    return abc;
}

// ---------

let arr = [1, 2, 3, 4, 5];
// to execute forEach method , we need to pass a function
arr.forEach(function printVal(val) {  // value at each index of arr -- forEach pass each value from arr in this parameter
    console.log(val);
})

// --- forEach (=> arrow function), we pass value in forEach in the form of arrow function
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val);
}

// --- another example (we use forEach when we need to do some work for each element of the array.)
let arr = ['pune', 'delhi', 'mumbai'];
arr.forEach((val) => {
    console.log(val.toUpperCase());
});

// ---- another example  
let arr = ['pune', 'delhi', 'mumbai'];
arr.forEach((val, idx, arr) => {  // inside forEach function theres 3 parameters that we can use, these parameters are optional for us, (val => the value stored in the item), (index/position), (array)
    console.log(val.toUpperCase(), idx, arr);
})


// ----
/*
    * Interview Question: what are higher order functions ?


    Answer : forEach method. we can call them higher order function or higher order method. Higher order functions are functions that call upon other functions as a parameter, or return a function, If there is a function that is using as a parameter or the function that is returning from there , if we consider the function as a value then we called them higher order functions.


    --- Higher Order function and higher order methods in javascript are methods that either take another function as a parameter inside them and they return another function as there output. 

*/

// -------------------- Practice Question -----------------------

/*
QS: For a given array of numbers, print the square of each value using the forEach loop.
*/

let nums = [2, 3, 4, 5, 6];

nums.forEach((num) => {
    console.log(num * num); // num ** 2
});

//  solve using arrow function
let numbers = [67, 52, 39];
let calcSquare = (num) => {
    console.log(num * num);
};
numbers.forEach(calcSquare);

// ------------------------------------

/*
// *** ------------- Map -------------- ***
-- Creates a new array with the results of some operation. The value its callback returns are used to form new array

--- map is used to create a new array using some Return value based on each value which is stored at the individual indexes of the array . 

--- forEach()   vs   map():


1. forEach() is used when we normally have to do some calculations, or normally need to print something


2. map() is used when we want to get it done , create a new array using the values if we want to do it, then these are our use cases.


arr.map(callbackFnx(value, index, array))


//  EXAMPLE:
let arr = [2, 3, 4];
let newArr = arr.map((val) => {
    return val * 2;
});
console.log(newArr);
*/

// --- to print array elements

let nums = [67, 52, 39];

let newArr = nums.map((val) => {
    return val * val;
//  return val * 2;
});
console.log(newArr);

// let calcSquare = (num) => {
//     console.log(num * num);
// };

/*
// *** ------------- Filter ---------------- ***
-- Creates a new array of elements that give true for condition / filter;

Eg: all even elements

let newArr = arr.filter((val) => {
    return val % 2 === 0;
})
*/
// --- even values :
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);  // new array [2, 4, 6]

// --- odd values :
let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 !== 0;
});
console.log(evenArr);  // new array [1, 3, 5, 7]


/*
--------------------------------------------------
// -------------------- reduce ------------------
-- Performs some operations & reduces the array to a single value; It returns that single value. example: average / sum calculate


// --- Demo example
//  0 + 1 + 2 + 3 + 4 
const array1 = [1, 2, 3, 4];
const initialalue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue; 0 + 1 => 1, 1 + 2 => 3, 3 + 3 => 6, 6 + 4 => 10
);
console.log(sumWithInitial); // [1, 3, 6, 10]
*/


// --- sum of an array
const arr = [1, 2, 3, 4, 7, 9];
const output = arr.reduce((prev, curr) => {
    return prev + curr;
//  return prev > curr ? prev : curr;
});
console.log(output);


// --- to print the largest element of an array
let arr = [5, 6, 2, 1, 3];
const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);


// ---------------------- LET'S PRACTICE ------------
/*
1: We are given array of marks of students. Filter out of the marks of students that scored 90+
*/
let marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);

/*
2: Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array. (factorial of a number ...)
*/
let n = Number(prompt("Enter a number: ")); // // Take input from the user and convert it to a number
let arr = [];  // store 1 to n values

for (let i = 1; i <= n; i++){
    arr[i - 1] = i;  // Assign each number to the corresponding index (starting from 0)  // store i value in arr [i - 1] index -- exam: i = 1, [1 - 1] = 0 index; i = 2, [2 - 1] = 1 index like this. val= 1(index/position = 0), 2(1), 3(2), 4(3) index e store hobe
}
console.log(arr);  // Print the generated array


let sum = arr.reduce((res, curr) => {  // (previous value, current value)
    return (res + curr);   // Initial value is 0 to handle empty array cases
});
console.log("sum = ", sum);



// 3. (factorial of a number ...)

let factorial = arr.reduce((res, curr) => {
    return (res * curr); // Initial value is 1 to ensure correct multiplication
});
console.log("factorial = ", factorial);
