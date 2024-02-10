
//18.3

// while condition
//1.loop variable
//2. condition inside while
//3.loop body
//4.change the loop variable
var roastGiven = 0; //loop variable
while(roastGiven < 7){ // condition inside while
   console.log("roast please"); //loop body
   roastGiven++;  //change the loop variable
//    console.log(roastGiven); //loop body
}

// 1 to 10 numbers print using while print
var number = 1;
while(number <= 10){
   console.log(number);
   number++;
}

// even number print (1 to 10) using while loop
var number = 0;
while(number <= 10){
   console.log(number);
   number = number + 2;
}

// odd number print (1 to 10) using while loop
var number = 1;
while(number <= 10){
   console.log(number);
   number = number + 2;
}

// 18.4: 

// 1 to 100 all odd number
var number = 1;
while(number <= 100){
console.log(number);
number = number + 2;
}

// javascript for loop
for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    console.log("roast please!");
}

// simple version of for loop
console.log("simple for loop");
for (var i = 0; i < 7; i++){
    // console.log("roast den please!");
    console.log(i);
}

// declare 1 to 10 using for loop
for(var i = 0; i <= 10; i++){
       console.log(i);
}

// declare 1 to 10 even number using for loop
for(var i = 0; i <= 20; i+=2){
    console.log(i);
}

// declare 1 to 10 odd number using for loop
for(var i = 1; i <= 20; i+=2){
    console.log(i);
}

// 18.5: run a loop for each element

// target: display every elements of an array using for loop
var numbers = [45, 87, 89, 56, 32, 51, 25, 51, 32];

for(var i = 0; i < numbers.length; i++){ //array te j koyta value ase oigular position ber korar jonn
    var number = numbers[i];
    console.log(number);
}

// display items on table using for loop
var items = ["bottle", "mouse", "pen"];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    console.log(item);
}

// 18.6: break and continue
// break condition using for loop
for(var i = 0; i <= 20; i++){
    console.log(i);
    if(i > 10){  //kono condition e break likhbo (condition er beshi hole break bondho hoye jabe) .jodi(i > 100) dei tahole 20 porjonto for loop er man porjonto jeye condition break hoye jabe.
      break;
    }
}

// break condition using while loop
var roastGiven = 0;
while(roastGiven < 10){
    console.log('roast please!');
    roastGiven++;
    if(roastGiven > 4){
       break;
    }
}

// example1: pen e debag korar shomoy break korbe means pen show korbena.
var items = ["bottle", "mouse", "pen"];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
         break;
    }
    console.log(item);
}

// example2: break statement
var numbers = [45, 87, 89, 56, 32, 170, 51, 25, 51, 32];

for(var i = 0; i < numbers.length; i++){ //array te jokhon 170 ashbe tokhon e break korbe. 
    var number = numbers[i];
    if(number > 100){
      break;
    }
    console.log(number);
}


// example 3 : continue statement/50 er cheye boro output gulo skip korbe ba loop continue korbe output e dekhabe na
var numbers = [45, 87, 89, 56, 32, 170, 51, 25, 51, 32];

for(var i = 0; i < numbers.length; i++){ //array te jokhon  ashbe tokhon e continue korbe. 
    var number = numbers[i];
    if(number > 50){
      continue;
    }
    console.log(number);
}


// 18.7 for and while loop in a reverse way

// while inverse way
var num = 1;
while(num <= 10){
    console.log(num);
    num++;
}
// while reverse way
var num = 10;
while(num >= 1){
    console.log(num);
    num--;
}

// for inverse way
for(var i = 0; i <= 10; i++){
    console.log(i);
}
// for reverse way
for(var i = 10; i >= 1; i--){
    console.log(i);
}

// video - 18.10: 

/*
---------------
Loop
---------------
1. Display "Ajke amar mon valo nei" for 39 times
2. Display numbers between 58 to 98
3. Show all even numbers from 412 to 456
4. show all odd numbers 581 to 623
5. Difference between while loop and for loop
6. Declare an array for all the topics that you have learned last few days and display them as output
7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop
8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.
9. Write the price of the books that you have. Display the prices if the prices is lower than 200.

*/
