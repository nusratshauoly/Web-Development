/*
2. write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`;
*/
let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j); // every time we change the loop, we push the value in (countdown) array
  j--; // countdown from reverse
}
console.log(countdown);

/*
3. write a `do - while` loop that prompts a user to enter their favourite tea type until they enter "stop". Store each tea type in an array named "teaCollection".
*/

// A do-while loop ensures the code inside the block runs at least once before checking the condition.

let teaCollection = []; // This array will be used to store the tea types entered by the user.
let tea; // This will hold the user’s input from the prompt() function.
do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish`);

  if (tea !== "stop" && tea !== null) {
    // The entered tea type is not "stop", so "stop" is not stored in the array.  && The entered tea type is not null
    teaCollection.push(tea); // If both conditions are met, the entered tea type is added to the teaCollection array using .push(tea).
  }
} while (tea !== "stop"); // The loop continues as long as the user does not enter "stop".

console.log("Your tea collection:", teaCollection); // After the loop ends, this line prints the final list of entered tea types to the console.

/*
4. write a `do-while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`
*/
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

/*
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  /*  let takeNumber = numbers[i] * 2;
   multipliedNumbers.push(takeNumber); */

  //    or
  multipliedNumbers.push(numbers[i] * 2);
}
console.log(multipliedNumbers);
/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let i = 0; i < cities.length; i++) {
  let myCity = cities[i]; // cities[i] retrieves the city at index i.
  cityList.push(myCity); // Adds myCity to the cityList array.
}
console.log(cityList);

// alternative using for . of loop

// for...of is generally preferred for iterating over arrays unless you need the index.

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let city of cities) {
  cityList.push(city);
}

console.log(cityList);
