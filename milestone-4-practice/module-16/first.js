var onionPrice = 10;
var eggPrice = 20;
//addition
var totalPrice = onionPrice + eggPrice;
console.log(onionPrice);
console.log(eggPrice);
console.log(onionPrice + eggPrice);
console.log(totalPrice);
//subtruction
var priceDifference = onionPrice - eggPrice;
console.log(priceDifference);

// multiplication
var orangePrice = 7;
var quantity = 7;
var totalCost  = orangePrice * quantity;
console.log(totalCost);

// division;
var money = 500;
var player = 5;
var eachPlayer = money / player;
console.log(eachPlayer);

// 16.7
var tomatoPrice = 25;
tomatoPrice = 40;

var price1 = 31;
var price2 = 32;
//add some value to the existing value
price1 = price1 + 10;
console.log(price1);

//addition to the same variable to the shorthand 
price1 += 10;
console.log(price1);

// -= means deducting some values from the ccurrent value
price2 = price2 - 5;
price2 -= 5;
console.log(price2);

// ei shorthand diye (* and /) o korao jabe
price1 *= 5;
price2 /= 5;
console.log(price1);
console.log(price2);

// 
var age = 15;
age = age + 1;
// ++means adding to the existing value er shathe 1 barbe 
age++;

var love = 100;
love = love - 1;
// -- means subtracting to the existing value er shathe 1 kombe 
love--;

console.log(love);

// 16.8:
var price1 = 31;
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);
var firstName =  "Jennie";
var lastName = "kim";
var fullName = firstName + lastName;
console.log(fullName);

var firstName1 = "nusrat";
var lastName1 = "jahan";
var fullName = firstName1 + ' ' + lastName1; //' ' for space in the between
console.log(fullName);


// number string
var price1 = '31';
var price2 = 10;
var total = price1 + price2;
console.log(total);

// convert string to number
// parseInt used to convert string to number
console.log(price1);
var price1Number = parseInt(price1);
console.log(price1);

// convert float string to float number 
// parseFloat used to convert floatstring to number
 var gpa = '3.41';
var gpaNumber = parseFloat(gpa);
console.log(gpa);

// 16.9
// typeof diye variable e kon type er value ache ta ber kora jay
var price = 100;
console.log(typeof price);

var price1 = '100';
console.log(typeof price1);

var isHappy = true;
console.log(typeof isHappy);

var romantic;
console.log(typeof romantic);

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(4);

sum = parseFloat(sum);
console.log(sum);

// / this means vagfol
// % this means vagshesh
var mangoes = 7;
var person = 2;

var remaining = mangoes % person;

console.log(remaining);