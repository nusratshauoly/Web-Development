// ------- Easy-------
// create a variable amd assign it a number
let num = 1;

// minus 10 from that number
num = num - 10;

// print that number to the console
console.log(num);

// -------- medium ----------
// create a variable that holds a value from the input
let inputLabel = document.querySelector('#danceDanceRevolutuin').value;

let inputValue = "";
// add 25 to that number
inputLabel = inputLabel + 25;

inputValue = "" + 25; // add a string in a number and it became a string

// alert the number
alert(inputLabel); // its a function call and passing the argumenta

// -------- Hard ----------
// create a variable that holds the h1
let h1Holder = document.querySelector('h1');

//  add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum);

function sum(){
    console.log(num + inputLabel);

    console.log(-9 + "25"); // answer will be -925 in a string

    // let inputLabel = document.querySelector('#danceDanceRevolutuin').value;
    console.log(num + Number(inputLabel));   // this is the way to get a number from string value
}



// ------------ task --------------
// Create a conditional that checks their age

// if under 16, tell them they can not drive
// if under 18, tell them they can't hate from outside the club, because they can't even get in
// If under 21, tell them they can not drink
// If under 25, tell they can not rent cars affordably
// If under over 30, tell them there is nothing left to look forward too

let age = 17;

if(age < 16){
    console.log("they can not drive");
}
else if(age < 18){
    console.log("they can't hate from outside the club, because they can't even get in");
}
else if(age < 21){
    console.log("they can not drink");
}
else if(age < 25){
    console.log("they can not rent cars affordably");
}
else if(age < 30){
    console.log("they can not afford to rent house");
}
else if(age >= 30){
    console.log("there is nothing left to look forward too -- 100Devs");
}



// -------------- harder task ---------------
// On click of the h1
// Take the value from the input
// Place the result of the conditional in the paragraph






// ----------------------- function --------------------
/*
-- Functions are simple sets of instructions
-- Functions are reusable
-- Functions perform one action as a best practice
-- They form the basic "building blocks" of a program


function name(parameters){
    //body
}

// call
name(arguments);

*/

function yell(word){
    alert(word)
}
yell("Hello");

// -----

function yells(word, otherWord){
    alert(word);
    alert(otherWord);
}
yells("Hello", "GoodBye");

// -----

// --------------- function task ---------------
// ---------- Easy -----------
// Create a function that subtracts two numbers and alerts the difference

function subTwoNumsAndAlert(n1, n2){
    alert(n1 - n2);
}
subTwoNumsAndAlert(50, 30);
subTwoNumsAndAlert(100, 33);


// create a function that divides three numbers and console logs the quotient
function dividesThreeNumsAndLogs(zebra, forest, unicorn){
    console.log(zebra / forest / unicorn);
}

dividesThreeNumsAndLogs(12, 4, 3);  // answer will be 1


//  create a function that multiplies three numbers and returns the product
function multiplyThreeNumsAndReturn(num1, num2, num3){
    return num1 * num2 * num3;
}

let product = multiplyThreeNumsAndReturn(5, 10, 2);
alert(product);
console.log(product);

function turnIntoMoney(){
    let products = multiplyThreeNumsAndReturn(15, 20, 20);
    alert('$' + products);
}
turnIntoMoney();



//  --------------- medium -------------
// create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function addTwoAndDivide(n1, n2, n3){
    return (n1 + n2) % n3;
}
console.log(addTwoAndDivide(3, 3, 2));  // remainder will be 0


// ------ loops task: 21 savage loops
// create a function that has a loop that prints '21' 21 times to the console and then call that function
// * Bonus can you make it print '21' 21 times to the dom?

function savage21(){
    for(let i = 1; i < 22; i++){
        console.log('21');
        document.querySelector('#savageSays').innerText += " 21";  
    }
}
savage21();


// ---------- late night snaks ----------
//  create a function that grabs the number of snaks from the input and tells you to stop that many times

// * when we don't know how many times it will be loop then use (while loop) there.



// document.querySelector('#help').addEventListener('click', stopSnacking);

// function stopSnacking(){
//     let numOfSnackes = Number(document.querySelector('input').value); // we want the number of snakes not the string thats why use (Number)
//     document.querySelector('#stops').innerText = "";
    
//     for(let i = 1; i <= numOfSnackes; i++){
//        document.querySelector('#stops').innerText += ' STOP!';
//     }
// }

document.querySelector('#help').addEventListener('click', stopSnacking)

function stopSnacking(){
    let numOfSnacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ""
    for(let i = 1; i <= numOfSnacks; i++){
        document.querySelector('#stops').innerText += ' STOP!'
    }
}



// ----------------- hard -------------
// create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less than 100, subtract the difference of the last two numbers and console log the value, If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number.




// ------------------- bring it on project --------------------

let mathRandom = Math.ceil(Math.random() * 64);
console.log(mathRandom);

// *Variables*
// Create a variable and console log the value
let nums = 10 
console.log(nums)
// Create a variable, add 10 to it, and alert the value
let secondNum = 20
secondNum = secondNum + 10
alert(secondNum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNumsAndAlert(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
subFourNumsAndAlert(5,4,3,2)
// Create a function that divides one number by another and returns the remainder
function getTheRemainder(n1,n2){
    return n1 % n2
}
console.log( getTheRemainder(12,3) )

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(n1,n2){
    if(n1 + n2 > 50){
        alert('Jumanji')
    }
}
addTwoAlertJumanji(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeAndCheckDivByThree(n1,n2,n3){
    let product = n1 * n2 * n3
    if( product % 3 === 0){
        alert('Zebra')
    }
}
multiplyThreeAndCheckDivByThree(3,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logWordXTimes(word,num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}
logWordXTimes('wonderful', 21)



// ------------- task ----------------
// *Variables*
// Declare a variable, assign it a value, and alert the value

// Create a variable, divide it by 10, and console log the value

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
