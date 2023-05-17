// adding sum 1 to 5 using
// 1. jokhon kono kichu add korbo tokhon sum er value default vabe 0 nibo. 
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log(sum);

// reverse way te decremental way
let sum = 0;
for(let i = 5; i >= 1; i--){
   sum = sum + i;
}
console.log(sum);

// (using recurion) function declare kore add korbo
function sum(i){
    if(i == 1){
       return 1;
    }
   // console.log(i);
   return i + sum(i - 1);
}
const result = sum(5);
console.log(result);


//////////////////////////////////////////

// Module- 24_5-2: Explore Factorial Recursion using a for loop concept:

// Module- 24_5-2: Explore Factorial Recursion using a for loop concept:



//****** */ kono ekta function er vitor theke shei function k jodi arekbar calll kora ho shetake bole recursion.



/*
// 1.
   5 + sum(5 - 1)
 = 5 + sum(4)

// 2.
   5 + i + sum (i - 1)
   5 + 4 + sum (4 - 1)
 = 5 + 4 + sum(3)

// 3.
   5 + 4 + i + sum (i - 1)
   5 + 4 + 3 + sum (3 - 1)
   5 + 4 + 3 + sum (2)

// 2.
   5 + 4 + 3 + i + sum (i - 1)
   5 + 4 + 3 + 2 + sum (2 - 1)
   5 + 4 + 3 + 2 + sum (1)

// 1.
   5 + 4 + 3 + 2 + 1
*/


// factorial
// factorial = 1 dibo karon 1 er shathe 2, 3, 4, 5 gun hobe tai
let factorial = 1;
for(let i = 5; i >= 1; i--){
   factorial = factorial * i;
}
console.log(factorial);


// factorial using recursion
function factorial(i){
   if(i == 1){          // base case / stopping condition 
       return 1;
   }
   return i * factorial(i - 1);
}
const result = factorial(5);

/*
1.
    5 * factorial (4);

2.
    5 * i * factorial(i - 1)
    5 * 4 * factorial(4 - 1)
    5 * 4 * factorial(3)

3.  
    5 * 4 * i * factorial(i - 1)
    5 * 4 * 3 * factorial(3 - 1)
    5 * 4 * 3 * factorial(2)

4.
    5 * 4 * 3 * i * factorial(i - 1)
    5 * 4 * 3 * 2 * factorial(2 - 1)
    5 * 4 * 3 * 2 * factorial(1)
    
5. 
    5 * 4 * 3 * 2 * 1 = 120
*/


/*
The factorial formula:
n! = n*(n-1)!
2! = 2 * (2 - 1)! = 2 * 1! = 2 * 1
3! = 3 * (3 -1)! = 3 * 2! = 3 * 2 * 1
4! = 4 * (4 - 1)! = 4 * 3! = 4 * 3 * 2 * 1
*/

// Recusion is similar to loop. Let's compare recursion with while loop.

/*
Recursion:

function sum(i){         //{here (i) is a parameter}
     if(i == 1){         // i == 1 is condition 
       return 1;
    }
    return i + summ(i - 1);      // decrement
}
const result = sum(5);
console.log(result);

*/

/*
While Loop:

var num = 0;      //{loop variable}

while(num < 5){   //condition
    console.log("Hello");
    num = num + 1;          //{increment.}

}


*/

///////////////////////////////////////////////////////////////////////


// Module- 24_5-3(optional) Explore what you can do with Javascript Object:

/*
an object has two characteristics
  1. they have some key characteristics
  2. they can do work
*/

const nayok = {
    name: 'Sakib Khan',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friends: ['apu', 'raaz', 'salman', 'amir'],
    //1. object er moddhe array o boshano jay
    movies: [{name: 'no. 1', year: 2025}, {name: 'king khan', year: 2018}],
    //2. object er vitor function o boshano jay
    act: function(){
        console.log('acting like Sakib Khan');
    },
    car: {
        brand: 'tesla',
        price: 5000000,
        made: 2025,
    //3. object er vitor sub object boshano jay
        manufacturer:{
            name: 'tesla',
            ceo: 'Elon Mask',
            country: 'USA'
        }
   }
}
console.log(nayok.friends);
console.log(nayok.car);

