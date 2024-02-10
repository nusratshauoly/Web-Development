/*
Purpose:
1. get a array
2. for every elements of the array do something(* 2)
3. store the result in an array
4. return the result array
*/


//1. solve this problem in a normal way ...
const numbers = [2, 8, 4, 6, 3];

// ei numbers guloke loop kore double kore 1 ta result dekhabo
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);




// 2. solving this problem in function
const numbers = [2, 8, 4, 6, 3];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        // calling the (doubleIt) function
        const doubled = doubleIt(number); 
            output.push(doubled);
    }
    return output;
}

// ekhane (const doubled = number * 2;) doubled k amra ekta normal function er vitor rakhte pari + shei function ta call korte pari 
function doubleIt(number) {
    return number * 2;
}

const result = getDoubles(numbers);
console.log(result);




// 3. solving this problem in arrow function
const numbers = [2, 8, 4, 6, 3];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        // calling Arrow function
        const doubled = doubleItArrow(number); 
        output.push(doubled);
    }
    return output;
}
// ekhane (const doubled = number * 2;) doubled k amra ekta arrow function er vitor o rakhte pari + shei function ta call korte pari (can use arrow function instead of normal fnction).
const doubleItArrow = number => number * 2;

const result = getDoubles(numbers);
console.log(result);




// 4. solving this problem in map function

const numbers = [2, 8, 4, 6, 3];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        // calling arrow function
        const doubled = doubleItArrow(number); 
        output.push(doubled);
    }
    return output;
}
// ekhane (const doubled = number * 2;) doubled k amra ekta map function er vitor o rakhte pari + shei function ta call korte pari (can use arrow function instead of normal function).
const doubleItArrow = number => number * 2;
const makeDouble = numbers.map(doubleItArrow); 

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);





// 5. using map directly without calling any function

const numbers = [2, 8, 4, 6, 3];
const makeDoubleDirect = numbers.map(num => num * 2); // using map directly 
console.log(makeDoubleDirect);
    

// 6. directly give arrow elements in map 
const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTimes);




