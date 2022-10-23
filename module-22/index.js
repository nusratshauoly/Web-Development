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
// 1 to 50 discovered to print
for(let i = 1; i <= 50; i++){
    console.log(i);
}



