//  * == , === will check primitive value : string, boolean, symbol, number, undefined, null

// *  == , === will not check non primitive value : object, array, they will check reference.

// always use ===

// equal comparison doesnt work for non-primitive type


// type coercion / type conversion

//  ==
const first = 2;
const second = 2;
if (first == second) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

//  type casting => 1 ta theke arekta convert kora
const first2 = 2;
const second2 = '2';
if (first2 == second2) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// ans will be not equal
const first6 = 1;
const second6 = false;
if (first6 == second6) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// ans will be equal
const first7 = 0;
const second7 = false;
if (first6 == second6) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// ans will be equal
const first8 = '0';
const second8 = false;
if (first6 == second6) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// ans will be not equal
const first9 = {};
const second9 = {};
if (first9 == second9) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// ans will be not equal
const first10 = {x: 9};
const second10 = {x: 9};
if (first10 == second10) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}



// === (type & value duitakei check korbe) always use this
const first1 = 2;
const second1 = 2;
if (first1 === second1) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// 
const first3 = 2;
const second3 = '2';
if (first3 === second3) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// 
const first4 = 2;
const second4 = true;
if (first4 === second4) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// 
const first5 = 2;
const second5 = true;
if (first5 === second5) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}


//  ans will be equal (non primitive , object and array jodi same value k reference hishebe use kore oi variable diye jodi arekta variable er name declare kori then they will be equal but value jodi same hoy but variable name different hoy tahole ans will be negative)
const first11 = [];
const second11 = first11;
if (first11 === second11) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}

// ans will not be equal
const first12 = [];
const second12 = [];
if (first11 === second11) {
    console.log('values are equal');
}
else {
    console.log('values are not equal');
}