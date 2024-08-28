
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
// each product k console.log korbo.
products.forEach(product => console.log(product));



const friends = ['tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
friends.forEach(friend => console.log(friend)); 


// ------------------------- foreach ------------
// map use korle each element er upor operation korar por return kore
//  forEach use korle each element er upor operation korar por return korena
const numbers = [1, 5, 6, 4, 15];
const result = numbers.forEach(n => console.log(n));
const result1 = numbers.forEach(n => {

});
console.log(result1);

// -------------------------- filter.js -----------------------
// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];
const selected = players.filter(p => p > 70);
const selected1 = players.filter(p => p > 80);
const selected2 = players.filter(p => p % 2 === 1);
console.log(selected);
console.log(selected1);  // will give empty array
console.log(selected2);

const friends = ['Tom', 'John', 'Michael', 'Oliver', 'Tim', 'Josna'];
const oddFriends = friends.filter(friend => friend.length > 4);
console.log(oddFriends);


// --------------------- find.js ------------------------

// if the condition fulfilled still will take the first element
const players = [75, 65, 67, 72, 55, 59];
const selected = players.find(player => player > 70);
console.log(selected);
const selected1 = players.find(player => player > 80);
console.log(selected1); // will give undefined

