"use strict";

///////////////////////////////////////
//vid - 32: Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = 'Audio';  // (interface is reserved word)
// const private = 534;  // (private is reserved word for JS)

///////////////////////////////////////
//vid - 33: Functions
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

// function with parameters
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
console.log(fruitProcessor(5, 0));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); // console.log is an built-in function that we donot have to write ourselves

const num = Number("23"); // Number is also an built in function and we pass this argument into the function and this function will then be executed and returned string as a number.
console.log(num);

// ------------------ practice problem ----------------
//vid - 33: Functions

/*
1. Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

*/

"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const country1 = describeCountry("Finland", 6, "Helsinki");
console.log(country1);

const country2 = describeCountry("Bangladesh", 16, "Dhaka");
console.log(country2);

const country3 = describeCountry("Malaysia", 5, "Pahang");
console.log(country3);


///////////////////////////////////////
//vid - 34: Function Declarations vs. Expressions

// *** function is just a value, So just as a number or a string or a boolean value. function is not a type. It's not like a string or number type but it's also a value. and if it's a value, we can store it in a variable.

//----- Function declaration --  we use the function keyword to declare a function a bit like we declare a variable.

function calcAge1(birthYear) {
  // parameter is kind of placeholder in the function
  return 2037 - birthYear;
}
const age1 = calcAge1(1991); // arguments is the actual value that we use to fill in that placeholder that is the parameter.
console.log(age1);

// **  we can call function declarations before they are defined in the code.

// it's not good idea to do that but can do it if necessary.

const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//------ Function expression --  we write function without a name then we define the parameter and we store it into a variable and that variable will then be the function.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// **  we can not call function expression before they are defined in the code.

// * it's a matter of personal preference that in those two types of function , but function expession is a good choice cause it gives a good code structure.

// ------------------ practice problem ----------------

//vid - 34: Function Declarations vs. Expressions

/*
1. The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

2. To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

3. Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

4. Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

*/

"use strict";

// ---------------- function declaration
function percentageOfWorld1(countryName, populationValue) {
  const percentage = (populationValue / 7900) * 100;
  console.log(
    `${countryName} has ${populationValue} million people, so it's about ${percentage}% of the world population`
  );
}
const country1 = percentageOfWorld1("china", 1441);
console.log(country1);

const country2 = percentageOfWorld1("Bangladesh", 1541);
console.log(country2);

const country3 = percentageOfWorld1("India", 1341);
console.log(country3);



// ------------------ function expression
const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const country4 = percentageOfWorld2(1441);
console.log(country4);

const country5 = percentageOfWorld2(1541);
console.log(country5);

const country6 = percentageOfWorld2(1341);
console.log(country6);




///////////////////////////////////////
// vid - 35: Arrow functions

// * arrow function is a simple form of function expression. this is excellent for simple one-liner functions.

const calcAge3 = (birthYear) => 2037 - birthYear; // here (birthYear) is a parameter and (2037 - birthYear) is statement/calculation. (don't need to write return if it one line statement.) .
const age3 = calcAge3(1991); // pass the argument of parameter
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear; // calculate the age
  const retirement = 65 - age; // retirement age
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

// ** what type of function should i use? should i use arrow function to write in every function. since it's easy to write. but the answer is No. Because there is another fundamental difference between the arrow function and more traditional functions. So function declaration and function expression. (it's a fact that arrow function do not get a so-called "this" keyword.).

// ------------------ practice problem ----------------

// vid - 35: Arrow functions

/*
1. Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
*/

const percentageOfWorld3 = (population) => (population / 7900) * 100;
const percentageOfPortugal = percentageOfWorld3(10);
const percentageOfChina = percentageOfWorld3(1441);
const percentageOfUSA = percentageOfWorld3(332);

console.log(percentageOfPortugal, percentageOfChina, percentageOfUSA);




///////////////////////////////////////
// vid - 36: Functions Calling Other Functions

// fruits need a machine that cuts the fruits first before making juice.
function cutFruitPieces(fruit) {
  return fruit * 4; // cutting the fruit into 4 pieces
}

// make the juice with cut fruits
function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

// ** It's very common for one function to call another function.

// ** It's a very good example to illustrate the don't repeat yourself principle. (the DRY method)

// ------------------ practice problem ----------------

// vid - 36: Functions Calling Other Functions

