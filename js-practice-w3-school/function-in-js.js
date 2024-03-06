// // arguments are passed by value (((If a function changes an argument's value, it does not change the parameter's original value.)))
// function a(x, y) {
//     x = x * 5;
//     return x * y;
// }
// let m = 5;
// let n = 6;
// console.log(a(m, n));

// // object passed by reference (((If a function changes an object property, it changes the original value.)))
// function a(x) {
//     x.one = 7;
//     return x.one * x.two;
// }
// let m = {
//     one: 4,
//     two: 5
// };
// console.log(a(m));
// console.log(m);

// // function parameter
// // default parameter
// function myFunction(x, y = 10) {
//     return x + y;
// }
// myFunction(10);

// // function rest parameter
// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) {
//         sum += arg;
//     }
//     return sum;
// }
// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// arguments
// function sumAll() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// let y = sumAll(5, 6, 7, 8, 9);
// console.log(y);


// -------------- function invocation -------------
// // invoke function
// const x = {
//     a: function () {
//         console.log(this);
//     }
// }
// x.a();

// 
// function myFunction(a, b) {
//     return a * b;
// }
// window.myFunction(10, 2);

// function myFunction() {
//     return this;
// }
// let x = myFunction();

// // Invoking a function as a method
// const myObject = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(myObject.fullName());

// // 
// const myObject = {
//     firstName: "john",
//     lastName: "doe",
//     fullName: function () {
//         return this;
//     }
// }
// console.log(myObject.fullName());

// // Invoking a function with a function constructor
// function myFunction(arg1, arg2) {
//     this.firstName = arg1;
//     this.lastName = arg2;
// }
// const myObj = new myFunction("john", "doe");
// console.log(myObj.firstName);


// // --------------------------------------------

// // javascript function call
// const person = {
//     fullName: function (city, country) {
//         return this.firstName + ' ' + this.lastName + ' ' + city + "," + country;
//     }
// }
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }
// console.log(person.fullName.call(person1, 'dhaka', 'Bangladesh'));


// ---------------------- js function apply
// const person = {
//     fullName: function (city, country) {
//         return this.firstName + ' ' + this.lastName;
//     }
// }
// const person1 = {
//     firstName:  "john",
//     lastName:  "Doe"
// }
// console.log(person.fullName.apply(person1, ["dhaka", "Bangladesh"]));


// // 
// console.log(Math.max(1, 2, 3));

// console.log(Math.max.apply(null, [1, 2, 3]));
// console.log(Math.max.apply(Math, [1, 2, 3]));
// console.log(Math.max.apply(' ', [1, 2, 3]));

//  function bind()

// // closures
// function myFunction() {
//     let a = 4;
//     return a * a;
// }

// // 
// let a = 5;
// function myFunction() {
//     return a * a;
// }

// // 
// function myFunction() {
//     a = 5;
// }

// // // global variable
// let counter = 0;

//     function add() {
//         counter += 1;
//     }
// console.log(add());
// console.log(add());
// console.log(add());

// // Set counter as a local variable
// // let counter = 0;

// function add() {
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// console.log(add());
// console.log(add());
// console.log(add());


// //  nested function

// function add() {
//     let counter = 0;

//     function plus() {
//         counter += 1;
//         plus();
//         return counter;
//     }
// }

// closure
const add = (function () {
    let counter = 0;
    return function() {
        counter += 1;
        return counter;
    }

})();
console.log(add());
console.log(add());
console.log(add());