// destructuring
const fish = {
    name: 'Hilsha',
    address: 'chandpur',
    color: 'silver',
    phone: '0171465777',
    price: 4000
}
// object er moddhe ekhane (const name) is variable and property is same
const phone = fish.phone; // .(phone) here is property
const color = fish.color;
const price = fish.price;
console.log(phone);


// easiest way to declare property : 
// fish er phone number pete hole 
const {phone} = fish;

// object destructuring : 
// object er jei property ta ber korte chai shei property er nam e variable declare korbo then jei variable ta chai sheta (console.log) korbo
const {age, name} = {name: 'Almas', age: 50, profession: 'makeup artist'}
console.log(age);
console.log(name);
// 
const {address} = fish;
console.log(address);


// ---- array destructuring : 

// array er shomoy nam variable e ja iccha shei nam boshaboo jabe
// order wise shudhu first 2 values of array nibe.
const numbers = [45, 99];
const [x, y] = numbers;
const [first, another] = [44, 99, 88, 456];
console.log(first, another);


// 
const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun); // output: raj

// 2 ta jinish dibe er moddhe 1 ta dite hobe function er return hishebe jodi array dey taole array value destructuring korte pari... (variable hishebe nibo)
function getNames() {
    return ['Alim', 'Halim'];

}
const [baba, chacha] = getNames();  //function call korbo arraydestructure er variable e boshabo.
console.log(chacha, baba);  // baba: alim ; chacha: halim



// object
const actor = {
    name: 'Ananta',
    age: 30,
    phone: '01786756454534',
    money: 78675645553
}

// object theke destructure korte hole left side eo object likhte hobe
// if right side is an object left side of destructuring will be object as well
const {phone, age: boyosh} = actor;

// const phone = actor.phone;
console.log(phone);
const name = actor.name;
console.log(name);
const age = actor.age;
console.log(age);
console.log(boyosh);


// array destructuring
let [color1, color2] = ["red", "pink", "blue", "black"];
console.log(color1);
console.log(color2);

// 
let [num1, , num3] = [1, 2, 3];
console.log(num1);
console.log(num3);
// 
let numbers = [1, 2, 3];
let num1 = numbers[0];
let num2 = numbers[1];
let num3 = numbers[2];
console.log(num1);
console.log(num2);
console.log(num3);
// 
let numbers = [1, 2, 3];
let [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

// 

let [num1, num2, num3] = [1, 2, 3];
console.log(num1);
console.log(num2);
console.log(num3);

// 
let [num1, num2, num3];
[num1, num2, num3] = [1, 2, 3];
console.log(num1);
console.log(num2);
console.log(num3);

// array variables with adefault value : destructuring
let num1, num2, num3;
[num1 = 0, num2 = 5, num3 = 7] = [1, 2];
console.log(num1);
console.log(num2);
console.log(num3);

// swaping values
let num1 = 1;
let num2 = 2;

[num1, num2] = [num2, num1]; // swap
console.log(num1);
console.log(num2);




// destructuring in  function (advance)
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [first, second] = doubleThem(6, 9);
console.log(first, second);

// return array in function destructuring
function numbers() {
    return [1, 2, 3, 4];
}
let [num1, num2] = numbers();
console.log(num1);
console.log(num2);