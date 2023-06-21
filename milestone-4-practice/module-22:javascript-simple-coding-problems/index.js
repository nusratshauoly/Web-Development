//Module-22-0: foo() bar() Practice task explanation:

/*
write a function called foo() which prints "foo" and a function called bar() which prints "bar". Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output
*/

function foo(){
    console.log("foo");
    bar();
}
function bar(){
    console.log("bar");
}
foo();

////////////////////////////////////////

// Module-22-1: String comparison using toLowerCase toUpperCase

// website er inspect e jeye (console) eo likha jay javascript
// string er length e word er shathe space gulokeo count kora hoy. 
const myAddress = '212/A, Shamoli Tower, Shamoli';
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
console.log(doesExit);




// uporer shobtuku k 1 line eo likha jay
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
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
1. Jim is a meritorious student. He secures first place in his class all the time. This year, Dela has joined his class. 
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

function maxNumber(num1, num2, num3) {
    const maximum = Math.max(num1, num2, num3);
    return maximum;
}
const maximumNumber = maxNumber(84, 69, 99);
console.log(maximumNumber);

// using if- else
const num1 = 84;
const num2 = 75;
const num3 = 77;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greater`);
}
else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is greater`);
}
else {
    console.log(`${num3} is greater`);
}


// Homework2: write a function that will take 3 parameters and will return the min number.
// first time do it using if-else
//  second time do it using Math.min or Math.max

function minNumber(num1, num2, num3) {
    const minimum = Math.min(num1, num2, num3);
    return minimum;
}
const minimumNumber = minNumber(34, 64, 9);
console.log(minimumNumber);

// using if -else
const num1 = 84;
const num2 = 75;
const num3 = 77;

if (num1 < num2 && num1 < num3) {
    console.log(`${num1} is smaller`);
}
else if (num2 < num1 && num2 < num3) {
    console.log(`${num2} is smaller`);
}
else {
    console.log(`${num3} is smaller`);
}

///////////////////////////////////////////

//  Module- 22-7: Who is the tallest? Find the max number in an array

// 1. who is the tallest?
/*
Tom and his friends are participating in the 'who is the tallest?" competition. As per the name, the peson with the highest height will be the winner. can you find who is the tallest among tom and all of his friends?

Input: The input line can have multiple integer numbers, xi(the height of ith friend in cm).
    
Output: Print the height of the tallest friend(cm).

Sample Input-1: 157, 134, 188  | Sample output: 188

Sample Input-2: 167, 190, 120, 165, 137  |  Sample Output-2: 190
*/

function maxInArray(numbers){
   //console.log('array inside the array', numbers);
//   5.1: compare er jonno largest variable set kore (numbers er first value k largest dhorlam and array te rakhlam)
   let largest = numbers[0];
// 1. array er value gulor length onujayi for loop chalabo (i e let disi karon i er man loop cholar shomoy each time change hobe)
   for(let i = 0; i < numbers.length; i++){
    // 2. then we will get the value index of the array (index e const disi karon value gulor index er positionfixed thakbe cause amra onno value reassign kortesi na)
      const index = i;
    // 3. numbers array te value er index gulo boshabo 
      const element = numbers[index];
    // 4. console.log korbo element k jate amra alada alada kore each element pai
      console.log(element);
    // 5.2 protita element jokhon ashbe tokhon largest er shathe element gulo compare korbo.(jodi present element er cheye largest er cheye boro hoy tahole largest e new element er man rakhbo r jodi na hoy tahole ignore kore dibo) then element gulo compare korbo like (167, 190)er compare kore 190 boro then abar 190 er shathe 120 compare, still 190 boro, then abar 190 er shathe 165 compare korbo, evabe shesh porjonto compare chalate thakbo
      if(element > largest){
        largest = element;
    } 
   }
//    6. then largest number return korbo for loop er bahire jeye
   return largest;
}
// 00. value gulo declare korbo
const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('tallest person is:' tallest);

// HomeWork1: write a function to get the lowest number in ana array.






///////////////////////////////////////



// Module-22-8: Reverse a string and reverse words in a sentence:


// string reverse (character reverse)

// str[0], str[1] => evabe string er vitor element gulo ber kora jay. , string er length ber kora jay => str.length 

