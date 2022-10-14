// // recape
// // variable, array, condition
// var bottleColor = 'yellow';
// var waterQuantity = 1;
// var isFull = false;

// // array
// var items = ['bottle', 'mug', 'paper', 'pen'];
// items.indexOf('paper');
// items.indexOf('logens'); // position will be -1 (jodi array element e na thake)
// items.push('envelop');
// items.push('watch');
// items.pop();

// // conditionals
// if(items.length >= 4){
//     console.log('you have too many stuff on your desk.');
// }
// else if (items.length == 4){
//     console.log('you only have 4 items');
// }
// else{
//     console.log('you have a clean desk.');
// }

// video-18-5.2: while loop
// while(expression){
  //statement
//}
// var roastGiven = 0;
// while (roastGiven < 7){
//     // koyta roast  deya hoyeche
//     // console.log(roastGiven);
//     console.log('roast den, please!');
//     // 3 types of increment
//     // roastGiven = roastGiven + 1;
//     // roastGiven += 1;
//     roastGiven++;
//     console.log(roastGiven);
// }

// video-18-5.3: more while loops 
//conditionally kono kaj step bby step bar bar loop korar  jonno while loop use kora hoy.
// 1-10 numbers print
// var number = 0;  //loop  vaariable
// while(number <= 10){
//   console.log(number);
//   number++;
// }

//print  odd, even number
// printing odd number(bijor)
// var number=1;
// while(number <= 20){
//   console.log(number);
//   number = number + 2; // 2 kore barbe
// }
// printing even number(jor)
// var number=0;
// while (number <= 20){
//   console.log(number);
//   number = number + 2; // 2 kore barbe
// }

// video-18.4: for loop
// for([initialization]; [condition]; [final-expression]){
  // statement;
//}

// for(var roastGiven = 0; roastGiven < 7; roastGiven++){
//   console.log('roast den, please!!');
// }

// // another printing 
// console.log('running a for loop');
// for(var roastGiven = 0; roastGiven < 7; roastGiven++){
//   console.log('roast den, please!!');
//   console.log(roastGiven);
// }

// // for loop ideally evabe likhe
// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
// // 1-10 print
// for(var i = 0; i <= 10; i++){
//   console.log(i);
// }
// // odd(bijor) number print (1-20)
// for(var i = 1; i <= 20; i+=2){
//   console.log(i);
// }

// // even(jor) number print (1-20)
// for(var i = 0; i <= 20; i+=2){
//   console.log(i);
// }

// video- 18_5.5: recap loop:
// basic while loop
// var i = 0;
// while(i < 7){
//   console.log(i);
//   i++;
// }
// // basic for loop
// for(var i = 0; i <= 7; i++){
//   console.log(i);
// }

// array-loop (un symmetric number er jonno usually for loop use kore)
// var numbers = [45, 86, 34, 87, 12, 98, 82];
// for(var i = 0; i < 7; i++){
//   console.log(numbers); //console.log e (numbers) dibo karon tahole numbers er array te je koyta number  ase sheta show korbe
// }

// // jodi ei numbers array er vitor kono element increment position e show korate chai
// var numbers = [45, 86, 34, 87, 12, 98, 82];
// for(var i = 0; i < 7; i++){
//   var element = numbers[i]; //  ase sheta dekhabe
//   console.log(element); 
// }

// // array  er moddhe condition e fixedd kono number diye compare korena
// var numbers = [45, 86, 34, 87, 12, 98, 82, 33, 44];
// // lenngth mane array te j koyta element ache
// for(var i = 0; i < numbers.length; i++){
//   var element = numbers[i]; //  ase sheta dekhabe
//   console.log(element); 
// }

// array for items
var items = ['bottle', 'mobile', 'watch', 'book', 'paper'];
for(var i = 0; i < items.length; i++){
  var item = items[i]; //item er moddhe 1 ta kore element nibo  increment kore  i position e items theke  
  console.log(item);
}