// 2. function call
console.log(nayok.act);
nayok.act();


///////////////////////////////

// array: array is a 1 type of object
const products = [
    {name: 'phone', price: 12000},
    {name: 'laptop', price: 32000},
    {name: 'phone', price: 12000},
    {name: 'phone', price: 12000},
    {name: 'phone', price: 12000},
]
products[0];
products[1];


// ////////////////////////////////

// declare a object (normally don't do like this)
// const products = [15, 56, 87];
const products = {
    '0': 15,
    '1': 56,
    '2': 87 
}

/////////////////////////////////////


// arguments (its an array like object not a 100% array but it has a index we can search index number position but push,pop and other this array can not be run here but for..of diye chalate parbo)
// arguments can only find inside function and joto jotogulo parameter diye function call korbo kom/beshi call kori r na kori joto element ache shob gulo argument peye jabe 
function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments[3]);
}
add(12, 13, 45, 89, 78);


////////////////////////////////////////////////////////////////////////


// Module-24_5-4(abvanced) Find the matching product by searching products:

const numbers = [45, 65, 23, 98, 19];
for(let i = 0; i < numbers.length; i++){
    // 1. number er vitor i take pathaye dile numbers gulo pabo
   const number = numbers[i]; 
   console.log(number);
}


// er cheye simplified version ache(for er modhe directly variable declare kore dibo) => (for..of) = array er moddhe value gulo loope through kore pete chaile
for(const number of numbers){
    console.log(number);
}


//////////////////////////////////////

const products = [
    {id:1, name: 'Xaomi phone One night', price: 19000},
    {id:2, name: 'iphone', price: 19000},
    {id:3, name: 'macbook Air', price: 119000},
    {id:4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id:5, name: 'Dell inspiron laptop', price: 19000},
    {id:6, name: 'samsung note 7', price: 19000},
    {id:7, name: 'Nokia old age phone gone', price: 19000},
    {id:8, name: 'Phone one', price: 19000},
]

// using for .. of loop
for(const product of products){
    console.log(product);
}

// using function
// parameter e search diye array er moddhe value gulo khujbo 
//2. jeshob value er moddhe phone ache shegulo search kore dibe

function matchedProducts(products, search){
    // 3. phone search deyar por onek gulo value pabo shegulo rakhar jonno array declare korte hobe
    const matched = [];
   for(const product of products){
    // 4. product er name e phone value search korbo , ekhane name 1 ta string ,  kono 1 ta string er moddhe onno 1 ta string ache kina sheta check korar best way {indexOf} diye check kora, or {includes} diye check kora, if condition use kore jodi phone value pai tahole (matched) array te push kore dibo product k,  value search er shathe shathe case  sensivity o check korbe ejonno {name} k {toLowerCase} kore felbo and jei value ta search korbo shetao {toLowerCase} korbo
       if(product.name.toLowerCase().includes(search.toLowerCase())){
           matched.push(product);
       }
   }
//    5. then loop er bahire return korbo
    return matched;
}
const result = matchedProducts(products, 'phone');  // products er moddhe phone value khujbo 
// 6. can also search laptop
const result = matchedProducts(products, 'laptop');
console.log(result);  //1. answer undefined pabo karon function kono kichu return kortese na.



// full code ///////////////////

const products = [
    {id:1, name: 'Xaomi phone One night', price: 19000},
    {id:2, name: 'iphone', price: 19000},
    {id:3, name: 'macbook Air', price: 119000},
    {id:4, name: 'lenovo yoga laptop 2025', price: 19000},
    {id:5, name: 'Dell inspiron laptop', price: 19000},
    {id:6, name: 'samsung note 7', price: 19000},
    {id:7, name: 'Nokia old age phone gone', price: 19000},
    {id:8, name: 'Phone one', price: 19000},
]

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);


///////////////////////////////////////////////////////////////////////

// Module-24_5-5: Problem solving priority and get the best out of this course

