// // video - 23-5.1: for loop in a forward and reverse way
// // 1 to 5 sequentially show korbe (forward way)
// // ekhane condition 2 vabe hoy (i<=5 / i<6)
// // 1 type of solution using for loop
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }

// // another solution using function
// function consoleNumber(i){
//     console.log(i);
// }
// // ekhane consoleNumber call e (1) or any number show korbe ja dibo
// consoleNumber(1);

// //4. recursion (kono function er vitor theke shei eki function k call call korle take bola hoy recursion. ekhane (consoleNumber function er loop er vitor takei call korse))
// // another code reverse way ( jodi function er vitor ei function call kori then eki number bar bar call korbe nijer function er vitor nijekei as a result eki nuber bar bar print hotei thakbe)
// function consoleNumber(i){
// // 3.condition dibo i er value 5 er cheye boro hole condition / loop off hoye jabe
//     if(i > 5){
//         return ;
//     }
//     console.log(i);
//     //1. consoleNumber(i);
// //2. (++i / i + 1)dile 1 kore j increment hoy ta condition er porer line e jeye hoy
//     consoleNumber(i+1);
// }
// consoleNumber(1);



// /*  video - 23_5.2: recursion using sum of numbers
// 1 to 5 numbers add korea jay 2 types : 1. incremental way(loop er vitor 1 , 1 kore add korbo) 2. reverse way te 5 ten 4 then 3 then 1 then 1 evabe add korte parbo.add*/
// // reverse way te korbo
// // 1. sum korbo tai initial hobe 0
// let sum = 0;
// // 2.i-- dibo karon 5 theke 1 er dike jabe add korar jonno decreasing way te
// for(let i = 5; i>=1; i--){
//     sum = sum + i;
// }
// console.log(sum);

// // recursion way te add korbo decreasing way te add korbo
// function sum(i){
// // 1.jodi i-- dei tahole current value ta pabe but decreasing j value sheta pabe na , i-- dile decreasing hoy condition er porer line e 
// // 2.--i dile return e 1 kome calculation shuru korbe
// if(i==1){
//     return 1;
// }
//    return i + sum(--i);
// } 
// console.log(sum(5));

// // return er calculation
// // 5 = sum(--i)
// // i + sum(--i);
// // 5 + sum(4);
// // 5 + 4 + sum(3)
// // 5 + 4 + 3 + sum(2)
// // 5 + 4 + 3 + i + sum(--i)
// // 5 + 4 + 3 + 2 + sum(1)
// // 5 + 4 + 3 + 2 + 1
// // 15


// // video-23_5-3: Explore factorial recursion using a for loop concept
// // function e return korte hoy karon return result niye abar calculation korte hobe
// // 4!  = 4*3*2*1;
// let factorial = 1;
// for(let i = 4; i >= 1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

// // ///////////////
// // calling function inside the function(recursion)
// function factorial(i){
   
// // 5.(stopping condition) i er value jokhon e 1 kore  barbe tokhon e sheta stop kore return kore dibo 
//    if(i==1){
//     return 1;
// }

// // function e jotobar call korbo totobar condition e i er man 1 kore komte thakbe
// //2. jehetu calculate kore man ta ber korte chai er jonno function er vitore return dibo (i-- / i-1)dite pari
// // 3. i-- dile porerline e 1 kome calculation hobe 
// // 4.or evabeo likhte pari karon (+) and (*) number position change holeo kono problem nai.

// //    return factorial(i--) * i;
//    return i * factorial(--i);
// }

// // 1. initial value
// console.log(factorial(4));

// // i * factorial(--i)
// // 4 * factorial(3)
// // 4 * 3 * factorial(--i)
// // 4 * 3 * factorial(2)
// // 4 * 3 * 2 * factorial(1)
// // 4 * 3 * 2 * 1
// // result : 24


// // video- 23_5.4:searching products(array of object)
// const products = [
//     {name: 'iphone14', price: 70000},
//     {name: 'samsung galaxy 14', price: 60000},
//     {name: 'dell laptop', price: 50000},
//     {name: 'lenovo laptop', price: 55000},
//     {name: 'Asus laptop', price: 35000},
//     {name: 'smart watch samsung', price: 7000},
//     {name: 'apple watch', price: 20000},
//     {name: 'plus one phone 4', price: 27000}
// ];
// function searchProducts(products, searchText){
// // 3. jodi shudhu name gulo output na chai name gulo ekta array er moddhe  chai tahole sheta result er array te full product ta push kore dibo
//     const result = [];

//     for(const product of products){
//     // 2.ekhane watch diye search disi tai output e watch diye joto item ache sheta dekhano hoise er jonno (product.name.includes('')) product er name er moddhe jeta common name ache sheta diye search korte hobe

//         // if(product.name.includes('watch')){
//         // if(product.name.includes('laptop')){

//     // 2.1: to do dynamic operation code er moddhe search na kore (.includes e functiion er [parameter ta dibo (searchText))
//         if(product.name.includes(searchText)){
// // 1.product er name diye search korbo tai (product.name) dibo
//             // console.log(product.name);

//     // 3.1: jodi shudhu name gulo output na chai name gulo ekta array er moddhe  chai tahole sheta result er array te full product and price ta push kore dibo
//               result.push(product);
//         }
//     }
//     // 3.2 fll product funcion take retun kore dibo
//     return result;
// } 
// // 2.2: parameter includes er por (searchProduct) initial value te search option e function er second parameter e ki likhbo sheta likhbo likhbo.
// const matched = searchProducts(products,'watch');
// console.log(matched);


// // video-23_5.5: break and continue for selecting so,e products
// // 1.kono product jodi 5000 er niche hoy tahole tahole oita skip korbo
// const products = [
//     {name: 'iphone14', price: 70000},
//     {name: 'samsung galaxy 14', price: 6000},
//     {name: 'dell laptop', price: 50000},
//     {name: 'lenovo laptop', price: 55000},
//     {name: 'Asus laptop', price: 35000},
//     {name: 'smart watch samsung', price: 4000},
//     {name: 'apple watch', price: 9000},
//     {name: 'plus one phone 4', price: 27000}
// ];
// // break statement
// for(const product of products){
// // 2. break : jodi kono product er price 5000 er kom hoy tahole ei loop theke break nibe. but oi option er por r shamne egobe na. 
//    if(product.price < 5000){
//     break;
//    }
//    console.log(product);
// }

// // continue statement
// // 10000 takar nicher product show korbena array er moddhe jekhane thakuk shekhan thekei dekhabe
// for(const product of products){
//     if(product.price < 10000){
//         continue;
//     }
//     console.log(product);
// }
// console.log('after the loop');














