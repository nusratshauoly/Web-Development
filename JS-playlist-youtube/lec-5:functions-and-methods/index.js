console.log("hello!");
"abc".toUpperCase();
[1, 2, 3].push(4);

function myFunction(msg) {
    console.log(msg);
    console.log("we r learning JS");
}
myFunction("I love JS");
myFunction("I like JS", 100);


// 

function sum(x, y) {
    let sum = x + y;
    console.log("before return");
    return sum;

}
let val = sum(3, 4);
console.log(val);

// 

function sum(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

// arrow function
const arrowSum = (a, b) => {
    console.log(a + b);
}

// 
const arrowMul = (a, b) => {
    //console.log(a * b);
    return a * b;
}
let result = arrowMul(5, 6);
console.log(result);

// sngle line arrow function
const printHello = () => console.log("hello");


// 

/*
Qs: Create a function using the  "function" keyword that takes a String as an argument and returns the number of vowels in the string.
*/
// function countVowels(str) {
//     let count = 0;
//     for (let char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("see you now"));
/*
Qs : create an arrow function to perform the same task.
*/

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
// ---------------- forEach function -------------
arr.forEach(callBackFunction)
* CallbackFunction: Here, it is a function to execute for each element in the array.
* In forEach there will be 3 parameters (value, index, array)

* A callback is a function passed as an argument to another function.

arr.forEach(val) => {
    console.log(val);
}

// "abc" => string, toUpperCase() => method
   
*/
function abc() {
    console.log("hello");
}
function myFunc(num) {
    return num;
}

let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {  // value at each index
    console.log(val);
})

// forEach (=> arrow function)
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val);
}

//  another example
let arr = ['pune', 'delhi', 'mumbai'];
arr.forEach((val) => {
    console.log(val);
});

// another example
let arr = ['pune', 'delhi', 'mumbai'];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})

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

arr.map(callbackFnx(value, index, array))


//  EXAMPLE:
let newArr = arr.map((val) => {
    return val * 2;
})
*/
let nums = [67, 52, 39];

let newArr = nums.map((val) => {
    return val * val;
//  return val * 2;
});
console.log(newArr);

let calcSquare = (num) => {
    console.log(num * num);
};

/*
// *** ------------- Filter ---------------- ***
-- Creates a new array of elements that give true for condition / filter;

Eg: all even elements

let newArr = arr.filter((val) => {
    return val % 2 === 0;
})
*/\\

let arr = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

/*
--------------------------------------------------
// -------------------- reduce ------------------
-- Performs some operations & reduces the array to a single value; It returns that single value.

//  0 + 1 + 2 + 3 + 4 
const array1 = [1, 2, 3, 4];
const initialalue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue;
);
console.log(sumWithInitial);
*/

const arr = [1, 2, 3, 4, 7, 9];
const output = arr.reduce((prev, curr) => {
    return prev + curr;
//  return prev > curr ? prev : curr;

});
console.log(output);


// LET'S PRACTICE
/*
Qs: We are given array of marks of students. Filter out of the marks of students that scored 90+
*/
let marks = [97, 64, 32, 49, 99, 96, 86];

let toppers = marks.filter((val) => {
    return val > 90;
})
console.log(toppers);

/*
Qs: Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array. (factorial of a number ...)
*/
let n = prompt("enter a number: ");
let arr = [];

for (let i = 1; i <= n; i++){
    arr[i - 1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res, curr;
})
console.log(sum);