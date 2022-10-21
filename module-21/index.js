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


// // video - 21.4: sum of all numbers in array:

// const numbers = [44, 23, 654, 45, 767, 45];
// // number array er full legth bujhate (numbers.length) dekhano hoyeche
// // kono ekta loop er vitore onekgulo element er +,-,*,\ and total kono varaible e rakhte chai tahole je initial varible set kortesi oita loop er vitor kora jay na karon bar bar loop e 0 hoye jabe. tai etake for loop er bahire boshate hobe.
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
// // i er position man 0 theke everytime loop kore 1 bar barbe and every position er number change hobe
//     const element = numbers[i];
//     // console.log(element);
//     // const sum = 0;
// // const er man bar bar change korte parbona tai const bad diye let nibo
// // kono ekta loop er vitore onekgulo element er +,-,*,\ and total kono varaible e rakhte chai tahole je initial varible set kortesi oita loop er vitor kora jay na karon bar bar loop e 0 hoye jabe. tai etake for loop er bahire boshate hobe.
//     //    let sum = 0;
//        sum = sum + element;

// }
//  console.log(sum);

// //  clear code
// const numbers1 = [44, 23, 34, 32, 54, 5, 78];
// let sum1 = 0;
// for(let i = 0; i < numbers.length;i++){
//     const element1 = numbers1[i];
//     sum1 = sum1 + element1;
// }
// console.log(sum1);

// // using function to sum of array
// function arrayTotal (numbers){
//     let sum = 0;
//     for(let i = 0; i < numbers.length; i++){
//            const elements = numbers[i];
//            sum = sum + elements;
//     // return jodi for loop er vitor dei tahole each time ekta kore value add dekhabe total na dekhaye tai return dibo for er bahire
//         //    return sum;
//     }
//     return sum;
// }
// const total = arrayTotal([32, 45, 67]);
// console.log('array total', total);



// // video- 21.5: find the largest element of an array
// // function er parameter e 1 ta array nibo numbers name e
// function largestElement(numbers){
// // largest or lowest number ber korar shomoy initial j man sheta set korbo array er moddhe first j element ache sheta ; let largest = numbers[0];
//     // let largest = 0;
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const element = numbers[i];
//     // console use korsi array te ki ki element ase declare korar jonno
//         // console.log(element);
//     // if condition use korbo konta shobcheye biggest number ta ber korar jonno
//         if(element > largest){
//             largest = element;
//         }
//     }
// // return hobe for loop er bahire
//     return largest;
// }
// const ages = [12, 54, 2, 34, 75, 32, 12];
// const oldest = largestElement(ages);
// const oldest2 = largestElement([-4, -2, -17]);
// console.log('oldest',oldest);
// // negative output er shomoy element er position ta dekhay
// // negative er shomoy boro number er man choto hoy like: -17 is smaller than -2.
// console.log('oldest2',oldest2);

// // task: find the lowest element of an array



// video - 21.6: create a fibonacci series using for loop
// [0,1,1,2,3,5,8,13,21, 34, 55]
/* 
3rd = 2nd + 1st;
4th = 3rd + 2nd;
5th = 4th + 3rd;
6th = 5th + 4th;
16th = 15th + 14th;
119th = 118th + 117th;
nth = (n-1)th + (n-2)th;
ith = (i-1)th + (i-2)th;
 */
// i=2 ; theke start karon 1st and 2nd position er addition = 3rd position
// 10 element projonto show korbe
// i= value as  0,1,2 holo array er position number
/*const fibo = [0,1];
for(let i = 2; i <= 10; i++){
   fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo); 
*/

// video: 21.7: handle unexpected input string

// using function in fibonacci
function fibonacciSeries(num){
    const fibo = [0,1];
    for(let i = 2; i <= num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fiboSeries = fibonacciSeries(13);
console.log(fiboSeries);

// input validate korbo = unvalid input dile message show korbe : input type number hote hobe otherwise error show korbe 

// const fiboSeries1 = fibonacciSeries(1);
// const fiboSeries2 = fibonacciSeries(-15);
// const fiboSeries3 = fibonacciSeries('nusrat');
// const fiboSeries4 = fibonacciSeries([1234]);

// function fibonacciSeries(num){
//     if(typeof num != 'number'){
//         return 'please give a number';
//     } 
//     else if ( num < 0){
//         return 'please enter a positive number greater than 2';
//     }
//     const fibo = [0, 1];
//     for(let i = 2; i <= num; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2];
//     }
//     return fibo;
// }
// const fiboSeries4 = fibonacciSeries([1234]);
// const fiboSeries2 = fibonacciSeries(-15);
// console.log(fiboSeries4);
// console.log(fiboSeries2);