// normal way to write:  function declaration: 
function add(first, second) {
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result);


// another way : function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}
const result1 = add1(10, 20);
console.log(result1);


// another way: function expression with anonymous function
const add2 = function (first, second) {
    const total = first + second;
    return total;
}
const result2 = add2(10, 20);
console.log(result2);


//  function return parameter after stong into different variable
function add3(first, second) {
    const total3 = first + second;
    return total3;
}
const result3 = add3(10, 20);
console.log(result3);

// directly return the function parameter
function add4(first, second) {
    return first + second;
}
const result4 = add3(10, 20);
console.log(result4);


// normal way to write function
const add5 = function (first, second) {
    return first + second;
}
const result5 = add5(10, 20);
console.log(result5);


// Arrow function: how to write
const add6 = (first, second) => first + second;

const result6 = add6(10, 20);
console.log(result6);

// how to write arrow function with different parameters if theres 1/2 parameters

