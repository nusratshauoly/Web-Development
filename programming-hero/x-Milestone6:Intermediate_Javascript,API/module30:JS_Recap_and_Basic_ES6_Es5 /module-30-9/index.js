// for of use on array or string not in object
// for in use on object


const numbers = [1, 6, 8, 4];
// for loop
//for (let i = 0; i < numbers.length; i++){}

// while loop


// for . of 
for (const num of numbers) {
    console.log(num);
}


// for of in string
const nobab = 'Siraj Ud Doula';
for (const char of nobab) {
    console.log(char);
}

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}

// we can not use (for of) in object
for (const key of glass) {
    console.log(key);
}

// we can use (for in) in object
for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
}

// keys of object
const keys = Object.keys(glass);
console.log(keys);

for (const key of keys) {
    const value = glass[key];
    console.log(key, value);
}