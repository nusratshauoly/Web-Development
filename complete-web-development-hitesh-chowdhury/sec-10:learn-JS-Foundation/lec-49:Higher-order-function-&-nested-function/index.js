// ------- operator precedence in javascript ---------
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/

// ---------- How JS works behind the scenes --------
/*
https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
*/

// ---------- this method in JS -----------
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
*/

// -------------- higher order function -----------
/*
https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
*/

// --------------- nested function in JS -----------------
/*
https://www.geeksforgeeks.org/javascript-nested-functions/
*/

// ----------------------------------------

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/

// Understanding the Requirement:
// You need to create a function named processTeaOrder. This function will take another function as an argument. This means processTeaOrder is a higher-order function—a function that takes another function as a parameter.

// Inside processTeaOrder, you need to call the passed function (makeTea) with the argument "earl grey", and then return the result.

/*
Step-by-Step Breakdown:
1. Define processTeaOrder, which takes makeTea as a parameter.
2. Call makeTea("earl grey") inside processTeaOrder.
3. Return the result of makeTea("earl grey").
*/

// Function definition: makeTea takes a parameter 'typeOfTea'
function makeTea(typeOfTea) {
  // Returns a string that includes the type of tea passed as an argument
  return `maketea: ${typeOfTea}`;
}

// Function definition: processTeaOrder takes another function as a parameter
function processTeaOrder(teaFunction) {
  // Calls the passed function 'teaFunction' with the argument "earl grey"
  // In this case, 'teaFunction' will be 'makeTea'
  return teaFunction("earl grey"); // returning a function
}

// Calling processTeaOrder and passing 'makeTea' as an argument
// 'processTeaOrder(makeTea)' calls 'makeTea("earl grey")' internally
let order = processTeaOrder(makeTea); // passing a function as a parameter

// Prints the returned value of 'processTeaOrder(makeTea)', which is "maketea: earl grey"
console.log(order); // Output: "maketea: earl grey"

// ------------------------------------------------------------------------------

/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

/*
The question is asking you to create a higher-order function in JavaScript. Let's break it down step by step.

Understanding the Requirements
Create a function named createTeaMaker

This function should return another function (a function inside a function).
The returned function should take one parameter, teaType

This parameter will represent the type of tea (e.g., "green tea", "black tea", etc.).
The returned function should return a message

The message format should be "Making <teaType>".
Example: If teaType is "green tea", it should return "Making green tea".
Store the returned function in a variable named teaMaker

When we call createTeaMaker(), it should return the inner function.
We store that returned function in a variable.
Call teaMaker with "green tea"

It should return "Making green tea".
*/

// Define a function named createTeaMaker
function createTeaMaker() {
  // Return an inner function that takes teaType as a parameter
  return function (teaType) {
    // Return a formatted string using the teaType argument
    return `Making ${teaType}`;
  };
}

// Call createTeaMaker(), which returns the inner function, and store it in teaMaker
let teaMaker = createTeaMaker();

// Call the returned function stored in teaMaker with "green tea" as the argument
let result = teaMaker("green tea");

// Log the result to the console
console.log(result); // Output: "Making green tea"
