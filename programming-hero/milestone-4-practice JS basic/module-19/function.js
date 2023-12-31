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
// {} => object. Inside object Key:value, is called property
// object can also write in many lines
// var student1 = {id: 115, name: 'abir', marks : 81, phone: 858575665};
// var student1 = {
//     id: 115, 
//     name: 'abir', 
//     marks : 81, 
//     phone: 858575665
// };
// var mobile = {
//     color: 'black',
//     storage: '16GB',
//     price: 15000,
//     screensize: 5
// };
// var book = {
//     title: 'start with why',
//     author: 'simon sinek',
//     price: 200,
//     page: 250
// }

// video-19.6: multiple ways to get and set property
// object er property read korar jonno
// var computer = {
//     price: 229000,
//     storage: '156gb',
//     processor: 'intel i5',
//     color: 'silver'

// };
// // console.log(computer);

// // shobgulo computer er property na  dekha shudhu 1 ta property dekhte chai
// console.log(computer.processor);
// // or : evabeo variable declare kore likha jay
// var computerPrice = computer.price;
// console.log(computerPrice);

// // set a object property value
// // boject property te new value set or add korar jonno
// computer.price = 22000;
// console.log(computer);

// // different ways to set a value of an object property
// // 1.set a value
// computer.price = 22000;
// console.log(computer);
// // 2.set a value
// computer["price"] = 23000;
// console.log(computer);
// // 3. set a value
// var priceProperty = "price";
// computer[priceProperty] = 24000;
// //another set value
// var storageProperty = 'storage';
// computer[storageProperty] = '512gb';

// computer['storage'] = '1tb';

// computer.storage = '5tb';

// // video-19.7:
// // switch case valiu" 
// var color = 'yellow';

// // if-else condition
// if(color == 'blue'){
//     console.log('color is blue');
// }
// else if(color == "red"){
//     console.log('color is red');
// }
// else if(color == "green"){
//     console.log('color is green');
// }
// else if(color == "white"){
//     console.log('color is white');
// }
// else if(color == 'megenta'){
//     console.log('color is megenta');

// }
// else if(color == "yellow"){
//     console.log('color is yellow');
// }
// else{
//     console.log('color is black');
// }

// // ei control ;ook aro easy babe (switch case break diyo korar jay)
// // break will stop the execution inside the switch box
// switch(color){
//     case 'blue':
//         console.log('color is blue');
//         break;
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'green':
//         console.log('color is green');
//         break;
//     case 'white':
//         console.log('color is white');
//         break;
//     case 'megenta':
//         console.log('color is megenta');
//         break;
//     case 'yellow':
//         console.log('color is yellow');
//         break;
//     default:
//         console.log('color is black');

// } 
// // last option er age default dite hobe.

// video-19.8:break for while and for loop:
// 1 to 10 number print
// var i = 0;
// while(i < 10){
//     console.log(i);
// // loop 5 porjonto jeye stop hoye jabe e jonno. kono ekta condition e jodi break dei ,condition ta true hole execution stop hoye jabe
//     if(i == 5){
//         break;
//     }
//     i++;
// }


// // same thing will be happen in for loop
// for(var i = 0; i < 20; i++){
//     console.log(i);
//     if(i==8){
//         break;
//     }
// }

// // or
// for(var i = 0; i < 20; i++){
//     console.log(i);
//     if(i > 8){
//         break;
//     }
// }

// // on array
// var numbers = [54, 35, 21, 78, 98, 23, 101, 45];
// for(var i=0; i < numbers.length; i++){
//     var number = numbers[i];
//     console.log(number);
// // condition inside condition
// // 100 er upor value pele loop stop hoye jabe
//     if(number > 100){
//         break;
//     }
// }

// // for loop on array(continue)
// var numbers = [54, 35, 21, 78, 98, 23, 101, 45];
// for(var i = 0; i < numbers.length; i++){
//     var number = numbers[i];
// // continue statement e condition er statement k pass kore iteration start kore
// // ekhane (90 er porer / boro number or 90 er cheye choto number gulo print korbe gulo print korbe)
//     if(number > 90){
//         continue;
//     }
//     console.log(number);
// }

// // break loop
// while(i < 10)
// {
//     if(i==4)
//     break;
//     console.log(i);
//     i++;
// }
// // output: 123


// // continue loop
// while(i < 10)
// {
//     if(i==4)
//     continue;
//     console.log(i);
//     i++;
// }
// // output: 123456

// video-19.9: module summary

var watchPrice = 300;
console.log('the price of watch is', watchPrice);

var phones = ['iphone','samsung','tesla'];
phones[3] ='walton';

// check an element exist in an array
if(phones.indexOf('oppo') == -1){
    console.log('opps! oppo is missing');
}
// lg is available
if(phones.indexOf('lg') != -1){
    console.log('Lg is available now');
}

// loop
var num = 0;
while(num <= 10){
    num++;
}
// for loop
for(var i = 0; i < phones.length; i++) {
    console.log("");
}
// function
function addThreenumbers(number1, number2, number3){
    var total = number1 + number2 + number3;
    return total;

}
addThreenumbers(87, 41, 56);

// object(3 types of object proprty)
var microohone = {
    brand : 'blue yeti',
    price: 120
}

// variable 3 types : number, string,boolean

