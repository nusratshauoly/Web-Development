// let

// let x ="john Doe";
// let x = 0;
let x = 7;
if(true){
  let x = 6;
console.log(x);
}
console.log(x);

// difference between var and let
// var
// var carName;(ekhane carName age declare na korleo declaration dekhabe)
carName = "Volvo";
var carName;
console.log(carName);

// let
// let carName; (carName cannot be initialized) mane age value assign kore pore declare kora jabena
carName = "Volvo";
let carName;
console.log(carName);

// const
const a;
a = 5;
// this will show error const e ekebare value assign korte hoy like:
const a = 5; 
// you can change a element of const array
const a = [1, 2, 3, 4];
a[1] = 1;
const b = 5;
// // you can change a property of const object
const car = {type:"Fiat", model:"500", color: "red"};
car.color = "green";
// const eo let er moto variable declaration er age 

// typeof
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// object datatype
let x = 5;
let y = 6;
let z = 7;
let myObject = {x: 5, y:6, z:7};

//function
function sleep(){
    console.log('jasim is sleeping from 10 pm');
}
sleep();
// function using parameter
function sleep(names){
    console.log(names + " is sleeping from 10 pm");
}
sleep('Jasim');
sleep('Rahim');
sleep('Karim');

///////////////////////
function sleep(names, time){
    console.log(names + " is sleeping from " + time);
    return 5; //function e return thakle oiporjontoi execution hobe er pore kichu thakleo ta r execution hobena. 
    console.log(6); //eta print hobena 
}
sleep("jasim", "10pm");
sleep("karim", "11pm");
sleep("rahim", "12pm");


//////////// undefined function
function myFunction(a, b){
    console.log("hello");
    // return undefined
}
let x = myFunction(4, 3);
console.log(x);

// operator invokes the function
// convert farnheit to celsius:
function toCelsius(fahrenheit){
    return (5/9) * (fahrenheit - 32);
}
toCelsius();
// using a variable to store the return value of a function
let x = toCelsius(77);
let text = "the temperature is " + x + " Celsius";
let x = "the temperature is " + toCelsius(77) + " Celsius";

// local variableto the function
function myFunction(){
    let carName = "Volvo";
}