/*
1. Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
2. To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
3. Call describePopulation with data for 3 countries of your choice.
*/
const percentageOfWorld1 = function (populationValue) {
  const percentage = (populationValue / 7900) * 100;
  return percentage;
};
const describePopulation = function (country, population) {
  const percentageOfPopulation = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentageOfPopulation}% of the world.`;
  console.log(description);
};
describePopulation("Portugal", 10);
describePopulation("China", 1441);
describePopulation("USA", 332);
///////////////////////////////////////
// vid - 37: Reviewing Functions

// one function to call another function.
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));

// especially when we actually receive a number as an input, here we get (birthYear) as a number and therefore it's a good practice to then also return a number .

///////////////////////////////////////
// vid - 38: Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

///////////////////////////////////////
// vid - 39: Introduction to Arrays

// * * * arrays are also an object.
// *** In Javascript everything is object.

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

// how many element are there in the array
console.log(friends.length);

// to get last element in the array
console.log(friends[friends.length - 1]);

// ** we can change the elements of array even it is start with const. but we cannot change the whole array.

// add element to the array
friends[2] = "Jay";
console.log(friends);
friends = ["Bob", "Alice"]; // ❌ cannot do this

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

// to use calcAge function and then store the results of calculating the ages for some of these years into a new Array.
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

// we can place function calls into an Array just fine, because they will produce a value
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

// ------------------ practice problem ----------------

// vid - 39: Introduction to Arrays

/*
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

2. Log to the console whether the array has 4 elements or not (true or false).

3. Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
*/

"use strict";

const populations = [13, 24, 45, 45];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);


///////////////////////////////////////
// vid - 40: Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John"); // add first element
console.log(friends);

// Remove elements
friends.pop(); // Last element remove
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element remove
console.log(friends);

console.log(friends.indexOf("Steven")); // in which position the element is in the array
console.log(friends.indexOf("Bob"));

friends.push(23); // last element add
console.log(friends.includes("Steven")); //the element will simply return true (if the element is in the array) and false if it's not.
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}

// ------------------ practice problem ----------------

// vid - 40: Basic Array Operations (Methods)

/*
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.

2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.

3. Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

4. If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.

5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

"use strict";

let neighbours = ["bangladesh", "india", "thailand", "Sweden"];

console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
  console.log("Probably not a central european country :D");
}

neighbours.indexOf("Sweden");
console.log(neighbours);

neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden;";
console.log(neighbours);


///////////////////////////////////////
// video - 41: Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

///////////////////////////////////////
// vid- 42: Introduction to Objects

// this is an example of data structure - Array

//  In array the order in which we specify the elements matters a lot. we can only access array elements using their order number. We should use arrays for more order Data.

const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// this is an example of data structure - Objects

// the order of this values does not matter at all when we want to retrieve them. We should use objects for more unstructured Data. Data that we actually want to name, then retrieve from the object based on that name.

const jonas = {
  // key: value
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// ------------------ practice problem ----------------

// vid- 42: Introduction to Objects

/*
1. Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).

*/

const myCountry = {
  country: "Sweden",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
};


///////////////////////////////////////
// vid - 43: Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

// retrieve the property from object
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// can add new properties inside object
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);

/*
------- MDN operator Precedense in javascript 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

*/

// ------------------ practice problem ----------------

// vid - 43: Dot vs. Bracket Notation

/*
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

2. Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

*/

"use strict";

const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "Russia"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} countries and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);
myCountry["population"] -= 2;
console.log(myCountry);


///////////////////////////////////////
//vid - 44: Object Methods

/*
 The functions are really just another type of value. and if a function is just a value then that means that we can create a key value pair in which the value is a function. that means we can add functions to objects.
*/

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // 1 st method

  // --- we will write function expression here
  // * (calcAge) is the variable here.
  // it is a function value property

  calcAge: function (birthYeah) {
    return 2037 - birthYeah;
  },

  // 2nd method

  /*
 Here, we should not take birthYear again since it's already in the (calcAge) property, it breaks the rule of (DRY) principle. so we don't need to write this parameter. we will read the birthYear directly from the object. for that we use ('this') keyword. this keyword/variable is basically equal to the object on which the method is called, or in other words , it is equal to the object calling the method. so here is calcAge, and the object that is calling the method is jonas,
*/

  // * with these it will need to declare every time when we want calculate the age so it will be time consuming for bigger problem.

  calcAge: function () {
    console.log(this); // (this) indicates jonas.
    return 2037 - this.birthYeah;
  },

  // 3rd method

  // Instead , we can do is to just calculate the age once, then store it in the object, and then when we need it at a later point, we can then just retrieve the age as a property from the object.

  // we only needed to calculate the age once and then (console.log(jonas.age);) from here we simply retrieve the property that we had already calculated before.

  // ***  so this is the most efficient solution for Dry method.

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  /*
  Exercise: Write a method called getSummary and this method should return a string which should kind of summarize the data about Jonas, (Jonas is a 46-year old teacher, and he has a/no driver's license)

*/
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonas.calcAge(1991)); // ist method
console.log(jonas["calcAge"](1991));

console.log(jonas.calcAge()); // 2nd method

console.log(jonas.age); // 3rd method
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

// ------------------ practice problem ----------------

//vid - 44: Object Methods

/*
1. Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

2. Call the describe method.

3. Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.

*/

"use strict";

const myCountry = {
  country: "finLand",
  capital: "Helsinki",
  language: "finnish",
  population: 6,
  neighbours: ["Norway", "Sweden", "russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}- speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);


///////////////////////////////////////
// vid - 45: Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}

///////////////////////////////////////
// vid - 46: Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// ------------------ practice problem ----------------
// vid - 46: Iteration: The for Loop

/*
1. There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.

*/

"use strict";

for (let voter = 1; voter <= 50; voter++) {
  console.log(
    `(for numbers 1 to 50): 'Voter number ${voter} is currently voting'.`
  );
}

///////////////////////////////////////
// vid - 47: Looping Arrays, Breaking and Continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = []; // creating an empty array (types of the every element of jonas object element ) and creats a new types of array

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  //

  // Filling types array (from jonas array)
  types[i] = typeof jonas[i]; // ist method
  // types[0] = 'string'; //  type[0] = typeof jonas[0];  type[1] = typeof jonas[1]; etc like this...

  // Output : ["string", "string", "number", "string", "object", "boolean"];

  // // 2nd method (this method is more cleaner then the first one)

  types.push(typeof jonas[i]);
  // we now want to pass the element that we do want to add on to the array.

  // Output : ["string", "string", "number", "string", "object", "boolean"];
}
console.log(types);

// //////////////

// canculate the ages for all these four birth years here and want to store them in a new array

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]); // (2037 - years[0] = > 2037 - 1991 => 46) years will be the first element of [ages] array. & continue doing like this with the rest 3 element also.
}
console.log(ages); // answer: [46, 30, 68, 17]

// continue and break

// --- continue = is to exit the current iteration of the loop and continue to the next one.

console.log("--- ONLY STRINGS ---"); // only print the element that are strings.
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

// --- break = is used to completely terminate the whole loop.

console.log("--- BREAK WITH NUMBER ---"); // only print the element that are not number.
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}

// ------------------ practice problem ----------------

// vid - 47: Looping Arrays, Breaking and Continuing

/*
1. Let's bring back the populations array from a previous assignment.

2. Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

3. Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

*/
"use strict";


const percentageOfWorld1 = function (populationValue) {
  const percentage = (populationValue / 7900) * 100;
  return percentage;
};

const percentages = [10, 1441, 332, 83];

const percentages2 = [];

for (let i = 0; i < percentages.length; i++) {
  const perc = percentageOfWorld1(percentages[i]);
  percentages2.push(perc);
}
console.log(percentages2);

///////////////////////////////////////
// vid - 48: Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// Answer will be : [true, ['Michael', 'Peter', 'Steven'], 'teacher', 2037 - 1991, 'Schmedtmann', 'Jonas']
// 0, 1, ..., 4
// 4, 3, ..., 0  (backwards print)

for (let i = jonas.length - 1; i >= 0; i--) {
  // (jonas.length - 1) is the count of backwards
  console.log(i, jonas[i]); // here i is the counter value - 0, 1, 2, 3 & jonas[i] is the object value
}

// ---- Example - we have 3 different exercises , and we want to repeat each of them 5 times.

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

// ------------------ practice problem ----------------

// vid - 48: Looping Backwards and Loops in Loops

/*
1. Store this array of arrays into a variable called listOfNeighbours:

[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

2. Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.

3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉

*/

"use strict";

let listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}


///////////////////////////////////////
// vid - 49: The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// while loop - we can only specify a condition. A while loop is more versatile than the for loop. which means it can be used a larger variety of situations.

// A while loop does really not have to depend on any counter variable. Whenever you do need a loop without a counter, you can reach for the while loop.

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

// *** In while loop we dont need counter variable means there no fixed number, that needs to be looped. It' use in a random number.

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  // if the dice number appears 6
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// ---------------------- Practice Problem --------------
// vid - 49: The while Loop

/*
1. Recreate the challenge from the lecture Looping Arrays, Breaking and Continuing, but this time using a while loop (call the array percentages3).

2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/
"use strict";

// the while loop
const population = [10, 1441, 332, 83];
let percentages3 = [];

let i = 0;
while (i < population.length) {
  const perc = percentageOfWorld(population[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
///////////////////////////////////////
// vid - 50: Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]); // for each loop bills and tip will have new value.
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

// --------------------------------------------------------------------------------------------------------
// ------------ Lecture Practice from lec - 3(Loops and Strings) from JS in (Shradha Khapra) ----------------------

// -------------- loops in JS ---------------

// Loops are used to execute a piece of code again & again.

// -------- for Loop:
for (let i = 1; i <= 5; i++) {
  console.log("apna college");
}
console.log(i); // ❌ i is in block scope , it's result wont print here, only print inside loop bracket.

// calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log("Sum = ", sum);
console.log("loop has ended");

// calculate sum of 1 to n
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum = ", sum);
console.log("loop has ended");

// --------- Infinite Loop (∞): A loop that never ends // ❌ we should never do it in a program , it will crush computer to use all space.

// for (let i = 1; i >= 0; i++) {
//   console.log("i", i);
// }

// ------------ While Loop

// print 1 to 5
let i = 1;
while (i <= 5) {
  console.log("i =", i);
  console.log("Apna college");
  i++;
}
// in while loop theres no guarantee that the loop will run since the condition is in the fast of the element
let i = 20;
while (i <= 10) {
  console.log("Apna College");
  i++;
} // it won't run since the condition is not true.

// ---------- do-while Loop
// in do-while loop theres guarantee that the loop will run atleast 1 time since the condition is in the last of the element and after condition need to give(;).
do {
  // do some work
} while (condition);

// ---------------

let i = 20;
do {
  console.log("Apna College");
  i++;
} while (i <= 10); // it will print "Apna College" only 1 time before reaching the loop

// * print 1 to 5
let i = 1;
do {
  console.log("i=", i);
  i++;
} while (i <= 5);

// ----------- for-of loop

// only use it for (strings and arrays) but do not use for objects.

// these loops don't do any differnt work, they just help us to iterate / to loop on some special data type

// for - of (helps us loop over strings and arrays) + inside for of loop, the value inside i is automatically entered and the updates of i also automatic, we don't need to see any initialization, updates or stopping conditions here, automatically for-of loop will see for us, we just need to print the (i);

/*

for (let val of strVar) {
  // do some work
}

*/

// example
let str = "ApnaCollege";

for (let i of str) {
  // iterator ==> character (inside i/iterator the character will come)
  console.log("i = ", i);
}

// calculate the length of the string
let str = "Javascript";

let size = 0;
for (let i of str) {
  console.log("i=", i);
  size++; // everytime the loop run it will increase size by one
}
console.log("string size = ", size); // 10

// --------- for-in loop

// used for objects : returns keys from object

/*

for(let key in objVar){
  // do some work
}

*/

let student = {
  name: "Rahul Kumar",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};
for (let i in student) {
  console.log(i);
}

// or value of the key  (access key-value pairs)
for (let key in student) {
  console.log("key=", key, " value=", student[key]);
}

// -------------- practice Question of loops ------------

// 1: Print all even numbers from 0 to 100

for (let num = 0; num <= 100; num++) {
  console.log("num =", num);

  if (num % 2 === 0) {
    // even number
    console.log("num =", num);
  }
}

//

for (let num = 0; num <= 100; num++) {
  console.log("num =", num);

  if (num % 2 !== 0) {
    // odd number
    console.log("num =", num);
  }
}

// 2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;

let userNum = prompt("Guess the game number : ");
console.log(userNum);

// game
while (userNum != gameNum) {
  // whatever input comes from the prompt , we have it in the form of a string. so prompt always return string, that's why (!== [strict equal] deya jabena), we can give (!==) if we give the value of (gameNum = "25");

  userNum = prompt("You entered wrong number. Guess again : ");
}
console.log("congratulations, you entered the right number");

// ----------------- Strings in JS ------------------
// String is a sequence of characters used to represent text(name, sentence, paragraph.

// those string we create in javascript, all Strings have some in built properties and some inbuilt functions. those are the inbuilt functions which we call methods.

// ---- Create String -----
let str = "Apna College"; // can use "" & ''

// ----- String Length -----
str.length; // 11 // (length => is the inbuilt property)

// ----- String Indices (position count start from 0) -----
str[0], str[1], str[2];

let str = "ApnaCollege";
console.log(str[8]); // e

// ---------------------- Template Literals in JS -----------------------------
// A way to have embedded expressions in strings.
let sentence = `this is a template literal`;
console.log(typeof sentence);

// -------- string Interpolation
// to create strings be doing substitution of placeholders
`string text ${expression} string text.`;

// normal way to print values
let obj = {
  item: "pen",
  price: 10,
};
console.log("the cost of", obj.item, "is", obj.price, "rupees"); // the cost of pen is 10 rupees.

// template literal way to print values
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// adding expressins in template literals
let specialString = `This is a template literal ${1 + 2 + 3}`;
console.log(typeof specialString);

// ------------ escape characters
// escape characters are also part of a string (\n => next line), (\t => tab line)

console.log("Apna\nCollege");
let str = "Apna\tCollege";
console.log(str.length); // 12

// ---------------------- String Methods in JS

/*
 these are built-in functions to manipulate a string, if we apply any inbuilt method in a string, the original string will remain the same, it will create a new string with the new value.

 -- Strings are immutable(that does not change) in Javascript => 
-- even a small string like "abc" if we want to make it (abc) then we have to create a new string, with the new change. never happen any change in original string, whenever any changes come, always a new string will be created.


-- str.toUpperCase()

-- str.toLowerCase()

-- str.trim()  // removes whitespaces from starting and end.

-- str.slice(star, end?) // returns part of string (end? is non-inclusive means it will not be included)

-- str1.concat(str2) // joins str2 with str1

-- str.replace(searchVal, newVal)

-- str.charAt(idx)

 */

// --- toUpperCase()
let str = "ApnaCollege";
let newStr = str.toUpperCase();
console.log(str);
console.log(newStr); // APNACOLLEGE

// --- toLowerCase()
let str = "ApnaCollege";
let newStr = str.toLowerCase();
console.log(str);
console.log(newStr); // apnacollege

// --- trim() method
let str = "    Apna College   JS    ";
console.log(str.trim());

// -- str.slice(star, end?)
let str = "0123456";
console.log(str.slice(1, 3)); //12
//
let str = "hello";
console.log(str.slice(0, 3)); //hel
//
let str = "hello";
console.log(str.slice(1)); // ello  // if we give only start position by default it will start and till the last it will print.

// ----- concat()
let str1 = "apna";
let str2 = "college";
let res = str1.concat(str2);
let res2 = str2.concat(str1);
console.log(res);
console.log(res2);

let res3 = str1 + str2; // can also use (+) to concat
console.log(res3);

let res4 = "I am learning coding from " + str1 + str2;
console.log(res4);

let res5 = "hello" + 123;
console.log(res5);

// ------------- str.replace(searchVal, newVal)
let str = "hello";
console.log(str.replace("h", "y"));
console.log(str.replace("lo", "p")); // for replace only one matching value will replace
console.log(str.replaceAll("lo", "p")); // will replace all matching values

// ------------------- str.charAt(idx)

// if you want to find any character on the index, get out and get a return

let str = "ILoveJS";
str = str.replace("I", "S");
console.log(str); // SloveJS
console.log(str.charAt(2)); //o
console.log(str.charAt(3)); //v

//-------------------- Practice Question ---------------------
/*
1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

      eg: user name = "shradhakhapra", username should be "@shradhakhapra13".
*/

let fullName = prompt("enter your fullname without spaces");
console.log(fullName);
let userName = "@" + fullName + fullName.length;
console.log(userName);

// ------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------
// ------------ Lecture Practice from lec - 4(Arrays) from JS in (Shradha Khapra) ----------------------

// ------------- Arrays in JS
// Collection of items

// --- Create Array  (array itself is object type => index/position : value)  -- array in JS is mutable(means can change)
let heroes = ["ironman", "hulk", "thor", "batman"];
console.log(heroes);
console.log(typeof heroes);

let marks = [96, 75, 48, 83, 66];

console.log(marks);
console.log(marks.length); // property

//arr.length = last index + 1;
console.log(marks.length); // 5

console.log(typeof marks);

let info = ["rahul", 86, "Delhi"];


// ---- Array Indices

arr[0], arr[1], arr[2] ...

// add or replace new number

let marks = [96, 75, 48, 83, 66];
marks[0] = 66;
console.log(marks);

// find out the position number
console.log(marks[1]); // 75
console.log(marks[10]); // undefined


// -------- Looping over an array
// Print all elements of an array

let heroes = ["ironman", "hulk", "thor", "batman", "spiderman", "gentlemman"];

// standard way to write for loop (i = idx)
for(let i = 0; i < heroes.length; i++){
  console.log(heroes[i]);
}


// if we give inx = 1, then in console (idx - 1)
for(let idx = 1; idx <= heroes.length; idx++){
  console.log(heroes[idx - 1]);
}

// we prefer (for-of) loop in arrays to print all numbers

for(let hero of heroes){
  console.log(hero);
}


// 

let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

for(let city of cities){
  console.log(city.toUpperCase());
}


// ---------------- Practice Question ---------------

// 1. for a given array with marks of students => [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;

for(let val of marks){
  sum += val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);


// 2. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer



// * to solve this problem we can't use for-of loop because for-of loop gives us the value directly but it does not give the index. but changes inside the array, but to do this we need to know the index on which index do we want to change. We cannot make changes only on the basis of value inside the index then, so, to solve this question, we need to use a (for loop) or a (while loop) or use a (do while loop), inside which we will place our index, so that we can track the index inside it as well. We can be tracked indirectly in (for-of loop) also,


// --- using for-of loop 
let items = [250, 645, 300, 900, 50];
let i = 0;

for(let val of items){
  console.log(`value at index ${i} = ${val}`);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}


// ---- using for loop
let items = [250, 645, 300, 900, 50];
for(let i = 0; i < items.length; i++){
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);



// --------------- Arrays in JS

// ---- Array Methods

/*
-- Push(): add to end

-- Pop(): delete from end & return

-- toString(): converts array to string

-- Concat(): joins multiple arrays & returns result

-- unShift(): add to start

-- shift(): delete from start & return

-- Slice(): returns a piece of the array  (doesnot change in original array)
            slice(startIdx, endIdx)

-- Splice(): change original array (add, remove, replace)
            splice(startIdx, delCount, newEl1)

*/


// ------- Push(): add to end

let foodItems = ["potato", "apple", "litchi", "tomato"];
foodItems.push('chips');
foodItems.push("burger", "paneer");
console.log(foodItems);


// ------- Pop(): delete from end & return
let foodItems = ["potato", "apple", "litchi", "tomato"];
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItem);


// ------- toString(): converts array to string
let foodItems = ["potato", "apple", "litchi", "tomato"];
let marks = [97, 86, 54, 36];
console.log(foodItems);
console.log(foodItems.toString());
console.log(foodItems);


// ------- Concat(): joins multiple arrays & returns result
let marvelHeroes = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];

let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
console.log(heroes);


// --------- unShift(): add to start
let marvelHeroes = ["thor", "spiderman", "ironman"];
marvelHeroes.unshift("antman");


// -- shift(): delete from start & return
let val = marvelHeroes.shift();
console.log("deleted", val);

console.log(marvelHeroes);


//-- Slice(): returns a piece of the array  (doesnot change in original array)
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. strange"];
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1, 2)); // in slice method ending point doesn't include.
console.log(marvelHeroes.slice(1, 3));


// -- Splice(): change original array (add, remove, replace)

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);  // start from position 2, add 2 elements, add 101 & 102
console.log(arr);

// * only add elements, not anything delete
arr.splice(2, 0, 101); // 101 element add to index/position no. 2, deletes 0 elements, add value 101 
console.log(arr); // [1, 2, 101, 3, 4, 5, 6, 7


// * only delete element (can delete 1 element or multiple element)
let arr = [1, 2, 3, 4, 5, 6, 7];
arr splice(3, 1); // index number 3 er delete 1 element


// * only replace element
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 1, 101); // go to index number 3 and replace 1 element by 101



// * splice acts like slice
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(4);  // [5, 6, 7] (element 4 theke start korse and er porer shob element delete kore dise) these are the delete elements
console.log(arr); // [1, 2, 3, 101] (remaining elements)

// if we pass only 1 element that means from that index onwards delete all the elements.

arr.splice(); // [] no items will delete




// ------------------- Practice Problem ------------------------------

/*
  1. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

  a. Remove the first company from the array

  b. Remove Uber & Add Ola in its place

  c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a)
companies.shift();
console.log(companies);

// b)
companies.splice(2, 1, "Ola");
console.log(companies);

// c)
companies.push("Amazon");
console.log(companies);