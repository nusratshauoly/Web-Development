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
// object
// object normally const diye likha hoy
const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function(){
        this.drive();
        console.log("car has started")},
    drive: function(){
        console.log("car is driving");
    },
};
console.log(car.weight);
console.log(car['model']);
// object er function k method bola hoy
car.start();

// declare number as a object
// dont use it normally
let x = new Number(5);
console.log(x);

// strings
let text = "ABVCDGNJXCCVVBBBF FGGHHBVCXXXC VVX";
console.log(text.length);

// escape character \"\", \\vikings\\, \vikings\
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);


// go to the next newline
let text = "We are the so-called \ 
Vikings from the north."
console.log(text);

// its better to use "" in every line
let text = "We are the so-called" + 
"Vikings from the north."
console.log(text);
let text = "The character \\ is called backslash.";
console.log(text);
// object cannot be compared with (==) and (===)


// string methods
const String = {
    name: "Bangladesh",
    districts: 64,
    slice: function(){
        
    },
    substring: function(){
    
    }
};

const s = "Bangladesh";
console.log(s.length);


// slice method (koto string theke koto string dekhanor jonno)
let str = "Apple, Banana, Kiwi";
let banana = (str.slice(7, 13));
console.log(banana);

// replace string
let str = "I love Sakina";
let zarina = str.replace("Sakina", "zarina");


// concat method instead of + operator

// misconception about string behave like array
let text = "Hello World";
console.log(typeof text.charAt(500));
console.log(typeof text[500]);

// convert string to array
// split always array return kore
let text = "Hello World";
console.log(text.split(" "));


// string search
// slice 
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

// substring
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

// substr
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 13);

// replace
let text = "please visit Microsoft";
let newText = text.replace("Microsoft", "w3Schools");
console.log(newText);
// replaceAll
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");

// upper and lower case
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
let text3 = text1.toLowerCase();

// trim metho
let text1 = "     Hello World!      ";
let text2 = text1.trim();

// padstart
let numb = 5;
let text = numb.toString();
let padded = text.padStart(4, "0");
console.log(padded);

// concat
let text1 = "Hello";
let text2 = "world";
let text3 = text1.concat(text2);
console.log(text3);

// charAt
let text = "Hello World";
let char = text.charAt(0);
console.log(char);

// [] string
let text = "Hello World";
let char = text[0];
console.log(char);

// split
let text = "Hello";
const spliting = text.split(" ");
console.log(spliting);


// template literals
let a = `Bangladesh`;
let me = `It's my life 
          my rules`;
let a = 17;
let b = 1; 
// interpolation
let sentence = `I love ${Country} and it is a big country and it's population is ${a + b} crore`;
console.log(sentence); 


// javascript numbers
// NaN(not a number)
let a = "10";
let b = 10;
console.log(isNaN(a));
console.log(isNaN(b));


// typeof
let x = 123;
let newN = x.toString();
console.log(typeof newN);

//exponential
let x = 9560000000;
console.log(x.toExponential(2));

// value of method
let n1 = 123;
let n2 = new Number(123);


// execute until infinity
let myNumber = 2;
// Execute until infinity
while(myNumber != Infinity){
   myNumber = myNumber * myNumber;
}

// array
const cars = ["Saab", "volvo", "BMW"];
console.log(typeof cars);
console.log(cars.length);
// last element of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[4] = "Mango";
console.log(fruits[fruits.length - 1]);

// array loop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen =  fruits.length; 
for(i = 0; i < fruits.fLen; i++){
    console.log(i);
console.log(fruits[i]);
}
console.log("finished");

// for each
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen =  fruits.length; 
for(i = 0; i < fruits.fLen; i++){
    console.log(i);
console.log(fruits[i]);
}
console.log("finished");

// foreach
const fruits = ["Banana", "Orange", "Apple", "Mango"];
function myFunction(value){
    console.log(value);

}
fruits.forEach(myFunction);

// push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("lemon");

// add item using length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits(fruits.length) = "lemon";
console.log(fruits);

// create undefined holes
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[6] = "lemon";
console.log(fruits);

// associative Arrays

const person = {
     name: "Sumit",
     age: 35,
     country:"Bangladesh"
};

const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;
person[0];

// type of array
const numbers = [1, 2, 3];
Array.isArray(numbers);
numbers instanceof Array;
const persons = {
    name: "Sumit",
    age: 35,
    country:"Bangladesh"
};

// array methods

// converting array to string
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
console.log(fruits);
// join method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");
console.log(fruits);

// push and pop
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
fruits.push("PineApple");
fruits.shift();
fruits.unshift("lemon");
delete fruits[0]; //dont use
console.log(fruits);

// splice method
// add method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "lemon", "kiwi");
fruits.splice(2, 2, "lemon", "kiwi");

// remove method
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);
// concate
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobius", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// concat a string
const myChildren = arr1.concat("peter");
console.log(myChildren);

// slice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
citrus;

// number sort
// accending
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b)
{
    return a - b
});
console.log(points);
// descending
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(b,a)
{
    return b - a;
});
console.log(points);

// sorting an array in random order

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){
   return 0.5 - Math.random();
});
console.log(points);
// max value
Math.max.apply(null, [40, 100, 1, 5, 25, 10]);

// foreach
