// global scope:  shobai access korte parbe
let year = '2020';

// function scope : shobtuku function er jekono jaygay use kore parbo
function theYear() {
    let text = "The Year is";
    return text + " " + year;
}

// Block scope : {} bracket er vitore shudhu access kora jabe
if (10 < 20) {
    let greeting = 'hi';
    return greeting;
}

// --------------------- hoisting -------------------

// ------ var ------
console.log(d);
var d = 5;
// undefined

// ------- let ------
console.log(d);
let d = 5;
// referenceError: Cannot access 'd' before initialization

// ------- const -------
console.log(d);
const d = 5;
// referenceError: Cannot access 'd' before initialization


// ------------------------ hoisting in function ------------------------

//  ----- ✅ this code will work ----
displayMessage();
function displayMessage() {
    console.log('Hello World');
}
// Hello World


// ------ ❌ this code won'r work ------
displayMessage();
var displayMessage = function () {
    console.log('Hello World');
};
// TypeError: displayMessage is not a function


// ------------------- Hoiting and Scope ---------------------------
for (var x = 0; x < 10; x++){
    var y = x;
}
// here values of x and y will be accessible as there are made globally available by javascript compiler - variable hoisting
console.log('x value is: ' + x);
console.log('y value is: ' + y);

for (let a = 0; a < 10; a++){
    let b = a;
}
// here 'a' and 'b' both variables scope is restricted as they are of type 'let'
console.log('a value is: ' + a);
console.log('b value is: ' + b);


// ------------------------ closure ------------------------------
function grandParent() {
    let house = 'GreenHouse';

    function parent() {
        let car = 'Tesla';
        house = 'YellowHouse';
        // closure
        function child() {
            let scooter = 'Vespa';
            console.log('I have:', house, car, scooter);
        }
        // 
        return child();
    }
    return parent;
}

// -------------------------- Callback function ----------------------------
// example
function showMessage(s) {⬅️
    s(); ⬅️ // message();
}
function message() {
    console.log("Hello");
}
showMessage(message); ⬅️

// 
function numberOne() {
    console.log('numberOne is called');
}
function numberTwo(callback) {  // callback function
    console.log("number two is called");
    callback();
}
numberTwo(numberOne);  // callback function : numberOne

//  output
// numberTwo is called
// numberOne is called