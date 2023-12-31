// function with parameter
function add(first, second) {
    const total = first + second;
    return total;
}
const result = add(10, 20);
console.log(result);

// jodi kono karone parameter er number na nei tahole NaN(dekhabe)
// before es6 we declare undefined parameter like this
function add(first, second) {
    console.log(first, second);

    // ist approach:
    // if (second === undefined) {
    //     second = 0;
    // }

    // 2nd approach:
    second = second || 0;
    const total = first + second;
    return total;
} 
const result = add(10);
console.log(result);



// function in es6: 
// wwe can set default value in parameter but if we take a new parameter value when calling function the new value will operate instead of default value. r jodi 1 ta value e dei function call e tahole default value show korbe.
function add(first, second = 0) {
    const total = first + second;
    return total;
}
const result = add(10, 20);
// const result = add(10, 0);
// const result = add(10);
console.log(result);


// we can set default value in both parameter
function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}
const result = add(10);
// const result = add(10, 0);
// const result = add();
console.log(result);

// function (using string)
function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('Aslam');
console.log(name);