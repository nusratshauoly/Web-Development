/*
Purpose:
1. get a array
2. for every elements of the array do something(/ 3)
3. store the result in an array
4. return the result array
*/

// 1. divided by 2
const numbers = [12, 56, 87, 44];
const half = numbers.map(n => n / 2);
console.log(half);


// 2. divided by 3
const numbers1 = [12, 56, 87, 44];
const thirds = numbers1.map(x => x / 3);
console.log(thirds);

// 3. applying map in strings
const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
// first letter of each friend
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);

// name length of each friends
const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
const nameLengths = friends.map(friend => friend.length);
console.log(nameLengths);

// 4. applying map in array object
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},   
]
// finding names of products
// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);

// finding prices of products
const prices = products.map(product => product.price);
console.log(prices);