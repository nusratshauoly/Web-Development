// What r functions?
// -- functions r simple sets of instructions!
// -- they form the basic "building blocks" of a program
// -- parameters are like variables that only exist inside this function
function name(parameters) {
    // body
}
// call
name(arguments);

// 

function yell(word) {
    alert(word);
}
yell('Hello');

// 
function yellSomething(bob1, bob2) {
    alert(`I ${bob1} after ${bob2}`);
}
yellSomething("eat", "sleep");
yellSomething("sleep", "swim");


// assignment

// 1. Create a function that adds two numbers and alerts the sum
function addTwoNumbers(num1, num2) {
    alert(num1 + num2);
    // another way
    // let sum = num1 + num2;
    // alert(sum);
}
addTwoNumbers(2, 3);

// 2. Create a function that multiplies three numbers and console logs the product
function multipleThreeNumbers(zebra1, zebra2, zebra3) {
    const product = zebra1 * zebra2 * zebra3;
    console.log(product);
}
multipleThreeNumbers(2, 3, 4);

// 3. Create a function that divides two numbers and returns the ???
function dividesTwoNumbers(n1, n2) {
    return n1 / n2;
}
console.log(dividesTwoNumbers(12, 6));