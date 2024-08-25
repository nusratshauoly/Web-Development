// arrow function
const add = (first, second) => first + second;

// implicit function(means the process will be done in inner function)
const getFullName = (first, last) => first + ' ' + last;
// 
const multiply = (a, b) => a * b;
const result = multiply(7, 8);
console.log(result);


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

// 
const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;


// this is called implicit return
// single / one parameter
// jodi only 1 ta value return korte chai 
const getAge = (person) => person.age; 
const student = {name: 'anata', age: 45};
const age = getAge(student);
console.log(age);


// 
const getThird = numbers => numbers[2];
const third = getThird([5, 9, 88, 2, 13]);
console.log(third);

const doubleIt = num => num * 2;

//  no parameter
const getPI = () => Math.PI;
console.log(getPI());

// large arrow function . If you want to get anything returned from this function then you have to use the return keyword. 
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}