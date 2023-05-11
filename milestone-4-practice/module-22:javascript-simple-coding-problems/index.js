//Module-22-0: foo() bar() Practice task explanation:

/*
write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output
*/

function bar(){
    console.log("bar");
}
function foo(){
    console.log("foo");
    bar();
}
foo();

////////////////////////////////////////

// Module-22-1: String comparison using toLowerCase toUpperCase

// website er inspect e jeye (console) eo likha jay javascript
// string er length e word er shathe space gulokeo count kora hoy. 
const myAddress = '212/A, Shamoli Tower, Shamoli'
myAddress.length;

const name = 'AbM T';
// array er moto [third bracket] e index er element ber kora jabe
name[0];
name[1];

// string is immutable (jeta change hoy na means value or index er man change kora jabena).
const firstName = 'Hannan';
const lastName = 'Poribahan';
const fullName = firstName + lastName;

let first = 'Ena';
first = first + 'Poribahan';


// case conversion
// String.prototype.toLowerCase() --mdn web docs

const userName = 'blackPink';
const userInput = 'blackPinK';

// to check start
console.log(userName.toLowerCase());

//{shobgulo word k uppercase e convert korar jonno}
console.log(userInput.toUpperCase());

//{user er country wise word input deyar rule ase , er jonno toLocalLowerCase / toLocalUpperCase) use kora hoy}
console.log(userName.toLocalLowerCase()); 
// to checl ends

// to compare username and userInput shoman kina
// jodi case sensitive na thake tahole compare korar shomoy duipashei (toLowerCase()) kore nibo. 
if(userName.toLowerCase() === userInput.toLowerCase()){
   console.log('valid user');
}
else{
   console.log('invalid user');
}

//////////////////////////////////////////

// Module-22-2: Apply Search includes, indexOf, startswith, endswith:

const lyrics = 'tumi bondhu kala pakhi ami jeno ki boshonto kale tomay bolte parini.';

// 1. kono value array te ache kina ta search korar jonno

// includes
//  (includes) is a case sensitive
const doesExist = lyrics.includes('pakhi');
console.log(doesExist);

const doesExist = lyrics.includes('pokkhi');
console.log(doesExist);

// we can also write like this
const searchString = 'Pakhi';
const doesExist = lyrics.includes(searchString);
console.log(doesExist);


// jodi case sensitive kina avoid korte chai tahole jokhon search korbo tar age (toLowerCase / toUpperCase) diye nibo
const lyricsLowerCase = lyrics.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchString);
// jodi jei word search korbo oita uperCase or mixed case thake tahole oitakeo lowercase banabo age.
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

// uporer shobtuku k 1 line eo likha jay
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);


// -------------------------------------

// search korar aro option ase like indexOf (eta  word ta array er koto no position e ache sheta dekhabe)
// indexOf
console.log(lyrics.indexOf('kala'));

// (r jodi content array er moddhe na thake tahole result -1 dekhabe)
console.log(lyrics.indexOf('shada'));

// 
if(lyrics.indexOf('sada') !== -1){
    console.log('exists inside the string');
}
else{
    console.log('cannot find it');
}

// --------------------------------------
// startsWith
// (check korbo kono ekta array value diye start hoise kina).
lyrics.startsWith('Tumi');

//  answer (false) pabo jodi na thake
lyrics.startsWith('2mi');


// ---------------------------------------
// endsWith
// (check korbo kono ekta array value diye end hoise kina).
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

fileName.endsWith('.pdf');



//////////////////////////////////////////

// Module-22-3: How to split, slice, substr, substring, concat, join

const lyrics = 'tumi bondhu kala pakhi ami jeno ki. boshonto kale tomay bolte parini.';

// split (used for split the value of an array)
const parts = lyrics.split(' ');
console.log(parts);

// jodi split er majhe kichu add korte chai 
const sentences = lyrics.split('.');
console.log(sentences);

// kono ekta array er shobgulo character/letter k alada korbo
const chars = lyrics.split('');
console.log(chars);


///////////////////////////////////////

// slice
// its works like a bread slice (5 => where to start) & (8  => is kon index position er ag porjonto slice korbo)
const partial = lyrics.slice(5, 8);
console.log(partial);


//////////////////////////////////////

// substring

// substring and slice er output same ashbe
const partial2 = lyrics.substring(5, 8);
console.log(partial2);


// concat
// for adding two or more strings
const lines = [
   'tumi bondhu kala pakhi ami jeno ki',
   'boshonto kale tomay bolte parini',
   'kala kala shada kala'
];

// join (used to add value between string)
const newSong = lines.join('. ');
console.log(newSong);



/////////////////////////////////////////

// Module-22-4: Math, abs, pow, round, ceil, floor, and random number

// Math (pow => used for power), here 3 is the number & 8 is the power of 3(3 ^ 8)
const result = Math.pow(3, 8);
console.log(result);

