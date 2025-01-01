
////////////////////////////////////
// vid - 8: Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// vid- 9; Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;


// let myFirstJob = "programmer";
let myFirstJob = "Coder"; // ✅ this is the right way to declare a variable name
let myCurrentJob = "Teacher"; // ✅ this is the right way to declare a variable name

let job1 = "programmer"; // ❌ this is not  the right way to declare a variable name
let job2 = "teacher"; // ❌ this is not the right way to declare a variable name

console.log(myFirstJob);

let 3years = 3;  // ❌ not allowed to write like this

let jonas&Matilda = 'JM'; // ❌ not allowed to write like this

let name = 'Jonas'; // ❌ reserved word not allowed to write as variable like this

let Person = 'Jonas'; // ❌ uppercase not allowed to write as first letter like this

let PI = 3.1415; // ✅ can write this variable with fixed value of mathmatical term

// /////////////////////////////////
// vid - 10: practice assignment

/*
---- Values and Variables ------

1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).

2. Log their values to the console.

*/




////////////////////////////////////
// vid - 11: Data Types

// it's the data that has types not the variable

let javascriptIsFun = true;  //3. boolean (true) or (false)
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';  //2. string
console.log(typeof javascriptIsFun);

let year;  //4. undefined
console.log(year);
console.log(typeof year);

year = 1991;  //1. number 
console.log(typeof year);

console.log(typeof null); //5. null (similar to undefined)

// 6. Symbol(ES2015) : value that is unique and cannot be changed [not useful for now].

// 7. Bigint(ES2020) : Larger integers than the Number type can hold.


// /////////////////////////////////
// ------- practice assignment -------

/*

Data Type ------

1. Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

2. Log the types of isIsland, population, country and language to the console.

*/






////////////////////////////////////
//vid - 12: let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;  // ❌ cannot change value like this
// const job;

var job = 'programmer';  // ❌ donot use now
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
//vid - 13: Basic Operators
// ---  Math operators ---
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// exponential value = 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// --- Assignment operators ---
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// --- Comparison operators ---
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


//--------- Practice Assignment ------------

/*

Let, Const, Var ---

1.Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

2. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

3. Try to change one of the changed variables now, and observe what happens.

*/


////////////////////////////////////

//vid - 14: Operator Precedence

// mdn javascript operator precedence

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// vid - 16: Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// vid - 17: Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


// ------------ Practice Examples ----------

/*
 Basic Operators -------

 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?

2. Increase the population of your country by 1 and log the result to the console.

3. Finland has a population of 6 million. Does your country have more people than Finland?

4. The average population of a country is 33 million people. Does you country have less people than the average country?

5. Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.


*/


// ------------ Practice Examples ----------

/*

Strings and Template Literals --------

1. Recreate the description variable from the last assignment, this time using the template literal syntax.

*/


////////////////////////////////////
// vid - 18: Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// -------------- Practice Problems --------------

/*
Taking Decisions: if/else Statelements -----

1. If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/




////////////////////////////////////
// vid - 19: Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}

////////////////////////////////////
// vid - 20: Type Conversion and Coercion

// type conversion ---- 
// when we manually convert one type to another
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //like the the original number remain string console.log(inputYear); just showing the converted number here console.log(Number(inputYear)
console.log(Number(inputYear) + 18);  // here the string will be converted to number & add with a number.

console.log(Number('Jonas')); // javascript gives us (NaN) value whenever the operations that involve number fails to produce a new number.
console.log(typeof NaN);  // (NaN) means invalid number.

console.log(String(23), 23); //first is string type, second is number type.
//if the value is white color then it's a string - 

// javascript can convert in number, string & boolean. but it can not convert something to undefined or null.

// type coercion ------ 
// happens whenever a operator dealing with two values that have different types. javascript automatically convert types behind the scenes for us, its happens completely hidden from us
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // 10(number) -- (-) operator actually triggers the opposite conversion means (string - number = number)

console.log('23' + '10' + 3); // '23103'(string) -- (string + string = stringstring)

console.log(2 + 3 + 4 + '5'); // '95'(string) -- (number + string = string)

console.log('23' * '2');  // 46 (number)

console.log('23' / '2');  // 11.5 (number)

let n = '1' + 1; // '11' (string)
n = n - 1; // 10 (number)
console.log(n);



// ---------------------  Practice Problem -------------

/*
Type Conversion and Coercion ---------

1. Predict the result of these 5 operations without executing them:

console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

2. Execute the operations to check if you were right.


*/






////////////////////////////////////
// vid - 21: Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// vid - 22: Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');


// ------------ Practice Problems ------------

/*
Equality Operators: == vs. === ------

1. Declare a variable numNeighbours based on a prompt input like this:

    prompt('How many neighbour countries does your contry have?');

2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

3. Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

4. Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

5. Test the code with different values of numNeighbours, including 1 and 0.

6. Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

7. Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

8. Reflect on why we should use the === operator and type conversion in this situation.
*/



////////////////////////////////////
// vid - 24: Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// ------------- Practice Problems -------------

/*

Logical Operators ---

1. Comment out the previous code so the prompt doesn't get in the way.

2. Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

3. Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

4. If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

5. Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

*/


////////////////////////////////////
// vid - 25: Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/


const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy!');
}

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

////////////////////////////////////
// vid - 26:  The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}


// -------------- Practice Problems ---------------

/*
The switch statement ------------

1. Use a switch statement to log the following string for the given language:

chinese or mandarin: 'MOST number of native speakers!';

spanish: '2nd place in number of native speakers';

english: '3rd place';

hindi: 'Number 4';

arabic: '5th most spoken language';

for all other simply log 'Great language too :D'.
*/

////////////////////////////////////
// vid - 27: Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// vid - 28: The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);


// ------------------ Practice Problem ----------------

/*
The Conditional (Ternary) Operator ---------

1. If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

2. After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/




////////////////////////////////////
// vid - 29: Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

