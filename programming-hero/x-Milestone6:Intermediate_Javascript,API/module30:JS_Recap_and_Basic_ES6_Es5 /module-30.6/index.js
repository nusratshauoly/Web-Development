// spread operator


// find a maximum number 
const max = Math.max(12, 85, 999, 78);
console.log(max);
const numbers = [12, 85, 999, 78];
const largest = Math.max(...numbers);

// (...)spread operator array theke value niye number hishebe print korbe.
console.log(...numbers);
console.log(largest);

// ek variable er value onno variable e assign korte parbo
const numbers2 = numbers;
console.log(numbers);
console.log(numbers2);


// referential integrity : but problem will be arise if we want to (push values) the value will be insert in both (numbers & numbers2). cause (numbers) variable (numbers2) te assign kora.
numbers.push(55); 
console.log(numbers);

// same thing will happen here also
numbers2.push(7777);
console.log(numbers2);

//  notun j (numbers2) name e array declare korbo eta (numbers) theke nibo na mane first value dui variable ei same thakbe but notun j value push korbo sheta hudhu jei variable e push korbo shekhanei hobe. but it will add as a 2 dimentional array [[12, 85, 999, 78, 55] 7777], but if we want to put all value in 1 array
const numbers2 = [...numbers];
console.log(numbers2);


// kono numbers array theke jodi shudhu array banate chai then
const numbers3 = [...numbers];
console.log(numbers3);

// can add numbers in array with spread operator
const numbers4 = [444, 78, ...numbers, 111];
console.log(numbers4);

// 
const friends = [4, 5, 87, 9];
const bondhu = friends;
bondhu.push(12);
console.log(bondhu);
console.log(friends);

// 
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends]; //copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);


// advance
const shongkha = [...friends, 9999]; //add extra elementts while copy
console.log(shongkha);