//video - 20.1

//slice
let numbers = [1, 8, 98, 45, 65, 71, 63];
//kotha theke shuru korbo eta first value kothakar ag porjonto nibo oita second value
numbers.slice(2, 4);
[98, 45]


// include (kono element atring er moddhe ache kina oi jinish ta dekhar jonno)

let name = 'Ariana grande is singing';
name.includes('is');
name.includes('has');

// substring (slice er moto string theke element collect kora)
name.substring(0, 10);
name.substring(4, 10);


// array theke pete parbo value but set korte parbona etake bole ( immutable ).
name[1] = 'x';




// video - 20.2 : Declare a function, call function, function vs loop:

// function koyek line code er ekta addition(block of code). jeta ekta fixed work complete kore

//function declaration
function turnOnFan(){
    console.log('stand up');
    console.log('walk towards the switch');
    console.log('press the switch');
}
// then call the function(jotobar chabo totobar call korte parbo)
turnOnFan();
turnOnFan();
turnOnFan();

// loop and function er moddhe difference holo loop er kaj ekebare kore shesh hoy r function er kaj er moddhe onno kaj ba element dhukano jay
turnOnFan();
console.log('eating lunch');
turnOnFan();

// give parameter value like variable inside function parameter ()
//when give parameter value then function call korar shomoy value dite hobe function name er vitor
function bringSingara(money){
    console.log('mama singara den');
     console.log(money);
}
bringSingara(100);




// 20.3:
// return parameter
function bringSingara(money){
    console.log('eto taka disen: ', money);
    console.log('ei nen singara'); 
}
bringSingara(100);
// or evabeo call korte parbo
let taka = 300;
bringSingara(taka); 


// we can take multiple parameter
function add(num1, num2){
   console.log('going to add:', num1, num2);
}
add(125, 100);

function sum(a, b, c, d, e){
     console.log(a, b, c, d, e);
     let sum = a + b + c + d + e;
     console.log(sum);
}
sum(15, 98, 56, 7, 9);
//parameter declare kore variable er moto eta shudhumatro available hocche function j declare korsi er vitore bahir theke access korte parbona.

// video - 20.4:

function add(number1, number2){
    console.log(number1, number2);
    var sum = number1 + number2;
   //console.log(sum);
    return sum;
   // return er  3 ta jinish likha 1)return er por kichu likhbona, 2) return er por kono man likhte pari like 11/ 15 . 3) kono variable likhte tahole j function k call korbe she ei jinish ta pabe.
// return er por ja likha thakbe shetar man return hishebe pawa jabe.
// 1. kono kichu return na korle result indefined hpbe, 2. shudhu return likhle return er por kono kichu define na korleo undefined dekhabe. 3. return er por man likhi ba variable likhi tahole variable er man return korbe.
return 15;
console.log('i need more code');
return 'hello done';
// 1 bar return korlei function oikhan theke ber hoye jabe , 1 bar return er por jodi aro onno kichu return korte chai tahole r return hobe na 1 bar return hoyei ber hoye jabe.
}
//add(45, 15);


//kono function jekhan theke call kora hobe shetar bampashe kono variable thakle oi function er return er por ja likha thakbe shetar man (value) hoye jabe oi variable er man ba value
let total = add(80, 20);
console.log('total', total);




// another function
function bringSingara(money){
     let singaraPrice = 10;
     let quantity = money / singaraPrice;
     return quantity;
}
bringSingara(200); // function bracket er vitor money value  

//or variable declare koreo rakha jay
let singaras = bringSingara(200);
console.log('eating singaras: ', singaras);

//or variable declare koreo rakha jay
var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log('eating singaras: ', singaras);




// video - 20.5

// function functionName(prameters){
//     // function body
//     //return
// }
// functionName(parameters);
//  // or
// let returnValue = functionName(parameters value); 

function getTotal (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

let myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average so far', myAverage);


// add function

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 13);

const result2 = add(35, 7);
const finalResult = add(result1, result2);


// video - 20.6

let student = { 
    id: 115, 
    name: 'Solayman Khan', 
    class: 9, 
    marks: 98
}
//
let mobile = {
    brand: 'Samsung',
    price: 19000,
    storage: '64gb',
    camera: '7MP',
}
console.log(mobile.price); //bracket er vitor console.log(keys,properties)
//
let myComputer = {
    brand: 'lenovo',
    price: 39000,
    color: 'silver',
    processor: 'i7'
}
console.log(myComputer);
// jodi object er kono property er value jante chai
console.log(myComputer.price);
console.log(myComputer.processor);
//property value pore edit o kora jay
myComputer.processor ='i79';
console.log(myComputer);


