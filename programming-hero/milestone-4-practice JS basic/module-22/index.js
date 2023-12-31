// // video- 22.1: maximum element of an array
// function largestElement(numbers){
//     let max = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//         if(element > max){
//             max = element;
//         }
//     }
// }

// // minimum number element of an array
// function smallestElement(numbers){
//     let min = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
// // array er vitor  er element gulo first e 1 ta element  nibo then er porer number element er shathe check korbo evabe por por check kore jabo tai check korte hobe element ta min value first e jeta pick korbo tar cheye choto kina
//         if(element < min){
//             min = element;
//         }
//     }
// }

// // onek gulo element jokhon ekshathe select kori, jor or bijor number kongulo 


// // video- 22.2: remove duplicate items from an array
// // 1.array er element show koranor onek way ache tar moddhe (for) and (for of) duita condition
// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

// function removeDuplicate(names){
// // 2.names er moddhe jei name gulo 1 bar kore ase sheigulo ekhane store korbo tai ekta empty array nibo etake bole (default value).
//     const unique = [];

// /*3.  for(let i = 0; i < names.length; i++){
//         const element = names[i];
//         console.log(element);
//     }
// */
// // 4. for . of loop 
// //5. names er array te jotogulo element ache shobgulo show korbe
// for(const element of names){
//     console.log(element);
// // 6. ekhon element er item unique array er moddhe ache kina check korte hobe, jodi thake then ok or jodi na thake tahole add korte hobe if condition diye.  unique e jodi na thake tahole element er value hobe -1.
//      if(unique.indexOf(element) == -1) {
//          unique.push(element);
//     }   
// }
// return unique;
// }
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// video-22.3: string nature and reverse string
// for array example:
// const myArray = [1,2,34,43];
// myArray.length;
// myArray[0];
// myArray[2];
// myArray.push(33);
// myArray.length;
// myArray.pop();

// for string 
// string er moddhe space o count hoy
// const myString = 'hello how are you';
// myString.length;
// // check korar jonno webpage e (inspect e jeye console e jeye js code likhbo)

// myString.length
// 17
// ''.length;
// 0
// 'a b'.length;
// 3
// myString[0]
// 'h'
// myString[1]
// 'e'

// kono 1 ta string theke kono 1ta index and position diyeo berkorte parbo
// but string is immutable means string er contents change korte parbo na or anything push korte parbona.
// myString[0] = 'w' //change korar jonno
// 'w'
// myString
// 'hello how are you'

// // array and string eo loop use kora jay (for of)
// for(const element of myArray){
//     console.log(element);
// }
// // for string
// for(const char of myString){  //char mane character
//     console.log(char);
// }

// 1.reverse a string
// 2.greetings er text take reverse korbe 
// const greetings = 'hello, how are you?';
// // 3.reverseString hishebe kono text ashbe tai text name dilam onno jekono name like string or other thing o dite pari
// function reverseString(text){
// // 6.1.text take reverse korar jonno : string take notun vabe reverse korar jonno notun variable declare kore tate boshabo
//    let reverse = '';
// // 4.for loop (for .. of) loop use korbo
//    for(const letter of text){
    // console.log(letter);
// 6.2.text take reverse korar jonno : string take notun vabe reverse korar jonno notun variable declare kore tate boshabo
//     reverse = letter + reverse;
//  }
// }
// //5. function k call korar jonno new variable name tar moddhe function name rakhte hobe
// const reversed = reverseString(greetings);
// console.log(reversed);

// // fullcode
// const greetings1 = 'hello, how are you?';
// function reverseString(text){
//     let reverse1 = '';
//     for(const letter of text){
//         reverse1 = letter + reverse1;
//     }
// }
// const reversed1 = reverseString(greetings1);
// console.log(reversed1);


// video-22.4: handle unexpected function into parameter error

// add two number using function

// function add(num1, num2){
//     // 4.problem solve er jonno first debug kore dekhbo or console.log boshiye dekhbo
//     // 5. console.log('parameters', num1, num2);
//      const sum = num1 + num2;
//      return sum;
// }
// const firstTotal = add(63, 67);
// console.log(firstTotal);
// // 3. but 2/3/4/ er beshi number add or other calculation korte parbo jodi jei number gulo add or other calculation korbo oigulake 1 ta parameter element dhora hoy and comma diye 2nd parameter element likha hoy
// const secondTotal = add(54 + 981, 1);
// console.log(secondTotal);
// // 1.function callback er shomoy parameter er vitor shudhu number dibo kono (+,-,*,/) dibo na
// const thirdTotal = add(12 + 13);
// console.log(thirdTotal);

// // multiply two number using function
// function multiply(num3, num4){
//     const multiplication = num3 + num4;
//     return multiplication;
// }
// // 2.this is wrong
// const firstResult = multiply(13 *  17);
// console.log(firstResult);
// const secondResult = multiply(4, 9);
// console.log(secondResult);


// video-22.5: add and multiplication to calculate wood requirements
/*
  chairWood = 3cft/chair;
  tableWood = 10cft/table;
  bedWood = 50cft/bed;
*/
// 1.koyta kon furniture lagbe
// function woodCalculator(chairQuantity, tableQuabtity, bedQuantity){
// // 2.konta banate kototuku wood lagbe
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
// //3. wood calculation
//     const chairWoodQuantity = chairQuantity * perChairWood;
//     const tableWoodQuantity = tableQuabtity * perTableWood;
//     const bedWoodQuantity = bedQuantity * perBedWood;
// // 4. adding all wood quantity
//     const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
//     return totalWood;

