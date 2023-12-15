// arrow function
const add = (first, second) => first + second;

// implicit function(means the process will be done in inner function)
const getFullName = (first, last) => first + ' ' + last;
// 
const multiply = (a, b) => a * b;
const result = multiply(7, 8);
//console.log(result);


// 
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// No parameter arrow function: kono parameter jodi na thake or dorkar na hoy
const getPie = () => 3.1416;


// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version : 1 ta parameter thakle () na dileo hobe:
const fiveTimes = num => num * 5;


// multiline arrow function : (jodi 1 line code hoy tahole just (=>) er por likhlei hoy), (r jodi multiline code hoy tahole (=>) er por {} diye likhte hoy).
// in multipline function if you want to return something, use the return 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}

