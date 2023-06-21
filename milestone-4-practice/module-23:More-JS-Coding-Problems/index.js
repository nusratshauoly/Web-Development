// Module- 23-1: Module Introduction and isArray, includes, concat
/*
1. variables
2. conditionals
3. array
4. loop
5. function
6. object
*/

const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];


function add(num1, num2){
    return num1 + num2;
}

// 1. (typeof) kon variable ki type er eta ber korar jonno
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);

// typeof diye shob kichu detect kora geleo array k detect kora jay na
//console.log(typeof friends);

//////////////////////////////////

// 2. Array.isArray (this way we can get the type of an array (check array using Array.isArray)
console.log(Array.isArray(friends));
console.log(typeof age);

// ----------------------------------
//3. includes (array er moddhe value gulo ache kina search korar jonno)
console.log(friends.includes(19));
console.log(friends.includes(21));



//4. indexof (value kon position e ache array er moddhe ta ber korar jonno)
if(friends.indexOf(19)){

}
// 
if(friends.indexOf(252) !== -1){

}

// --------------------------------

//5. concat (Join/ merge / add/ put two array together)
const newFriendsAge = [12, 13, 11, 13];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);



////////////////////////////////////////


// Module-23-2: Get part of an array and insert elements using slice, splice


// 1. slice (2 = first value kotha theke shuru hobe, 5 = second value kon value er ag porjonto kata jabe )

const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.slice(2, 5);
console.log(partial);
console.log(friends); // original array k ager motoi dekhabe


////////////////////////////////////////

// 2. splice (2 => start ,kotha theke shuru korbo, 3 => koyta element remove korte chay, {ekhaneo number add korte parbo shegulo splice korar po theke array te add hobe})  Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements. will chase the original array
const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
const partial = friends.splice(2, 5, 99, 555, 7777);
console.log(partial);
console.log(friends); // original array k ager motoi dekhabe na splice korar por ja baki thakbe sheta dekhabe will chase the original array splice e kono array er majh theke kono portion delete korte pari or add korte pari



////////////////////////////////////////   

// Module-23-3: Remove duplicate items from an array

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul', 'abul'];

//  4. uniqueNames array declare jetar moddhe shudhu unique value gulo thakbe for loop + if condition chalanor por duplicate value gulo ignore korbe
let uniqueNames = [];

//  1. function declare korbo pramater (names) nam e and er vitor for loop chalabo names array er full length e
function removeDuplicate(names){
    for(let i = 0; i < names.length; i++){
// 2. names er vitorer each value k name variable er vitor dekhte pari 
       const name = names[i];
       //console.log(name);
// 3. value gulo duplicate kina check korbo (includes = er kaj serch kore dekha) diye r jodi duplicate na hoy then uniquename variables e push kore dibo and full uniqeNames array return korbo.
       if(uniqueNames.includes(name) === false){
          uniqueNames.push(name);
      }
    }
    return uniqueNames;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueNames);


// /// full code //////////

const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul', 'abul'];

let uniqueNames = [];

function removeDuplicate(names){
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(uniqueNames.includes(name) === false){
            uniqueNames.push(name);
        }
      }
      return uniqueNames;
  }
  const uniqueName = removeDuplicate(names);
  console.log(uniqueNames);

  ///////////////////////////////


// Module- 23-4: Write foo, bar, foobar if divisible by 3 or 5 both

/*
1. show output from : 1 - 50
2. If the number is divisible by 3 then instead of the number, show "foo" 
3. If the number is divisible by 5 then instead of the number, show "bar" 
4. If the number is divisible by both 3 and 5 then instead of the number, show "foobar" 
*/

