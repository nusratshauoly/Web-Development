/*
Truthy:
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string other than empty string
4. '0', 'false'
5. object with values, empty object {}
6. empty array [], array with values

Falsy:
1.false
2. 0
3. '' (empty string)
4. undefined
5. null


*/
// falsy
const x10;
console.log(x10);
if (x10) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// falsy
const x11 = null;
console.log(x11);
if (x11) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}



// falsy
const x = false;
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// falsy
const x3 = 0;
if (x3) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// falsy
const x6 = '';
if (x6) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}


//  truthy
const x1 = 4;
if (x1) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}


// truthy
const x2 = -4;
if (x2) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// truthy
const x5 = 'Salman';
if (x5) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// truthy
const x7 = ' ';
if (x7) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// truthy
const x8 = '0';
if (x8) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// truthy
const x9 = 'false';
if (x9) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// truthy
let x12 = {};
console.log(x12);
if (x12) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// truthy
let x13 = {a:5, b: 56};
console.log(x13);
if (x13) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

//  truthy
let x14 = [];
console.log(x14);
if (x14) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

//  truthy
let x15 = [6, 5];
console.log(x15);
if (x15) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}


// optional
//  check falsy
const y = ''
if (!y) {
    console.log('value is falsy');
}

// falsy
const y1 = null;  // falsy ber korte hole variable e truhy value dite hobe then oitake falsy korte hobe
if (!y1) {  // condition jodi false hoy tahole ! etake true banabe means !y1 = y1 is not null? then ans is yes  it is null falsy
    console.log('value is falsy');
}


// check truthy
const z = ' ';
if (!!z) {  // (truthy te !! dite hoy)
    console.log('value is truthy');
}

// truthy
const z1 = 50;
if (!!z1) {
    console.log('value is truthy');
}

// truthy
const z2 = {class: 9};  // truthy ber korte hole variable e falsy value dite hobe then oitake truthy korte hobe
if (!!z2) {  //!! mane falsy value k negative e nibo mane answer hobe true then abar negative k positive e nibo mane answer hobe false tai loop er vitor dhukbena tai answer hobe truthy.
    console.log('value is truthy');
}