// not always the first variable value will be high, so whatever the value comes , if we want to the result come in a positive way we need to use (abs) => if the outcome or value comes (-) the output will be (+); 
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2); 
console.log(gap);
if(gap < 5){
  console.log('you guys can be friends');
}
else{
  console.log('you guys stay apart');
}

// -----------------------------
// round (jodi kono divider man thake tahole (round) dibo and output full return korbe . 2.4999 = 2(output), 2.500 = 3(output))
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber);

// ceil(jodi divider value k up full number korte chai 2.0001 = 3 hobe)
const result2 = Math.ceil(2.00001);
console.log(result2);

// floor(jodi divider value k down full number korte chai 2.9001 = 2 hobe)
const result3 = Math.floor(2.90001);
console.log(result3);


// -----------------
// random (return a random number)
console.log(Math.random());

// random number e jodi icche moto number chai random er shathe(*) kore dibo
const random = Math.random()*100;
console.log(random);

// using for loop
for(let i = 0; i < 20; i++){
   const random = Math.round(Math.random()*6);
   console.log(random);
}

////////////////////////////////////////////

// Module- 22-5: Swap variable, swap without temp, desstructing:
let first = 5;
let second = 7;
console.log(first, second);
/*
// this is wrong approach
first = second;
second = first;
*/


// Swap variable with swap
// approach 1
const temp = first;
first = second;
second = temp;
console.log(first, second);

// approach: 2 : Destructuring
[first, second] = [second, first];
console.log(first, second);

// approach 3: math operation (jodi value gulo number value hoy)
a = a + b;
b = a - b;
a = a - b; 
//////////////////////////////////////////

// Module- 22-6: Can you find out who will get the delicious cake?

/// What did we learn until now
/*
// Math properties
Math.PI;
Math.E;
Math.LN2;
Math.LN10;
Math.LN2E;
Math.SQRT2;
Math.SQRT1_2;


// Math methods
Math.cos(x);
Math.cosh(x);
Math.acos();
Math.acosh();
Math.sin(x);
Math.sinh(x);
Math.asinh();

Math.tan();
Math.sign();
Math.round(x);
Math.random();
Math.pow(x, y);
Math.abs(x);
Math.min();

Math.max();
Math.ceil(x);
Math.floor(x);
Math.log(x);
Math.log10(x);
Math.log2(x);
Math.exp(x);


-5 ------> Math.abs(x) ------> 5;
5.003 ---> Math.ceil(x)------> 6;
5.999 ---> Math.floor(x)-----> 5;
5.999 ---> Math.round(x) ----> 6;
5.299 ---> Math.round(x) ----> 5;
           Math.random() ----> 0.31713143.

*/

/*
1. Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joinedhis class. 
She was also a topper at her previous school. On the day of result publication, the teacher comes into the class with a delicious cake and says that "Jim & Dela, whoever is the topper, will get this tasty cake." Can you find out who will get this cake? 

Input: 
The input line has two values, m(The marks Jim has got)and n (The marks Dela has got).

Output:
Print the name of thr topper.

Sample Input -1: 84 75    |   Sample Output -1: Jim

Sample Input -1: 69 97    |   Sample Output -1: Dela
*/
const jim = 84;
const dela = 75;
if(jim > dela){
    console.log('jim will get the cake');
}
else{
    console.log('dela you will get the cake');
}

/*
2. This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

Input: The input line has three values, x(The marks Jim has got), y(The marks Dela has got) and z(THe marks Chinku has got).

Output: Print the name of the topper.

Sample Input- 1: 84 99 77     |   Sample Output - Dela

Sample Input - 2: 69 97 99    |   Sample Output-2: Chinku
*/
//ist input
const jim = 84;
const dela = 75;
const chinku = 77;

// first approach
if(jim > dela && jim > chinku){
    console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('chinku will get the cake');
}

// 2nd input
const jim = 69;
const dela = 97;
const chinku = 99;

if(jim > dela && jim > chinku){
    console.log('jim will get the cake');
}
else if(dela > jim && dela > chinku){
    console.log('Dela will get the cake');
}
else{
    console.log('chinku will get the cake');
}

// 2. second approach

Math.max(84 99 77);
Math.min(69 97 99);
//Math.min(69 97 99);

// Homework1: write a function that will take 3 numbers will return the max number.

// Homework2: write a function that will take 3 parameters and will return the min number.
// first time do it using if-else
//  second time do it using Math.min or Math.max



///////////////////////////////////////////

//  Module- 22-7: Who is the tallest? Find the max number in an array

// 1. wh o is the tallest?
/*
Tom and his friends are participating in the 'who is the tallest?" competition. As per the name, the peson with the highest height will be the winner. can you find who is the tallest among tom and all of his friends?

Input: The input line can have multiple integer numbers, xi(the height of ith friend in cm).
    
Output: Print the height of the tallest friend(cm).

Sample Input-1: 157, 134, 188  | Sample output: 188

Sample Input-2: 167, 190, 120, 165, 137  |  Sample Output-2: 190
*/