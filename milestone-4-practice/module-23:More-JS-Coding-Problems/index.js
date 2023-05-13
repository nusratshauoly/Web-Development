// Module- 23-1: Module Introduction and isArray, includes, concat
/*
1. variables
2. conditionals
3. array
4. loop
5. function
6. object
*/

const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];


function add(num1, num2){
    return num1 + num2;
}

// kon variable ki type er eta ber korar jonno
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// typeof diye shob kichu detect kora geleo array k detect kora jay na
//console.log(typeof friends);
// this way we can get the type of an array (check array using Array.isArray)
console.log(Array.isArray(friends));
console.log(typeof add);

// ----------------------------------
// includes(array er moddhe value gulo ache kina search korar jonno)
console.log(friends.includes(19));
console.log(friends.includes(21));



// indexof value kon position e ache array er moddhe
if(friends.indexOf(19)){
   
}