function reverseString(text){
    // 0. it is for normal string
    //for(let i = 0; i < text.length; i++){
    // 4. jokhon string reverse korbo tokhon empty string diye shuru korte hobe. and reversed variable e tarporer string gulo aste aste add korbo. 
   let reversed = '';
   // 1. reverse / shesher theke string show korte hole i er value whole text.length theke -1 korte hobe and loop cholbe 0 index porjonto.
   for(let i = text.length - 1; i >= 0; i--){   
    // 2. text er string gulo element variable e save korbo.
       const element = text[i];
    // 5. first e empty string er pore joto string ashbe shegulo reversed element er moddhe add kore dibo and (element and reversed value gulo console.log korbo)
       reversed = reversed + element;
       console.log(element, reversed);
   }
   // 6. reversed variable return kore dibo
   return reversed;
}
// 3. value declare korbo function e
const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('reversed output: ', reversed);


///////////////


// words reverse
function reverseWords(str){
// 1.  myString variable er value / word gulo (' ') diye split korbo. 
   const words = str.split(' ');
// 4. result variable e shob reverse word gulo store korbo 
   const result = [];
   //console.log(words);
   // ['I', 'am', 'a', 'good', 'boy'] {ei word take reverse korbo}
// 2. reverse er for loop e words.full theke (-1) korte hoy
   for(let i = words.length - 1; i >= 0; i--){
// 3. each item(i) reverse korar por jokhon ashbe tokhon notun variable element er vitor word e boshaye dite parbo and element gulo result er vitor push korbo.
       const element = words[i];
       result.push(element);
   }  
//    console.log(result); 
// 5. then shob gulo alada word er string guloke abar sentence er jonno join kore dibo and reversed return korbo.
const reversed = result.join(' ');
return reversed; 
}
const myString = 'I am a good boy';
const reversedWords = reverseWords(myString);
console.log(reversedWords);


// ///full code//////

 // string reverse

// str[0], str[1] => evabe string er vitor element gulo ber kora jay. , string er length ber kora jay => str.length 

function reverseString(text){
    // 0. it is for normal string
    //for(let i = 0; i < text.length; i++){
   let reversed = '';
   for(let i = text.length - 1; i >= 0; i--){   
       const element = text[i];
       reversed = reversed + element;
       console.log(element, reversed);
   }
   return reversed;
}
const myString = 'I am a good boy';
const reversed = reverseString(myString);
console.log('reversed output: ', reversed);

// words reverse
function reverseWords(str){
   const words = str.split(' ');
   const result = [];
   //console.log(words);
   // ['I', 'am', 'a', 'good', 'boy'] {ei word take reverse korbo}
   for(let i = words.length - 1; i >= 0; i--){
       const element = words[i];
       result.push(element);
   }  
//    console.log(result); 
const reversed = result.join(' ');
return reversed; 
}
const myString = 'I am a good boy';
reverseWords(myString);



//////////////////////////////////////////

// Module- 22-9: (advanced) create a fibonacci series using a for loop:

//shobgulo problem vs code e iteration kore dekhte hobe 

// const fibonacci = [1, 1, 2, 3, 4, 5, 8, 13, 21, 34, 55, 89, 144];

/*
fibonnaci er 1 ta pod ager 2 ta poder addition then ager 2 ta value default vabe diye dite hobe.
fibo[3] = fibo[2] + fibo[1];
fibo[4] = fibo[3] + fibo[2];
fibo[5] = fibo[4] + fibo[3];
fibo[50] = fibo[49] + fibo[48];
fibo[487] = fibo[486] + fibo[485];
fibo[n] = fibo[n-1] + fibo[n-2];
fibo[i] = fibo[i - 1] + fibo[i - 2];

*/

const fibo = [0, 1];
// 1. i er value 2 theke shuru korte horte karo fibonacci te default vabe age 2 ta value diye dite hobe.
// 2. 10 ta number dekhabe
for(let i = 2; i <= 10; i++){
    // 3. fibonacci ber korar rule (i er value 2 tai fibo[i=indexnumber]=fibo(2-1) + fibo(2-2) then evabe cholbe)
   fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


// ////////full code////////////
const fibo = [0, 1];
for(let i = 2; i <= 10; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);


////////////////////////////////////

// Module - 22-10: Module summary and where you need to focus

