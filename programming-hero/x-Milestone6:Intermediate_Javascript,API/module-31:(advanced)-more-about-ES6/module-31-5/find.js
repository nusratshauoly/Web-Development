const products = [
  {id: 1, name: 'laptop', price: 65000},
  {id: 1, name: 'mobile', price: 800000},
  {id: 1, name: 'watch', price: 30000},
  {id: 1, name: 'tablet', price: 23000},
];
const cheap = products.find(product => product.price < 40000);
console.log(cheap);



// -------------

const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// (find) 5 diye divide korle answer will be 0 
const fives = numbers.find(num => num % 5 === 0);
console.log(fives);


const numbers1 = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// (filter) 5 diye divide korle answer will be 0 
const fives1 = numbers1.filter(num1 => num1 % 5 === 0);
console.log(fives1);

// 1. for loop
let array = [10, 20, 30, 40];
for (let i = 0; i <= array.length; i++){
    console.log(array[i]);
}


// 2. do...while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5)
// 3. while loop
let array = [10, 20, 30, 40];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
// 4. for...of
let array = [10, 20, 30, 40];
for (let i of array) {
    console.log(i);
}
// 5. map() method
const names = ['lincoln', 'danial', 'tahina', 'meils'];
let newArr = names.map(index) => console.log(index);
// 6. forEach()
let array = [10, 20, 30, 40];
array.forEach((index) => {console.log(index)});


// 7. array.filter()
const arr = [15, 2, 8, 36, 11, 4, 6, 27];
const smallNums = arr.filter(num => {
    return num < 10;
});
//  smallNums : [2, 8, 4, 6];


// 8. array.find()
const arr = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const smallNums = arr.find(num => {
    return num < 10;
});

// smallNums : 2;



// ------------------------- reduce -------------------------

// shob elements theke niye initial value set kore
const numbers = [4, 5, 7, 1, 2, 66];
const total = numbers.reduce((previous, current) => previous + current, 0);    // reduce((callbackfunction: previousValueNumber, currentValueNumber) => previousValueNumber + currentValueNumber, initial value);
console.log(total);


// 
const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum);



// ----------------------- array of objects.js --------------------
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'mac', price: 150000},
];
// map.js  (to get the each products name)
const names = products.map(product => product.name);
console.log(names);

const prices = products.map(p => p.price);
console.log(prices);


// forEach (smae task as map but it wont return)
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'mac', price: 150000},
];
products.forEach(p => console.log(p.id));


// filter  (return the matched elements on condition)
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'mac', price: 150000},
];
const expensive = products.filter(p => p.price > 50000);
console.log(expensive);


// find (return the matched first element)
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'mac', price: 150000},
];
const affordable = products.find(p => p.price < 50000);
console.log(affordable);

// reduce 
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'mac', price: 150000},
];
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total);



// ------------------- 6 ways to loop through an array ----------------

//  1. for loop
let array = [10, 20, 30, 40];
for (let i = 0; i <= array.length; i++){
    console.log(array[i]);
}

// 2 do...while
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// while loop
let array = [10, 20, 30, 40];
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

// for...of
let array = [10, 20, 30, 40];
for (let i of array) {
    console.log(i);
}


// map method
const names = ['lincoln', 'Daniel', 'tabiha', 'leon'];
let newArr = names.map((index) => console.log(index));


// forEach()
let array = [10, 20, 30, 40];
array.forEach((index) => {console.log(index)});


// array.filter()
const arr = [15, 2, 8, 36, 11, 4, 6, 27];
const smallNums = arr.filter(num => {
    return num < 10;
})

// array.find()
const arr = [15, 2, 8, 36, 11, 4, 6, 27];
const smallNums = arr.find(num => {
    return num < 10;
})

// array.reduce
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 75000},
    {id: 4, name: 'mac', price: 150000},
];
const total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(total);