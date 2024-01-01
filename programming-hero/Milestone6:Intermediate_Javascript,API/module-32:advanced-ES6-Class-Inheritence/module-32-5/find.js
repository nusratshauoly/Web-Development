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