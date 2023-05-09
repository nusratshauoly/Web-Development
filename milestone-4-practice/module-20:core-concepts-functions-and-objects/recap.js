// // 1.variable
// var time = '10:15pm';
// var bookPrice = 150;
// var isWhiteColor = false;

// // array
// var partners = ['sajid', 'mojid', 'hajid'];
// // array te koyta element ase ber korar jonno
// var elementCount = partners.length;
// var mojidPosition = partners.indexOf('mojid');
// partners.push('shajid');
// partners.pop();

// // conditionals
// if(bookPrice < 120){
//     console.log('i will buy this book');
// }
// else{
//     console.log('kichu discount needed');
// }

// // condition
// var i = 0;
// while(i <= 17){
//     // do some work
//     i++;
// }

// for(var i = 0; i <= 17; i++){

// }

// // function
// function isMoonUp(){
//     return true;
// }

// // function theke return pele call kore variable e rakhar niyom
// var moonStatus = isMoonUp();



// // function(2)
// function isMoonUp(){
//     if(time >= 19 && time <= 5)
//     {
//      return true;
//     }
//     else
//     {
//     return false;
//     }
// }

// // function theke return pele call kore variable e rakhar niyom
// var moonStatus = isMoonUp(21);

// // video-20.1
// // value of vaiable could change
// var price = 27;
// price = 29;
// price = 31;

// //let, const
// // variable declare korar jonno let use korbo
// // value of the variable will not change always will be constant
// const name = 'Bangladesh';
// console.log(name);

// // let (var er moto changable) ES6 er operator
// let price = 27;
// price = 29;
// price = 31;

// video-20.2: unit convert

// inch to feet
//  var inches = 132;
//  var feet = inches / 12;
//  console.log(feet);
// ///////////////////////////////////
// // ek kaj jokhon onekbar declare kora lage tokhon function declare kore korbo
// //  function in unit convert
// function inchToFeet(inches){
//     var feet = inches/12;
//     return feet;
// }
// var myInches = 132;
// var feet = inchToFeet(myInches);
// console.log('myInches in feet', feet);

// var anotherInches = 144;
// var feet = inchToFeet(anotherInches);
// console.log('another inches in feet',feet);

// //convert mile to kilometer
// function mileToKilometer(miles){
//     var km = miles * 1.60934;
//     return km;
// }
// var marathon = mileToKilometer(26.2);
// console.log('marathon in kilometer', marathon);


// video-20.3: check even / odd number using function
// without function
// const number = 5;
// const remainder = number % 2; //(2 diye vag kori)
// console.log(remainder == 0);


// // with function
// const number = 145;
// // isEven mane jor number
// function isEven(number){   
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }
// const myNumber = 1641;
// const isMyNumberEven = isEven(myNumber);
// console.log('is my number even',isMyNumberEven);
// // how to run:182 % 2 == 0

// // another function
// const herNumber = 1892;
// const isHerNumberEven = isEven(herNumber);
// console.log('is her number even',isHerNumberEven);


// // function odd number (isOdd mane bijor number)

// function isOdd(number){  
//     // condition 2  vabe deya jay (if (number % 2 !=0)) or (if(number % 2 == 1))
//     if(number % 2 != 0){
//         return true;
//     }
//     return false;
// }
// const myNumber = 1841;
// const isMyNumberOdd = isOdd(myNumber);
// console.log('is my number odd',isMyNumberOdd);
// // how to run:182 % 2 == 0

// video-20.4: check whether leap year or not
// simple calculation of leap year
// function isLeapYear(year){
//     if(year %4 == 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const myYear = 2026;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('Is my year leap year', isMyYearLeapYear);

// // another year call
// const yourYear = 2028;
// const isYourYearLeapYear = isLeapYear(yourYear);
// console.log('Is your year leap year', isYourYearLeapYear);


// Video- 20.5: factorial number using for loop

// 3! = 3 * 2 * 1
// var  na likhe let likhte pari
// multiplication and division er shomoy 1  dibo i er value
// each time number increment er por calculation er jonno factorial k for loop er bahire set korte hobe
// var factorial = 1;
// for(var i = 1; i <= 7; i++){
//     // console.log(i);
//     // var factorial = 1;
//     factorial = factorial * i;
// }
// console.log(factorial);

// video- 20.6 : recalculate factorial multiple times using function
// let factorial = 1;
// for(let i = 1; i <= 5; i++){
//    factorial = factorial * i;
// }
// console.log(factorial);

// function factorial(number){
// // number e value joto hobe toto porjonto loop hobe
//     let fact = 1;
//     for(let i = 1; i <= number; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// var firstFactorial = factorial(7);
// console.log('factorial of 7 is', firstFactorial);

// var secondFactorial = factorial(9);
// console.log('factorial of 9 is', secondFactorial);

// module- 20-7; factorial using a while loop or a decrementing loop

// function factorial(number){
//     let factorial = 1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }
// const myFactorial = factorial(6);
// console.log(myFactorial);

// // for decrementing in a while loop

// function factorial(number){
//     let factorial = 1;
//     let i = number;
//     while(i >= 1){
//         factorial = factorial * i;
//         i--;
//     }
// // kono function k call kore reult pete chaile variable return korte hobe noyto result undefined dekhabe
//     return factorial;
// }
// const myFactorial1 = factorial(6);
// console.log(myFactorial1);

// // decrementing factorial in for loop
// function factorial2(number){
//     let factorial = 1;
//     for(let i = number; i >= 1; i--){
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// const myFactorial2 = factorial2(6);
// console.log(myFactorial2);

// video -20.8: moddule summary(2 bar kore video dekhte hobe )
// 3! = 3* 2*1;
// 2! = 2*1;

// 1. inch to feet 
// 2. leap year 
// 3. or / even 
// 4. factorial(5 types )
// *loop increment using for loop
// *loop increment using while loop
// *loop decrement using for loop
// *loop decrement using while loop
// *loop increment using recursion 
// 5.how to do debug

// debug example
// error answer show korle debug kore or console log kore dekhbo OR BREAK POINT DIYE kaj korbo
//     function getFactorial(number){
//     let factorial = 1;
//     // console.log(number); (try korar jonno)
//     // for(let i = 0; i <= number; i++){ (i er value always 1 hobe * er shomoy)
//     for(let i = 1; i <= number; i++){
//     // console.log(number);  (try korar jonno)
//         factorial = factorial * i;
//         // factorial = factorial + i; (factorial e * use hoy)
//         // console.log(factorial);  (try korar jonno)
//     } 
//     return factorial;
// }
// const getMyFactorial = getFactorial(6);
// console.log(getMyFactorial);
 

////////////////////
function turnOnFan(){
   console.log('stand up');
   console.log('turn on the fan');
}
turnOnFan();
turnOnFan();
console.log('eating lunch');
turnOnFan();


function bringSingara(money){
  console.log('singara den');
  console.log('money');
}
bringSingara(100);
console.log(bringSingara(100));

/////////////////////////////////////////////

