// ------------ multiple conditions ( && ) ---------------
if(name === 'Leon' && status === 'Ballin'){
    console.log('100Devs course will complete');
}

// ------------ multiple conditions ( || ) ---------------
if(day === 'saturday' && day === 'sunday'){
    console.log('100Devs course will not complete');
}


//  ---------------- functions ----------------
function name(parameters){
    // body
}
// call
name(arguments)



// ---------------- Loops ---------------
/*
1. Repeat an action some number of times
2. Three main types of loops in javascript
3. For, while, and do while loops
4. Each type offers a different way to determine the start and end points of a loop
*/


// ------------- for loop --------------
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// ------------ while loop --------------
let count = 0;

while(count < 5){
    console.log(count);
    count++;
}


// ---------------- arrays ----------------
/*
1. A data structure to store ordered collections!
2. Array elements are numbered starting with zero
3. Arrays have many methods to manage the order of moments
4. It can be created by a constructor or literal notation
*/

let newArr = ['Zebra', true, 21, '', ,];  // elements of array

console.log(newArr[0]);
console.log(newArr[1]);
console.log(newArr[2]);
console.log(newArr[3]);
console.log(newArr[4]);
console.log(newArr[5]);

// ----------------- array indexing ---------------------
let newArrs = ['zebra', , true, 21];
newArrs[1] = 'Bob';
console.log(newArrs);  //['zebra', 'Bob', true, 21]


// -------------you can overwrite whole arrays by assigning an array to different array -------------------
let cars = ['Honda', 'Toyota', 'Ford', 'Tesla']
let nums = [1, 2, 3];
cars = nums
console.log(cars);