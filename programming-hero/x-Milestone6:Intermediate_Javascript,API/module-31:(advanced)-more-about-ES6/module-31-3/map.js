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




// -----------------------------------------------------------
// normal loop (array er eack element k double korbo)
const numbers = [4, 5, 2, 8, 10];

const doubled = [];  // keep the output of the double number here
for (const num of numbers) {
    const double = num * 2;
    doubled.push(double);
}
console.log(doubled);



// map => loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

// we can also doubled in another way using map call the function inside map 
const numbers = [4, 5, 2, 8, 10];
function doubleIt(num) {
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);


// we can also write in a short way of map
const numbers2 = [4, 5, 2, 8, 10];
const double2 = n => n * 2;
const output2 = numbers2.map(double2);
console.log(output2);

// or this way of map in a short way
const numbers3 = [4, 5, 2, 8, 10];
const output3 = numbers3.map(n => n * 2);
console.log(output3);



// ------------------------- more map ----------------------
const numbers4 = [4, 5, 2, 8, 10];

const doubled4 = numbers4.map(num => num * 2);
console.log(doubled4);
const fiveBonus = numbers4.map(num => num + 5);
console.log(fiveBonus); 
const halves = numbers.map(num => num / 2);
console.log(halves);

const friends = ['tom', 'john', 'michael', 'oliver'];
const lengths = friends.map(frnd => frnd.length);
console.log(lengths);

// to get the every names first letter
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);