// video- 20.7: 

let shoppingCart = {
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
console.log(shoppingCart);
// jodi mouse add korte chai (third way)
shoppingCart.mouse  = 15;

// when you know the property name, use dot notation to get the property value

//1. first way to write property name 
let penCount = shoppingCart.pen;
// alternative system
// when you know the specific property name, use dot notation to get the property value

// 2. second way to write property name
let penCount2 = shoppingCart['pen'];
// ei object er moddhe jotogulo value ase shobgulor man jodi pete chai
// object er key gulo jodi pete chai
let properties = Object.keys(shoppingCart);
// object er value gulo jodi pete chai
let propertyValues = Object.values(shoppingCart);
console.log(properties);
console.log(propertyValues);


// 3. third way to write property name
// set property values
let propertyName = 'mouse';
let propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// (first way) to set property values jodi mouse add korte chai
shoppingCart.mouse  = 15;
console.log(shoppingCart);

// (second way) to set property values
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

// (third way) to set property values (object er nam ta ekta variable e thakbe , shei variable ta third bracket er moddhe boshabo).
shoppingCart[propertyName] = 89;
console.log(shoppingCart);




// video - 20.8:

// array vs object

let shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// object er upor loop chalabo
// array te shudhu property gulo likha jay and object e property and value duitai likha jay (difference between array and object)
let shoppingItems = ['books', 'sunglass', 'shoes', 'pen']; // array

let friendAge = [12, 45, 78, 12, 32, 14];  // array value declaration

//objet declarations
let friensAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}

////////

let shoppingCart = {
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25,
    shoes: 2,
    bottle: 1
}
// keys gulo jodi ber korte chai
const keys = Object.keys(shoppingCart);
console.log(keys);

// jodi values ber korte chai
const values = Object.values(shoppingCart);
console.log(values);

// but kon propertyr kon value eta jodi ber korte chai


// hard system (using for)
//keys er moddhe joto gulo item ase shegular length borabor cholbe
// keys holo ekta array
// let keys = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];

for(let i = 0; i < keys.length; i++){
    let propertyName = keys[i];
    let propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);

    //console.log(keys[i]);
    //console.log(shoppingCart[])
}

///another system
// easy system (for .. in  loop)
for(let propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}


// entries (key and values)
const zooFood = {
    lion: 'meat',
    panda: 'bamboo'
}
Object.entries(zooFood);
//[['lion', 'meat'], ['panda', 'bamboo']]


// how to get and set object property
//1. obj.prop
// 2. obj['prop']
//3. {prop} = obj
//4. obj[prop]

const zooFood = {
    lion: 'meat',
    panda: 'bamboo'
}
console.log(zooFood.lion);
console.log(zooFood['lion']);
let animal = "lion";
console.log(zooFood[animal]);




// video - 20.9:
//const color = '';
//const color = 'purple';
const color = 'yellow';
if(color === 'green'){
    console.log('you are a green friend');
}
else if(color === 'blue'){
    console.log('you are blue friend');
}
else if(color === 'red'){
    console.log('you are a red friend');
}
else if(color === 'white'){
    console.log('you are a white friend');
}
else if(color === 'yellow'){
    console.log('you are a yellow friend');
}
else{
    console.log('you are a black friend');
}


// alternative of (if-else) because it takes too much time to iterate

// switch
const color = "yellow";
switch(color){
    case 'green':
        console.log('you are a green friend');
        break;
    case 'blue':
        console.log('you are a blue friend');
        break;
    case 'white':
        console.log('you are a white friend');
        break;
    case 'red':
        console.log('you are a red friend');
        break;
    case 'yellow':
        console.log('you are a yellow friend');
        break;
    default:
        console.log('you are a black friend');

}

// function 
function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
const result1 = add(12, 13);
const result2 = add(35, 7);
const finalResult = add(result1, result2);

// object
let shoppingCart = {
    books:3,
    sunglass:1,
    keyboard:5,
    mouse:1,
    pen:25
}
console.log(shoppingCart);

//set property values(3 ways)
console.log(shoppingCart);
// 1.
shoppingCart.mouse  = 15;
console.log(shoppingCart);
// 2.
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
// 3.
shoppingCart[propertyName] = 89;
console.log(shoppingCart);




