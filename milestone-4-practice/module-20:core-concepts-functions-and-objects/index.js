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


// video - 20.2

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
// 1 bar return korlei function oikhan theke ber hoye jabe , 1 bar return er por jodi aro onno kichu return korte chai tahole r return hobe na 1 bar return hoyei ber hoye jabe.
}
add(45, 15);
//kono function jekhan theke call kora hobe shetar bampashe kono variable thakle oi function er return er por ja likha thakbe shetar man (value) hoye jabe oi variable er man ba value
var total = add(80, 20);
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