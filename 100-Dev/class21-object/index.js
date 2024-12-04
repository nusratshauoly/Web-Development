// ------------ array indexing ---------------
let newArr = ['Zebra', , true, 21];

console.log(newArr[0]);  // Zebra
console.log(newArr[1]);  // undefined
console.log(newArr[2]);  // true
console.log(newArr[3]);  // 21


//  ------------- insert a new element in Array --------------
// elements canbe updated by using the index at that position
let newArrs = ['Zebra', , true, 21];
newArrs[1] = 'Bob';
console.log(newArrs);  // ['Zebra', 'Bob', true, 21]


// you can overwrite whole arrays by assigning an array to a different array
let cars = ['Honda', 'Toyota', 'Ford', 'Tesla'];
let nums = [1, 2, 3];
cars = nums;
console.log(cars);  // [1, 2, 3]


// ------------------ Array Length -----------------
//  How do you determine how many elements are im your array?
console.log(newArr.length);   // 4
 

// ---------------- Array Iteration ------------------
// Iterates through an array passing in the value and index of each element
let bestColors = ['green', 'blue', 'yellow', 'black'];

for(let i = 0; i < bestColors.length; i++){
    console.log(bestColors[i]);
}


// ---------- using (forEach) for array iteration ----------
let bestColor = ['green', 'blue', 'yellow', 'black'];
bestColor.forEach((x,i) => console.log(x));


// --------------- other arrays methods --------------------
// shift() => remove item from the beginning of an array
let bestRappers2020 = ['6ix9ine', 'Polo G', '6ix9ine']
let removed = bestRappers2020.shift();
console.log(bestRappers2020);  // ['Polo G', '6ix9ine']


// unshift() => add item from the beginning of an array
let bestRappers202 = ['Polo G'];
let remove = bestRappers202.unshift('Dylan');
console.log(bestRappers202);  // ['Dylan', 'Polo G']




// pop() => remove item from the end of an array
let bestRapper2020 = ['Polo G', '6ix9ine']
let removedAgain = bestRapper2020.pop();
console.log(bestRapper2020);  // ['Polo G']


// push() => add item from the end of an array
let bestRapper200 = ['Dylan', 'Polo G']
let removedAgains = bestRapper200.pop('Dylan');
console.log(bestRapper200);  // ['Dylan', 'Polo G', 'Dylan']



//  other Arrays methods  => check on chatgpt
let bestSingers = ['Dylan', 'Polo G', 'Dylan'];
let bestRappersAllTime = bestSingers.map(x => 'Dylan');  // map is going to run once for each element in the array and returns a brand new array
bestRappersAllTime.unshift('Dylan'); 
bestRappersAllTime.push('Dylan');
console.log(bestRappersAllTime);  // ['Dylan', 'Dylan', 'Dylan', 'Dylan', 'Dylan']





// ---------------------- Objects _-----------------------

/*
    -- Objects are a collection of variables and functions!
    -- Objects represents the attributes and behavior of something used in a program
    -- Object variables are called properties and object functions are called methods
    -- Objects store "keyed" collections 
*/

// ---- object example ----
let stopwatch = {}
stopwatch.currentTime = 12;  // (currentTime) is a property // we can use (.) dot notation to add a property or add a method  // when individual variables tied to our objects we call those properties.
stopwatch.tellTime = function(time){   // (tellTime) is a method .  // ? How do we know the tellTime is a method, whenever you have an object and setting something about it to a function then it's a method.  // when functions are tied to objects ,we call them methods. 
    console.log(`The current time is ${time}.`);
}
stopwatch.tellTime(stopwatch.currentTime); //we can use (.) dot notation to consume a property / add a method // ? how could i tell (tellTime) is a method even i didn't see the function above .because it has tellTime() parenthesis().