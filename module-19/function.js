// // video-19.1
// // 1. variable
//  var favouriteBook = 'kite runner';
// // 2. array
// var bookList = ['positiong', 'hooked', 'start with why', 'shoe dog'];

// // shoe dog ook kon positiion e ase
// var shoeDogIndex = bookList.indexOf('shoe dog');
// // 1 no position  er book tta change kore  new  book name boshabo
// bookList[1] = 'story Brand';

// // new elemennt add
// bookList.push('small giants');
// bookList.pop();

// //3.conditionals
// if(bookList[1] == 'hooked'){
//     console.log('i  am hooked');
// }
// else{
//     console.log('i am not hooked');
// }

// //4.loop
// // while loop
// var i = 0; //loop variale
// while(i < 15){
//     console.log(i);
//     console.log('looping');
//     i++;
// }

// // for loop
// for(var i = 0; i < 15; i++){
//     console.log(i);

// }

// // video-19.2
// // function: function e ki kaj korbo shei onujayi nam dite hobe: meaningful name . then  parenthesis use korte hobe (). then {  er vitor ki ki kaj hobe ta likhbo }
// // function declaration er por call korte  hobe noyto kaj hobena
// // function declaration
// function turnOnFan(){
//      console.log('walk towards the switch');
//      console.log('press the switch');
// }
// // function call
// turnOnFan();

// console.log('eat breakfast');
// console.log('Drink tea');
// console.log('take a shower');
// turnOnFan();
// turnOnFan();

// video-19.3: 
// function parameter(input parameter)
// function bringSingara( taka){

//     console.log('singara er jonno dise', taka);
//     console.log('mama singara den');
// }
// bringSingara(100);
// // or evaeo declare kora jay
// function bringSingara( taka){

//     console.log('singara er jonno dise', taka);
//     console.log('mama singara den');
// }
// var money = 250;
// bringSingara(money);


// // return statement (function call korle return o korbe statement)
// function bringSingara(taka){
//     console.log('singara er jonno dise', taka);
//     console.log('mama singara den');
//     var singaraPrice = 10;
//     var singaraQuantity = taka / singaraPrice;
//     return singaraQuantity;
// }
// var money = 250;
// var singara = bringSingara(money);
// console.log('ai nen singara', singara);

// // video-19.4:multiple parameter add
// function addTwoNumbers(number1, number2){
//     console.log(number1, number2);
//     var total = number1 + number2;
//     return total;  
//     //console.log(number2);
//     // jodi ekhanne return value na dei tahole result er addition show korbena. r jodi return valu dei tahole addition show korbe 
// }

// // function jokhon call korbo parameter er vitor o value dite pari or er upor variable diye value declare korte pari.
// var firstNumber = 21;
// var secondNumber = 59;
// var result = addTwoNumbers(firstNumber, secondNumber);
// console.log('result value: ', result);

// // ekhane jei number first e call kora hobe shei number tai first position e show korbe number 1 hishebe
// // addTwoNumbers(secondNumber, firstNumber);
// // or
// //addTwoNumbers(21, 59);


// // another funnctionn for multiplication
// // variable,patameter and others name should be meaningful
// function multiplyTwoNumbers(num1, num2){
//     var result =  num1 * num2;
//     return result;
// }

// var total = multiplyTwoNumbers(5,100);
// console.log('total after multiplication', total);


// // another funnction for sutraction
// // variable,patameter and others name should be meaningful
// function subtractTwoNumbers(num1, num2){
//     var result =  num1 - num2;
//     return result;
// }

// var remain = subtractTwoNumbers(100,20);
// console.log('remaining after subtraction', remain);


// // another funnction for division
// // variable,patameter and others name should be meaningful
// function divideTwoNumbers(num1, num2){
//     var result =  num1 % num2;
//     return result;
// }

// var remain = divideTwoNumbers(100,20);
// console.log('remaining after divition', remain);// 

// video-19.5: declare multiple objects