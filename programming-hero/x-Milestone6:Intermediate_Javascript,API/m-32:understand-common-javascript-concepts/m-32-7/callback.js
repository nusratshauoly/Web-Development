// function 1
function greeting(person) {
    console.log(person);
    // can call (function 1) the (greetingHandler) function here
    greetingHandler();
}
// function 2
function greetingHandler() {
    console.log('good Morning');
}
greeting(greetingHandler);

// ---------------------------------------
// kono 1 ta function k jodi r ekta function er vitor e parameter e pathai and function er vitor call kori oitake bole (callback) function. 

function greeting(greetingHandler) {  // take the (greetingHandler) function as parameter to another function
   
    // can call the (greetingHandler) function here
    greetingHandler();
}

// can also take the (greeting) function as parameter
function greetingHandler(name) {
    console.log('good morning', name);
}
const name = 'Halim mamama';
console.log(name);
greeting('Halim Mama');

const number = 45;
greeting(number);

const numbers = [45, 54, 78];
greeting(numbers);

const laptop = {price: 45000, brand: 'lenovo', memory: '8gb'}
greeting(laptop);


// ---------- complete call back function ------------
// kono 1 ta function k jodi r ekta function er vitor e parameter e pathai and function er vitor call kori oitake bole (callback) function. 

// function 1
function greeting(greetingHandler, name) {  // take the (greetingHandler) function (functin 2) as parameter to another function and we can also take another parameter and call the parameter inside (greetingHandler()) function
   
    // can call the (greetingHandler) function here
    greetingHandler(name);
}

// function 2
// can also take the (greeting) function as parameter
function greetingHandler(name) {
    console.log('good morning', name);
}

// function 3
function greetEvening(name) {
    console.log('good evening', name);
}

// function 4
function greetNight(name) {
    console.log('good Night', name);
}


greeting(greetingHandler, 'Tom hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom cruise');
greeting(greetEvening, 'Tom Suleiman');
greeting(greetEvening, 'Tom Salman');
greeting(greetNight, 'Rasel');


// ----------------------

// using add event listener in function
document.getElementById('btn-submit').addEventListener('click', function () {  // ekhaner function parameter hishebe use hoise
    console.log('submit button clicked');
})

// -------------------------------------

// using add event listener in callback function

// but oi function tai jodi bahire create kore addEventListener er moddhe send kore dei/call kori tahole eki kaj korbe and etai callback function er kaj
function submitHandler() {
    console.log('submit button clicked');
}

document.getElementById('btn-submit').addEventListener('click', submitHandler);