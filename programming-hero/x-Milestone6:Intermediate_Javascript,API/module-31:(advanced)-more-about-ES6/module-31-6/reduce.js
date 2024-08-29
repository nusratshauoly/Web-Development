
// module - 31-6: class & objects
const products = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 40000},
    {id: 4, name: 'mac', price: 150000},
]
// Class: similar type declare korar jonno use hoy : every class has some properties, method
class Product{  // class name first letter sould be capital letter
    constructor () {  // here (constructor) is a function name we use when we make (object from class)
        
    }
}

// class to object (example:)
class Product{ // class name
    country = 'Bangladesh'; // we can set attribute or property set as a variable

    constructor (name) {  // jokhon kono class create kortesi tokhon tar own kichu characteristics thakbe ja onno karo shathe milbe na  shetar jonno (constructor() use korte hobe) and vitor different element rakhte parbo
        this.name = name;  // constructor er vitor (this) diye value set korte hobe and constructor er j parameter thakbe ta er vitorer element er vitor set korte parbo.
    }  
    speak(talk) {   // here (speak) is a function and (talk is a parameter) but we won't use (function keyword)
        console.log(`talking about ${talk}`);
    }
}

// class theke similar type onekgulo object create korte pari
const lenovo = new Product('le le lenovo');  // we have to use (new) keyword to create object from class  // constructor method tokhon create korbo jokhon class theke object call korbo using (new) keyword // (name) er property ta ekhane set hoye geche
console.log(lenovo);
lenovo.speak('obak valobasha');



// another example
class Teacher{
    constructor (name, subject, address) {
        this.name = ;
        this.subject = subject;
    }
    lecture() {
        console.log('Sir is teaching Math');
    }
}

const tapan = new Teacher('topon sir', 'Physics');
console.log(tapan);

const rashid = new Teacher('rashid', 'english');
console.log(rashid);












// --------------------------------------------------------
// reduce: shobgulo element e jabe but 1 ta function thakbe oi function apply kore each element k ekta ultimate value diye pathaye dibe.
const numbers = [1, 2, 3, 4, 5];
//.reduce(accumulatorFunction, initial value = 0)
// accumulatorFunction use two parameters
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);

// 2. using multiline in reduce
const numbers1 = [1, 2, 3, 4, 5];
//.reduce(accumulatorFunction, initial value = 0)
// accumulatorFunction use two parameters
const total1 = numbers1.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total1);


