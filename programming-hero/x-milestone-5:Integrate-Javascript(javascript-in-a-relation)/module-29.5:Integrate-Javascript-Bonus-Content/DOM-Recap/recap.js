
// ------------------- Module: 29_5-1: When to use getElementById and querySelector ---------------------
/*
    1.how to use js with html and css

    2. get element or elements from DOM
        2-1: getElementById
        2-2: getElementsByClassName
        2-3: querySelector (like jodi className er kono element ber korte chai tahole shudhu oi class name er first element tai shudhu dekhabe).
        2-4: querySelectorAll(jodi kono class name or element er shob gulo element chai)
        //2.5: (querySelectorAll) id ber korar jonno use kora jay na. cause id only 1 tar jonno use kora hoy.
        //2.6: mostly case e (querySelectorAll) e tagname o use korbo na cause same tagname  website e onekgulo thakte pare.
        //2.7: (user-container) class er moddhe (disable) class er moddhe (h3) er all element gulo shob pawar jonno. 
        //2.8: jodi kono class er vitorer element / tag er element ber korte chai tahole (querySelector/querySelectorAll) use kortei hobe.
*/
document.querySelectorAll('.user-container .disable h3');

// example: jodi kono class er vitor list item gulo pete chai
document.querySelectorAll('.my-users li');

/*
    3. dynamically add element to use DOM: document.createElement
        3.1: set value to the innerHTML, innerText

    4. get value from a DOM element
        4.1: use innerText (h1, p, h5, div, span, strong)
        4.2: use value (input, textArea)

    5. add event listener (event handler)
        5.1: click, focus, blur, onchange, keydown, keyup
        5.2: addEventListener onclick = "myHandler()"

    6. use function to reduce duplicate code

    7. event bubble & event delegate
*/


//------------------- Module: 29_5-2: Different types of error in Javascript ------------------

// 1. rangeError : jodi kono value range er moddhe pawa na jay (not in JS that frequently)
const numbers = [3, 4, 5, 8];
// *** we should never do this(numbers.length = 2;) (it will show only two elements of numbers.)
numbers.length = 2; 
console.log(numbers);
console.log(numbers.length);
console.log(numbers[25]);

// 2. referenceError: 
// it will show : referenceError: money is not defined
console.log(money);
// it will also show the same error even after declaring money cause money value declare korar agei run korar try kortesi er jonno.
let money = 80;

// we won't use (var money = 80) cause var dile reference error er jaygay (undefined) dekhabe. cause var er value k upore uthaye ney but (let , const) upore uthay na that's why (let & const e referenceError dekhay).
var money = 80;

// 3. SyntaxError : kono syntax e vul hole or na dile
for (let i = 0; i < 5 i++){

}
// or
if (numbers.length > / 2){

}
else {


// 4. TypeError: type related kono problem korle
    
// 4.1: cannot find: can not read some properties : undefined:
    let student = {};
    console.log(student.name);
    console.log(student.address);
    console.log(student.address.city);
    // or jodi address thakto tahole address dekhato.
  let student = {address: {city: 'dhaka'}};

    
   // 5. throw error : nije iccha kore error banate parbo.


/////////////////////////////////////////////////////////

// ---------------------------- Module: 29_5-3: Explore Try-catch-finally to handle code with error: -----------------------------------------

    const day = 'day the din';
    console.log(day);
    console.log(25);

    // ekhane district variable e error ashbe cause district variable agei declare kore disi er moddhe value boshanor age.
    console.log(district);
    let district = 'bBaria';

    // but district varible e jodi error ashe tahole porer line gulo r declare korbe na
    console.log(1000);
    console.log(100);
    console.log(10);

    // try catch (try er moddhe error pelei next step e jabe and shudhu try likha jabena . (if-else)er moto (try-catch/ try-catch-finally) likhte hobe).
    // jodi future e kono code mone hoy j error ashbe tahole oita k (try) er vitor rakhbo. jodi try er vitor na rakhi tahole tahole error hoye oikhanei code off hoye jabe . r try catch er vitor rakhle error ashleo kothay ashche ta dekhabe. mane jodi (try) er moddhe error ashe tahole jei line e error ashche shei line and er porer line gulo dekhabena but try er pore (catch) and (finally) er code gulo dekhabe. code run hole jodi (try) er moddhe error pay/na pay duitatei (finally) er code console hobe. r (catch) holo jodi (try) er moddhe error ashe tahole (catch) e jabe r jodi (try) te error na ashe tahole (catch) e jabena ekebare (finally) te jabe.
    try {
        console.log('inside try');
        //console.log(student);
        console.log(district);
    let district = 'bBaria';

    }
    catch (error) {
        console.log('inside catch');
        // console.log(error);
    }
    finally {
        console.log('finally done');
    }
    console.log('last line of the code');

//////////////////////////////////////////////////////////////

    // ------------------------------ Module: 29_5-4: (semi-advanced) A simple introduction to Date object in Javascript ------------------------------------------
// client er jonno time take (UTC) time e convert korte hobe. cause amar deya time and client j time e dekhbe sheta same na.
    const today = new Date();
    console.log(today);


    // **** we can't compare date like this...
    const date1 = new Date('1971-03-26');
    const date2 = new Date('1971-12-16');

    if (date1 > date2) {
        console.log('march was before december');
    }
    else {
        console.log('march was not before december');
    }


    //***** getTime()=> 1970 er 1st January theke count shuru kore milisecond hishebe.jei month or date er millisecond choto hobe sheta beshi purano hobe. */
     if (date1.getTime() < date2.getTime()) {
        console.log('march was before december');
    }
    else {
        console.log('march was not before december');
     }
    
    // /////////////////////////////////////////////

    // ------------------------------- Module: 29_5-5: (advanced) Get confused by isNaN ---------------------------------------

    // sometimes we need to check validation and er jonno type check korte hoy
    // types => string, number, boolean
    const number = '23';
    if (typeof number === 'number') {
        console.log('value is a number');
    }
    else {
        console.log('value is not a number');
    }
    //  or
    const number = 23;
    if (typeof number === 'number') {
        console.log('value is a number');
    }
    else {
        console.log('value is not a number');
    }

    // how to check array (type of array)
    const numbers = [3, 12, 78, 90];
    const student = {name: 'Rongila', job: 'khawadawa kora'}
    // check Array => answer will be : true
    console.log(Array.isArray(numbers));
    console.log(typeof student);

    // Answer will be => false cause it is object.
    console.log(Array.isArray(student));

