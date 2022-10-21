// // video-21.1: random numbers
// // absolute number ber korar jonno (- thakle + korbo, + thakle to r change korte hobena)
// const myNumber = -5;
// const output = Math.abs(myNumber);
// console.log(output);

// // another numbers
// //  2 (.point) er por full number neyar jonno uporer dike uthabe (ceil)
// const myNumber0 = 2.6398;
// const output0 = Math.ceil(myNumber0);
// console.log(output0);

// //  2 (.point) er age full number neyar jonno nicher dike nambe (floor)
// const myNumber1 = 2.6398;
// const output1 = Math.floor(myNumber1);
// console.log(output1);

// //  2 (.50) er beshi number thakle full number and (.50 er kom thakle (. tuku) bad dibo(round)  (nearest full number)
// const myNumber2 = 2.2398;
// const output2 = Math.round(myNumber2);
// console.log(output2);
// //  or
// const myNumber3 = 2.6398;
// const output3 = Math.round(myNumber3);
// console.log(output3);

// // random number ber korar jonno (0 to 1 er moddhe jekono random number er jonno)
// const output4 = Math.random();
// console.log(output4);

// // 1 to 10 er moddhe jodi kono random number dorkar hoy karon normally random number e 0 to 1 er moddhe number thake tai floor diye declare korsi jate . er por barti number tuku na thake and full number dekhay 
// const output5 = Math.random() * 10;
// const rounded = Math.floor(output5);
// console.log(rounded);


// // jodi  6 chai then round ddiye kkorte pari 
// const output6 = Math.random() * 6;
// const rounded1 = Math.round(output6);
// console.log(rounded1);

// // or  for loop diye korte pari
// for (let i = 0; i <= 30; i++){
//     const output7 = Math.random() * 6;
//     const rounded2 = Math.round(output7);
//     console.log(rounded2);
// }

// // math er formula
// // Math.power()
// // Math.min()
// // Math.max()


// video: 21. 2: swap varaible, swap without temp, destructing:
// swap variable
// let first = 5;
// let second = 7;
// console.log(first , second);
// // temp = temporary (first er value temp e rakha hoise temporary before swap)
// let temp = first;
// // second er value first e rakha hoise
// first = second;
// // temp er value second e rakha hoise
// second = temp; 
// console.log(first , second);

// // destructuring (new js feature without swap)
// let first1 = 5;
// let second1 = 7;
// console.log(first1 , second1);
// [first1 , second1] = [second1, first1];



// video-21.3: find max of two values/three values
// max value of two
//const business0 = 450;
// const minister0 = 350;
// if(business0 > minister0){
//     console.log('business is bigger');
// }
// else{
//     console.log('minister is bigger');
// }

// max value of three
/* const business = 950;
const minister = 750;
const army = 600;
if(business > minister && business > army){
    console.log('business is bigger');
}
else if(minister > business && minister > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
}
*/


// another way of compare three
// max variable niye korle jotogulo number ase tar moddhe maximum value tai nibe
/* const business = 950;
const minister = 750;
const army = 600;
var max = Math.max(business, minister, army);
console.log('largest is', max); */

// function diye largest number find kora
// function findLargest(first,second){
//     if(first > second){
//         return first;
//     }
//     else{
//         return second;
//     }
// }
// const largest = findLargest(354,241);
// console.log('largest is', largest);

// task1: create a function that takes three numbers as input parameter and returns you the largest number of the three
/* function findSmallest(first,second,third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else {
        return third;
    }
}
const smallest = findSmallest(354,241,500);
console.log('smallest is', smallest);
*/

// task2 : create a function that takes three numbers as input parameter and returns you the smallest number of the three


// video - 21.4: sum of all numbers in array:

const numbers = [44, 23, 654, 45, 767, 45];