// }
// // 5. kon furniture koyta banabo ta woodCalculator er vitor number dibo
// const firstOption = woodCalculator(1, 1, 1);
// console.log(firstOption);

// const secondOption = woodCalculator(3, 3, 4);
// console.log(secondOption);


// video - 22.6: divisible
//1. 1 to 50 discovered to print
// for(let i = 1; i <= 50; i++){
// // 2. divided by 3/5/3 and 5
// if(i%3 == 0 && i%5 == 0){
//     console.log('foobar');
// }
// else if(i%3 == 0){
//     console.log('foo');
// }
// else if(i%5 == 0){
//     console.log('bar');
// }
// else {
//     console.log(i);
// }
// }



// video-22.7:find cheapest phone from an array
// array of object theke kono property value compare kore ber kora
// objects
// const phones = [
//     {name: 'samsung s5', price: 45000, camera: 10, storage: 32},
//     {name: 'walton m32', price: 15000, camera: 8, storage: 8},
//     {name: 'shaomi m3', price: 75000, camera: 16, storage: 8},
//     {name: 'oppo a2', price: 25000, camera: 32, storage: 8},
//     {name: 'nokia n95', price: 55000, camera: 5, storage: 8},
//     {name: 'htc 81', price: 5000, camera:4, storage: 8}

// ]
// //1. array er moddhe j element ache oitai cheapest phone hishebe dhore nibo
// let cheapest = phones[0];
// //2. loop( for ..  of) dibo and each phone check korbo phones object array theke
// for(const phone of phones){
// // 3. each phone show korbe object array er
//     // console.log(phone);
// // 4.compare price : condition loop (shudhu phone er price k compare kortesi tai shudhu phone.price compare korbo cheapest.price er shathe but cheapest = phone (cheapest er shathe phone k set korbo))
//    if(phone.price < cheapest.price){
//     cheapest = phone;
//    }
// }
// // 4.we can try normally condition loop as example
// console.log(cheapest);


// // video- 22.8: total cost using object
// const products = [
//      {name: 'laptop', price: 43000},
//      {name: 'shirt', price: 500},
//      {name: 'watch', price: 3680},
//      {name: 'phone', price: 55000}
// ];
// let totalPrice = 0;
// for(const product of products){
// // 1. product er total price ber hobe previous product er total price + new product er price add kore total product price ber hobe
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

// // adding mega shopping
// const shoppingCart = [
//     {name: 'laptop', price: 43000, quantity: 1},
//     {name: 'shirt', price: 500, quantity: 8},
//     {name: 'watch', price: 3680, quantity: 3},
//     {name: 'phone', price: 55000, quantity: 1}
// ];
// let shoppingCartTotal = 0;
// for(const product of shoppingCart){
//     console.log(product);
//     const productTotal = product.price * product.quantity;
//     shoppingCartTotal = shoppingCartTotal + productTotal;
// }
// console.log(shoppingCartTotal);


// video- 22.9: counting animals
// suppose first 10 miles e average e each mile e 10 ta kore animal thake . second 10 theke 50 mile e average e 50 ta kore animal thake, and er cheye beshi mile e gele each mile e average a 100 ta kore animal thakbe
// first 13 miles jabo (ist 10 miles * animals 10 ta kore)=10*10 = 100 . Next 3 miles 11 to 13 ( 3 miles * each mil e 50 animals)= 50 * 3;
//  function animalCount(miles){
//     // 1. first and second 10 miles e kotota animal ache
//     const animalDensityFirst10PerMiles = 10;
//     const animalDensitySecond10PerMiles = 50;
//     const animalDensityRestMiles = 100;

//     if(miles <= 10){
//         const count = miles * animalDensityFirst10PerMiles;
//         return count;
//     }
//     else if(miles <= 20){
//     // 2. ekhane first 10 mile age dibo then baki mile count korbo
//         const firstDenseAnimals = 10 * animalDensityFirst10PerMiles;
//     //3.total miles theke first 10 miles bad dibo
//         const restMiles = miles - 10;
//         const secondDenseAnimals = restMiles * animalDensitySecond10PerMiles;
//         const totalAnimals = firstDenseAnimals + secondDenseAnimals;
//         return totalAnimals;
//     }
// //4. 20 miles er porer animal count er jonno
//     else{
//         const firstDenseAnimals = 10 * 
//         animalDensityFirst10PerMiles;
//         const secondDenseAnimals = 10 * animalDensitySecond10PerMiles;
//         const restMiles = miles - 20;
//         const restDenseAnimals = restMiles * animalDensityRestMiles;
//         const totalAnimals = firstDenseAnimals + secondDenseAnimals + restDenseAnimals;
//         return totalAnimals;

//     }
// }
// // animalDensityFirst10PerMiles count er jonno ( if condition e calculate hobe)
// const animals1 = animalCount(10);
// // animalDensitySecond10PerMiles count er jonno(else if condition e calculate hobe)
// const animals2 = animalCount(17);
// // animalDensityRestMiles count er jonno (else condition e calculate hobe)
// const animals3 = animalCount(25);
// const animals4 = animalCount(55);

// console.log(animals1);
// console.log(animals2);
// console.log(animals3);
// console.log(animals4);

// video -22.10: summary

