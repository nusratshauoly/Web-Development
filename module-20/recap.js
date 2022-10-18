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
