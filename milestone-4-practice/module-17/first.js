// video-17.3
// writing/declare a variable:(numeric) bole
// var price = 21;
// var age = 25;


// not everything i can declare with number , many  things will vary dependinding situation. example:  name;
//etate (string) bole
// var name = "nusrat"; //double quotation use kora jay
// var name = 'nusrat'; //single quotation use kora jay
// var address = "vuter goli";
// var friend = "syed saddiq";

// //yes/no declaration(boolean) bole:
// var pass = true;
// var subscribed = false;
// --------------------------
// video-17.4 : variable name
//variable should be case sensitive
//variabble likhar jonno some rules ache
//rule-1. reserved keyword not allowed : kono name javascript er reserved keyword er same name hote parbena.
//(var false = 15;) => erokom name deya jabena (false) er moto
//rule-2. name should be one word : variable name er majhe space deya jabena
//(var nayok name = 'tom dicks';)  => erokom name deya jabena
//rule-3. quote is not allowed : variable name "" string er vitor likha jabena
//(var "nayika" = "elina";) => evabe likha jabena
//rule-4.
//rule-4.1: kono name er majhe (-) deya jabena.
//(var my-office-address = 'bandarban';)
//rule-4.2: name er majhe (_) space deya but evabe na deyai valo:(rarely used inn javascript)
//(var my_office_address = 'bandarban';)
//rule-4.3: using camelCase:
//(var myOfficeAddress = 'bandarban';)
//rule-4.4: using UPPERCASE: rarely used
//(var PIE = 3.1416;)
//rule-5: numbers cannot be in the first place of the name (evabe likha jabena)
//(var 999price = 36;)
//rule-6: numbers can be in the last place of the name (evabe likha jabe)
//(var price99 = 26;)



// video-17.5: mathematical operation
// var onionPrice = 35;
// var eggPrice = 35;
// //rule-4: multiplication
// var eggQuantity = 7;
// //rule-5: division
// var moneyAvailable = 100;


// //rule-2: addition: var diye total er name likha
// var totalPrice = onionPrice + eggPrice;
// //rule-3:subtraction : 
// var priceDifference = onionPrice - eggPrice;
// //rule-4: multiplication
// var eggPriceMultiplication = eggPrice  * eggQuantity;
// //rule-5: division
// var eggGet = moneyAvailable / eggPrice;

// //declaring normal variable output
// console.log(onionPrice);
// console.log(eggPrice);
// //rule-1: addition: evabe console er vitor direct deya jay.
// console.log(onionPrice + eggPrice);
// //rule-2: addition
// console.log(totalPrice);
// //rule-3:subtraction : 
// console.log(priceDifference);
// //rule-4:multiplication
// console.log(eggPriceMultiplication);
// //rule-5: division
// console.log(eggGet);


//vid-17.6:(advanced) mathematical operation shorthand
// var price1 = 31;
// var price2 = 32;
// var sum = price1 + price2;
// var difference = price2 - price1;
// var multiplication = price1 * price2;
// var division = price1 / price2;
// console.log(sum);
// console.log(difference);
// console.log(multiplication);
// console.log(division);

//
// var doublePrice = price2 * 20;
// // var newPrice = price1 + 10;
// //ekhane price1 er man barano hoyeche tai new variable declare na kore eki variable name rakha jabe but shudhu name ta. kono variable name change na kore vitorer operation change korle (var) likhte hoy na. (var) always likhte hoy new variable create korar jonno. and variable name and operation name eki deya jay
// price1 = price1 + 10;
// //newprice name and previous name ek hole evabe shortcut koreo likha jay
// price1 += 30;
// // console.log(newPrice);
// console.log(price1);
// // for negative:
// price2 = price2 - 2;
// price2 -= 5;
// console.log(price2);

// var age = 14;
// // age = age + 1;
// age += 1;
// // jodi shudhu 1 barate  chai kono variable number e
// age++;
// console.log(age);
// // jodi shudhu 1 komate  chai kono variable number e
// var love = 100;
// love = love - 1;
// love -= 1;
// love--;
// console.log(love);


// // video- 17.7:string concatenation integer float parseInt, conversion:
// //print name with space
// var firstName = 'Jennie';
// var lastName = 'kim';
// // name er majhe space er jonno evabeo likha jay
// var fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //or

// var first = 'Ariana';
// var last = 'kim';
// var name = first + ' ' + last;
// console.log(name);

// // both string calculation
// var onionPrice = '42';
// var eggPrice = '41';
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice);
// // string er add hoy side by side. jodi jekono ekta string hoy then 1 ta string arekta string k niye add kore side by side boshbe.

// // 1 string calculation
// var onionPrice = 42;
// var eggPrice = '41';
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice);

// // without string calculation
// var onionPrice = 42;
// var eggPrice = 41;
// var totalPrice = onionPrice + eggPrice;
// console.log(totalPrice);


// // convert integer to float and parseInt to parseFloat
// //integer
// var sunglass = 3;
// //float
// var price = 99.99;

// //jodi string k integer e convert korte chai
// var onionPrice = '42';
// var eggPrice = '41';
// var onionPriceNumber = parseInt(onionPrice);
// console.log(onionPriceNumber);

// //jodi string er moddhe (.99) point er por man thake tahole integer korle (doshomik) er porer man fele dibe.
// var onionPrice = '42.50';
// var eggPrice = '41';
// var onionPriceNumber = parseInt(onionPrice);
// console.log(onionPriceNumber);

// //parsefloat = (.)(doshomik) er por value gulo show korar jonno
// var onionPrice = '42.50';
// var eggPrice = '41.33';
// var onionPriceNumber = parseInt(onionPrice);
// var eggPriceNumber = parseFloat(eggPrice);
// console.log(eggPriceNumber);
// console.log(eggPriceNumber + onionPriceNumber);


//video - 17.8: variable-types
//konta ki type er variable eta ber korar jonno (typeof) use kora hoy 
// var tShirtPrice = 200;
// console.log(typeof tShirtPrice);

// //
// var tShirtPrice2 = '200';
// console.log(typeof tShirtPrice2);
// //
// var isRaining = true;
// console.log(typeof isRaining);
// //jodi variable name declare na kori
// var isRomantic;
// console.log(typeof isRomantic);
// //date type 
// var today = new Date();
// console.log(today);
// console.log(typeof today);

// special edition
// var firstNumber = 0.1;
// var secondNumber = 0.2;
// var total = firstNumber + secondNumber;
// //(.) er por onekgulo digit dekhabe
// console.log(total);
// // toFixed => (.point) er por koy digit porjonto dekhabe (string) e 
// console.log(total.toFixed(2));
// // string k jodi float number e convert korte chai
// console.log(parseFloat(total.toFixed(2)));

//modulas(vagshesh)
var mangoes =7;
var hungryPerson = 2;
var dividing = mangoes / hungryPerson;
console.log(dividing);
var remaining = mangoes % hungryPerson;
console.log(remaining);





//video-17.9: summary
// 1.declaring variable: 5 ta step lage
// var eggPrice = 30; (number type variable)
// eggPrice = 39*2;(same variable name e value change korle (var) likhbo na)
//console.log(eggPrice); (konokichu publish korar jonno)
//console.log(typeof eggPrice); (ki type er variable)
// var singer = 'jennie lim'; (string type variable)
//var isHot = true/no; (boolean type variable)
