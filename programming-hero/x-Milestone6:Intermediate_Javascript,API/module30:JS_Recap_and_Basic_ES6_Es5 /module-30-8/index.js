// ------------ keys -----------
const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
};
console.log(glass);

// all properties name
const keys = Object.keys(glass);
console.log(keys);
//['name', 'color', 'price', 'isCleaned']

// ------ values ----------
// all property values
const values = Object.values(glass);
console.log(values);

// --------- entries / pair ----------
const entries = Object.entries(glass);
console.log(entries);
// array of array / two dimentional array
// [
//     ['name', 'glass'],
//     ['color', 'golden'],
//     ['price', 12],
//     ['isCleaned', true]
// ]

// ------- delete -------
delete glass.isCleaned;
console.log(glass);

// ----- destructuring -----
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// ----- freeze -----
Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);


// --------- seal -----------
Object.seal(glass);
console.log(glass);


// delete / remove property using rest syntax
const {property, ...rest} = object;

const employee = {
    name: 'John Smith',
    position: 'Sales Manager'
};

const {position, ...employeeRest} = employee;
console.log(employeeRest);  // {name: 'John Smith'}
console.log(employee);  // {name: 'John Smith', position: 'Sales Manager'}


// ------ Object.freeze() ----------
//1. Prevents changing the existed properties of an object
let obj = {
    name: "John",
    age: 23,
};
Object.freeze(obj);
obj.name = "John";
console.log(obj);

// output  : {name: 'John', age: 23}


// 2. Doesn't allow removing/deleting the existing properties
let obj = {
    name: "John",
    age: 13,
};
Object.freeze(obj);
delete obj.name;
console.log(obj);

// output: {name: 'John', age: 13}


// 3. Prevents adding new properties

let obj = {
    name: "John",
    age: 13,
};
Object.freeze(obj);
obj.lastname = "Doe";
console.log(obj);

// output: {name: 'John', age: 13}

// 4. Properties of child objects can be modified
let obj = {
    name: "John",
    age: 13,
    city: {
        address: "ISA",
    },
};

Object.freeze(obj);
obj.city.address = "40A";
console.log(obj);

// output: {name: 'John', age: 13, city: {address: '40A'}}



// -------- Object.seal() ---------
// 1. Allows changing existing properties of an object
let obj = {
    name: "John",
};
Object.seal(obj);

obj.name = "Doe";
console.log(obj);

// output: {name: 'Doe'}

// 2. Preventing adding new Properties

let obj = {
    name: 'John',
};
Object.seal(obj);
obj.lastname = "Doe";
console.log(obj);

// output : {name: 'John'}

// 3. Don't allow removing the existing properties
let obj = {
    name: "John",
};

Object.seal(obj);
delete obj.name;
console.log(obj);

// output: {name: 'John'}