//  1. first e 1 theke 50 porjonto number print korbo
for(let i = 0; i <= 50; i++){
// 2. if condition e jei number gulo 3 diye vag jabe (if er moddhe jodi first condition e true hoy tahole r baki condition check kore na. kintu ekhane jodi first e shudhu 3 diye vag kore true hoye jay tahole (3 and 5) diye vag er condition check korbena tai (3 and 5) er condition ta age dibo)

  if(i % 3 === 0 && i % 5 === 0){
    console.log("foobar");
  }
   else if(i % 3 === 0){
      console.log("foo");
  }
   else if(i % 5 === 0){
      console.log("bar");
  }
   else{
      console.log(i);
  }
   //console.log(i);
}


//// full code ////////////
for(let i = 0; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("foobar");
      }
       else if(i % 3 === 0){
          console.log("foo");
      }
       else if(i % 5 === 0){
          console.log("bar");
      }
       else{
          console.log(i);
      }
    }

    ///////////////////////////////////

    // Module-23-5: Use add and multiplication to calculate wood requirements

    /*
    fixed: per item wood requirements.
     1. chair --> 3 cft
     2. table --> 10 cft
     3. bed --> 50 cft

     Vary: quantity
    */

    function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
       const perChairWood = 3;
       const perTableWood = 10;
       const perBedWood = 50;

       const chairWood = chairQuantity * perChairWood;
       const tableWood = tableQuantity * perTableWood;
       const bedWood = bedQuantity * perBedWood;

       const totalWood = chairWood + tableWood + bedWood;
       return totalWood; 
    }

    // 1. j j koyta furniture lagbe sheta ber koro (chair:2 ta, table : 2ta, bed : 5ta)
    const totalWood = woodCalculator(2, 2, 5);
    console.log('total wood required: ', totalWood);


    /////////////////////////////////


    // Module-23-6: Find the cheapest phone from an array of phone objects

    //2. amra age compare kortam number er shathe 
    //[45, 21, 6, 98, 56];


    const phones = [
       {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
       {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
       {name: 'iphone', camera: 12, storage: '32gb', price: 83000, color: 'silver'},
       {name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
       {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'black'},
       {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
       {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'}, 
    ];

    function cheapestPhone(phones){
// 3.1: first e ekta array declare korbo jekhane cheapest phone gulo rakhbo if/else and loop chaliye
       let cheapest = phones[0];

       for(let i = 0; i < phones.length; i++){
        // 1. loop chalanor por each phone er detailes (phones) variable theke pabo and (phone) variable e rakhbo.
           const phone = phones[i];
           //console.log(phone);
// 3.2:  but now ekhon compare korbo phone price er shathe (notun jei phone value ta ashbe sheta for loop(first e dekhbo for loop 2 ta phone price nibo then compare korbo k choto jeta choto oita nibo then er porer mobile er price er shathe compare korbo eivabe compare kore cheapest price ta ber korbo) chalaye j phone ache oitar cheye cheapest kina jodi hoy tahole nibo)
           if(phone.price < cheapest.price){
              cheapest = phone;
            }      
        }
        return cheapest;   
    }
    const mySelection = cheapestPhone(phones);
    console.log(mySelection);


    // ////// full code ////////

    const phones = [
        {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
        {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
        {name: 'iphone', camera: 12, storage: '32gb', price: 83000, color: 'silver'},
        {name: 'Xaomi', camera: 12, storage: '32gb', price: 52000, color: 'silver'},
        {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'black'},
        {name: 'Nokia', camera: 12, storage: '32gb', price: 44000, color: 'silver'},
        {name: 'HTC', camera: 12, storage: '32gb', price: 62000, color: 'silver'}, 
     ];
 
     function cheapestPhone(phones){
        let cheapest = phones[0];

       for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
          }      
      }
      return cheapest;   
  }
  const mySelection = cheapestPhone(phones);
  console.log(mySelection);

///////////////////////////////////

// new homework: shob cheye highest camera power jar sheta ber korno( ager array e but shudhu camera value change)

/*
camera: 12, camera: 10, camera: 7, camera: 17, camera: 25, camera: 6, camera: 10.

*/
const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver'},
    {name: 'iphone', camera: 7, storage: '32gb', price: 83000, color: 'silver'},
    {name: 'Xaomi', camera: 17, storage: '32gb', price: 52000, color: 'silver'},
    {name: 'Oppo', camera: 25, storage: '32gb', price: 2000, color: 'black'},
    {name: 'Nokia', camera: 6, storage: '32gb', price: 44000, color: 'silver'},
    {name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'silver'},
];

function cheapestPhone(phones) {
    let highest = phones[0];

    for (let i = 0; i < phones.length; i++){
        let phone = phones[i];
        if (phone.camera > highest.camera) {
            highest = phone;
        }
    }
    return highest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);


///////////////////////////////////////



//Module-23-7: Calculate the total cost of the products in a shopping cart

//[45, 65, 45, 98]; (erokom number thakle direct add kore ditam)

const shoppingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600}
];

function totalCost(products){
// 1. jodi add kori tahole first initial value hobe 0
    let sum = 0;
    for(let i = 0; i < products.length; i++){
       const product = products[i];
// 2. sum korbo object er moddhe shudhu product er price gulo
       sum = sum + product.price;
       //console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today:', expense);


// //////////////////////////// ekhon shopping cart er quantity ber korbo /////////////////////

const shoppingCart = [
    {name: 'shoe', price: 1200, quantity: 2},
    {name: 'shirt', price: 2200, quantity: 5},
    {name: 'pant', price: 3700, quantity: 4},
    {name: 'belt', price: 600, quantity: 3}
];

function totalCost(products){
// 1. jodi add kori tahole first initial value hobe 0
    let sum = 0;
    for(let i = 0; i < products.length; i++){
       const product = products[i];
// 2. sum korbo object er moddhe shudhu product er quantity & price gulo
       const productTotal = product.price * product.quantity;
       sum = sum + productTotal;
       //console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log('total expense today:', expense);


//////////////////////////////////////

// Module-23-8: (advanced) Multi-layer discount price calculation

/*
1.(first condition) if ticket numbers is less than 100, per ticket price : 100tk

2.(second condition) if ticket numbers is more than 100, but less than 200, first 100 tickets will be 100/ticket, rest tickets price will be : 90 taka per piece
first 100 ---> 100tk
rest -------->  90tk

3.(third condition) If you purchase more than 200 tickets
 first 100 ---> 100tk
 101-200 ----->  90tk
 200+    ----->  70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    // 1. first condition
    if(ticketQuantity <= 100){
       const price = ticketQuantity * first100Rate;
       return price;
    }
// 2. second condition
    else if(ticketQuantity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
// 3. 3rd condition
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

// const price = ticketPrice(20); (ekhane koyta ticket nibo sheta bujhaise = 1/ 20/ 100/ any number)


// const price = ticketPrice(1);
const price = ticketPrice(100);
console.log('price: ', price);


/////////////////////////////////////

// Module-23-9: Handle unexpected function input parameter error

// error validation
function add(num1, num2){
/* 2.
 er jonno first ei validation kore dekhte pari first number ta check kore (num1) and (num2) number kina */

  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'Please enter a number';
}
  return num1 + num2;
}

const result = add(12, 45);

/* 1.
jodi 1 ta number r 1 ta string add kori

//// const result = add(12, '45');
//// const result = add(false, '45');

(tahole answer ashbe 1245)

*/
console.log(result);


///////////////////////////////



// another error validation

function multiply(num1, num2){
   return num1 * num2;
}

// 1. eta error ashbe karon jokhon function er bahire function k call korbo tokhon parameter e shudhu valu boshabo baki kaj function er vitore hobe r jodi evabe dei(const output = multiply(12 * 45)) tahole parameter er vitor expression hoye jabe tokhon shen er result k 1st parameter hishebe send korbe but then 2nd parameter hishebe kaoke pabena tai result khali 1 ta vlue ashbe second value NaN ashbe 
// const output = multiply(12 * 45);

// insttead do this
const output = multiply(12, 45);
console.log(output);


////////////////////////////////////

// Module-23-10: Module Summary and importance of problem solving

