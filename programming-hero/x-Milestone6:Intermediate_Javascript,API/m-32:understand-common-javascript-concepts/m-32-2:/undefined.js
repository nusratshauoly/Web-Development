/*
8 ways to get undefined
1. variable that is not initialized will give undefined
2. function with no return will give undefined
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range will give you undefined
7. deleting an element unside an array
8. set a value directly to undefined

*/
//1. variable that is not initialized will give undefined
let first;
console.log(first);

// 2. function with no return will give undefined
function second(a, b) {
    const total = a + b;
}
const result = second();
console.log(result);


// 3. parameter that is not passed will be undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);

// 4. if return has nothing on the right side will return undefined
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return 
    }
    return a + b;
}
const total noNegative(2, -5);
console.log(total);


// 5. property that doesn't exists on an object will give you undefined
const fifth = {id: 2, name: 'ponchom', age: 40}
console.log(fifth.age, fifth.salary);


// 6. accessing array elements outside of the index range will give you undefined
const sixth = [4, 89, 87, 56, 54];
delete sixth[1]; // output will be also undefined and should not write like this instead use splice
console.log(sixth[1], sixth[5], sixth[200]);


// 7. deleting an element unside an array
const sixth = [4, 89, 87, 56, 54];
delete sixth[1]; // output will be also undefined and should not write like this instead use splice
console.log(sixth);

// 8. set a value directly to undefined
const eighth = undefined; // will never set undefined
const ninth = null; // instead of undefined will set null

const data = {results: [], updated: null}

console.log(typeof undefined);
console.log(typeof null);