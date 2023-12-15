// var: No More use of var

// let: let it to reassign
let money = 25;
money = 35;
console.log(money);

// const: do not allow it to reassign
const bird = 'pakhi';
bird = 'morning bird';
console.log(bird);

// can declare one time
const message = bird + "potas";
console.log(message);

// 
const numbers = [12, 89, 65, 45];
// reassign is not allowed: can not assign new number
numbers = [12, 89, 65, 45, 77];

// but can modify 
numbers.push(55);
numbers[1] = 90;
console.log(numbers);


cont student = {
    name: 'mofiz',
    address: 'rangpur'
}
// can not do/change this
student = {name: 'Mofazzal'};

// can change like this
student.name = 'Mofazzal';

// array declare
let sum = 0;
for (let i = 0; i < numbers.length; i++){
    // ekhane each time new number show korar jonno variable create hobe but value reassign hobena
    const number = numbers[i];
    // sum er value each time reassign hobe tai (let) diye declare korsi.
    sum = sum + number;
    console.log(number);
}

// we cannot declare outside of the block of (let and const variable)
console.log(number);

// let & cons is block scope