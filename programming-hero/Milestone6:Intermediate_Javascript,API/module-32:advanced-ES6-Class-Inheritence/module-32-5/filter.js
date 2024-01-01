const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
// will get the numbers which will fullfil the conditions
// big numbers
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums); 

// small numbers
const tiny = numbers.filter(n => n < 10);
console.log(tiny);

// even numbers
const even = numbers.filter(num => num % 2 === 0);
console.log(even);


// *** another example
const products = [
   {id: 1, name: 'laptop', price: 45000},
   {id: 1, name: 'mobile', price: 800000},
   {id: 1, name: 'watch', price: 35000},
   {id: 1, name: 'tablet', price: 23000},
];
// 100000 er cheye beshi
const expensive = products.filter(product => product.price > 100000);
console.log(expensive);

// 100 er cheye beshi
const lessExpensive = products.filter(product => product.price > 100);
console.log(lessExpensive);

// 100 er cheye kom
const leastExpensive = products.filter(product => product.price < 100);
console.log(leastExpensive);