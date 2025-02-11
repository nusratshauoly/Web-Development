// -------------- for loop --------------

/*
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`.
    Store all teas before `"chai"` in a new array named `selectedTeas`.
*/

let teas = ['green tea', 'black tea', 'chai', 'oolong tea'];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === 'chai') {
    break;
  }
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);
/*
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`.
    Store the other cities in a new array named `visitedCities`.
*/
let cities = ['London', 'New York', 'Paris', 'Berlin'];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === 'Paris' || cities[i] === 'paris') {
    continue;
  }
  visitedCities.push(cities[i]);
}
console.log(visitedCities);
/*

// ----------------- for-of ---------------

3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` in an array named `smallNumbers`.
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (let num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
console.log(smallNumbers);

/*
4. Use a `for-of loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`.  
   Store the other teas in an array named `preferredTeas`.
*/
let teaTypes = ['chai', 'green tea', 'herbal tea', 'black tea'];
let preferredTeas = [];

for (let tea of teaTypes) {
  if (tea === 'herbal tea') {
    continue;
  }
  preferredTeas.push(tea);
}
console.log(preferredTeas);

// --------------- for-in -----------------

/*
5. Use a `for-in` loop to loop through an object containing city populations.
    Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

    let citiesPopulation = {
        "London": 8900000,
        "New York": 8400000,
        "Paris": 2200000,
        "Berlin": 3500000
    };
*/
let citiesPopulation = {
  London: 8900000,
  'New York': 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulations = {};

for (const city in citiesPopulation) {
  // we want to check for a condition
  if (city == 'Berlin') {
    break;
  }
  // key = value
  cityNewPopulations[city] = citiesPopulation[city]; // (to push an object we have to create a value and a object)
}
console.log(cityNewPopulations);

// keys of Object
console.log(Object.keys(citiesPopulation));
// values of Object
console.log(Object.values(citiesPopulation));

/*
6. Use a `for-in` loop to loop through an object containing city populations.
    Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = [];

for (let city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}
console.log(largeCities);

// ---------------- forEach loop ---------------
/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
    Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`
*/

let teaCollection = ['earl grey', 'green tea', 'chai', 'oolong tea'];
let availableTeas = [];

// inside forEach method you have to write function
teaCollection.forEach(function (tea) {
  if (tea === 'chai') {
    // (tea) is a variable which go through each of the (teaCollection) values
    return; // if it's find chai it will stop
  }
  availableTeas.push(tea); // if not find 'chai' it will push the type of tea
});
console.log(availableTeas);

/*
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`
    Skip `"Sydney"` and store the other cities in a new array named `travelCities`.
*/
let myWorldCities = ['Berlin', 'Tokyo', 'Sydney', 'Paris'];
let travelCities = [];

myWorldCities.forEach(function (city) {
  if (city === 'Sydney') {
    return;
  }
  travelCities.push(city);
});
console.log(travelCities);

// ----------------- for loop ---------------

/*
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`.
    Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubleNumbers`.
*/
let myNumbers = [2, 5, 7, 9];
let doubleNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 7) {
    continue;
  }
  doubleNumbers.push(myNumbers[i] * 2);
}
console.log(doubleNumbers);

/*
10. Use a `for-of` loop to iterate through the array `["chai", "green-tea", "black-tea", "jasmin tea", "herbal tea"]`
    and stop when the length of the current tea name is greater than 10.
    Store the teas iterated over in an array named `shortTeas`.
*/
let teaNames = ['chai', 'green-tea', 'black-tea', 'jasmin tea', 'herbal tea'];
let shortTeas = [];

for (let tea of teaNames) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
