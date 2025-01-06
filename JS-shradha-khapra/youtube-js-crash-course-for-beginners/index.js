alert("Hello World");
console.log("helllo world");
console.error('This is an error');
console.warn("This is a warning");


// var,  let,  const

// var (don't use anymore)
// let(use this)


let age = 30;
age = 31;
console.log(age);


let score;
score = 30;
console.log(score);

// const (always use const unless you know you're going to reassign the value.)

const ages = 35;
console.log(ages);


// Data Type: String,Numbers, Boolean, null, undefined
const name = "Jonas";
const ageNumber = 20;
const isCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
let z; // undefined
console.log(typeof rating);


// Concatenation
console.log('My name is ' + name + ' and I am ' + age);

// Template String
const hello = `My nams is ${name} and I am ${age}`;
console.log(hello);
 

// length property
const s = 'Hello World';
console.log(s.length);
console.log(s.substring(0, 5).toUpperCase());

// split method
console.log(s.split(''));

/*
multi
line
comments
*/

// Arrays - variables that hold multiple values

//  array constructor  // here (new) keyword and something after that is a constructor.
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);


// 
const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes';

fruits.push('oranges');

fruits.unshift('strawberries');

fruits.pop(); 

console.log(Array.isArray(fruits)); //to check is the (fruits) araay or not --- answer is true in boolean.

console.log(Array.isArray('hello')); 

console.log(fruits.indexOf('oranges'));  // 1

console.log(fruits[1]);

// object
const person = {
    firstName: 'John',
    lestName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName, person.lestName);
console.log(person.hobbies[1]);
console.log(person.address.city);


// can pull out information from object property
const { firstName, lastName, address: {city} } = person;
console.log(firstName);
console.log(city);


// can  add object property
person.email = 'john@gmail.com';
console.log(person);

// arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];
console.log(todos[1].text);


// JSON

// JSON is a data format and it's used a lot within full stack development and using API is when you're sending data to a server, you usually sent it in JSON format and receive it in JSON format. and its very similar to object literals

//  go to https://jsoneditoronline.org/

// copy these and convert these into JSON in these link...

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

// JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// loops

//  for loop
for(let i = 0; i <  10; i++){
    console.log(i);
    console.log(`for loop Number ${i}`);
}

// while
let i = 0;
while(i < 10){
    console.log(`While loop number: ${i}`);
    i++;
}

//  loop through arrays
//  for loop
for(let i = 0; i < todos.length; i++){
    console.log(i);
    console.log(todos[i].text);
}


// for of loop
for(let todo of todos){
    console.log(todo.text);
    console.log(todo.id);
}

// high order array iteration
// forEach, map, filter

// forEach
todos.forEach(function(todo){  // in high order iteration they take in as a parameter a function// here (todos) the array
    console.log(todo.text);
});


// map
const todoText = todos.map(function(todo){  
    return todo.text;
});
console.log(todoText);


// filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);



// 

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoCompleted);



// conditionals
const x = 4;
const y = 11;

if(x > 10 || y > 10){
    console.log('x is more than 5 or y is more than 10');
}
else if(x > 10){
    console.log('x is greater than 10');
}
else{
    console.log('x is less than 10');
}


// -------------
const x = 4;
const y = 11;

if(x > 5 && y > 10){
    console.log('x is more than 5 or y is more than 10');
}


// ternary operator
const x = 10;
const color = x => 10 ? 'red' : 'blue';

console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;

}


// function
function addNums(num1 = 1, num2 = 1){
    return num1 + num2;
}
console.log(addNums(5, 5));


// arrow function
const addNums = (num1 = 1, num = 1) => {
    console.log(num1 + num2);
}
console.log(addNums(4, 5));

// if its one line then can do this
const addNums = (num1 = 1, num = 1) => num1 + num2;

console.log(addNums(4, 5)); 

//  another example
const addNums = num1 => num1 + 5;
console.log(addNums(5));

// forEach
todos.forEach((todo) => console.log(todo));


// this keyword

// object oriented programming
// constructor function
function Person(firstName, lastName, dob){
    // properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.dob = new Date(dob);  // to get the date 

    // methods
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}



// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1988');
const person2 = new Person('Mary', 'Smith', '3-6-1978');
console.log(person1);
console.log(person2.firstName);
console.log(person2.dob);

console.log(person2.dob.getFullYear());  // to get the year

console.log(person2.dob.getBirthYear());

console.log(person1.getFullName());



// ------------------

// prototype  - what is ? when and how to use it??

function Person(firstName, lastName, dob){
    // properties
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob;
    this.dob = new Date(dob);  // to get the date 
}

// prototype  --- why use prototype --- instead of (this.getBirthYear = function(){)  ---- comment this line
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}


// --- instead of (  this.getFullName = function(){)  ----- comment out this line.
Person.prototype.getFullName = function(){   
    return `${this.firstName} ${this.lastName}`;
}
 

const person1 = new Person('John', 'Doe', '4-3-1988');
const person2 = new Person('Mary', 'Smith', '3-6-1978');

console.log(person1);
console.log(person2.getFullName);


// -----------------------------------
//  writing in class is better than prototype

// --------- Class -------------
class Person{
    constructor(firstName, lastName, dob){
        // properties
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    // method
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe', '4-3-1988');
const person2 = new Person('Mary', 'Smith', '3-6-1978');

console.log(person1);
console.log(person2.getFullName);


//  ------------ DOM (document object model) -----
console.log(window);

window.alert(1);

// single element
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('h1'));


// multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));


// looping through in each item
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// remove element
const ul = document.querySelector('.items');
ul.remove();

ul.lastElementChild.remove();

// edit element
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('click', (e) => {
    e.preventDefault();   // to stop auto reload on the page
    console.log(e.target.id);  // use target to click on exact point

    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});




// ------------  to fill the form -------------


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    // name and email both field need to be filled to submit the button
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // we want to disapper the msg after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    }
    else{
        
        // console.log('success');

        // // <!-- to add items insde (users) -->

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);  // (appendChild) use to add li inside ul

        // clear the field
        nameInput.value = '';
        emailInput.value = '';

    }
}