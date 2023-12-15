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


// easiest way to declare property
const {phone} = fish;

// object er jei property ta  ber korte chai shei property er nam e variable declare korbo
const {age, name} = {name: 'Almas', age: 50, profession: 'makeup artist'}
console.log(age);
console.log(name);
const {address} = fish;
console.log(address);



// array destructuring: 
// array er shomoy nam variable e ja iccha shei nam boshno jabe
// order wise shudhu first 2 values of array nibe.
const [first, another] = [44, 99, 88, 456];
console.log(first, another);


// 
const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(natun);

// 2 ta jinish dibe er moddhe 1 ta dite hobe function er return hishebe jodi array dey taole array value (variable hishebe nibo)
function getNames() {
    return ['Alim', 'Halim'];

}
const [baba, chacha] = gatNames();
console.log('chacha, baba');


// ---------------

