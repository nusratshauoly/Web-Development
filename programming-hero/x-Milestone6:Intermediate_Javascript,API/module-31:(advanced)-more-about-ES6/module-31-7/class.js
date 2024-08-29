// object k focus kore j programming kore it is called object oriented programming. and object oriented programming e class use kora hoy...

// es6 e class k bola hoy "syntactic sugar" : means class er vitore function diye kaj hoy...

/*
 js e class likhar rules
  1. class er 1 ta nam thakte hobe
  2. class name er first letter capital word hobe
  3. {} diye body create korbo
  4. name, designation, team, location erokom property / field dibo, function o likhte parbo.
 */

// class er vitor j function thake ederke bola hoy method...
// class holo ekta template or structure jeta diye amra different object create korbo.
class Instructor{
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    location;

    // name likhar jonno (constructor) keyword likhte hobe: and er vitore function er moto parameter o dite parbo ...
    constructor (name, location) {
        // property/field gulor value set korte parbo jeta jeta dynamic hobe
        // object er moddhe kono property set korte hole (this.property) = property value; dite hoy
        this.name = name;
        this.location = location;
        
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

// class holo ekta template or structure jeta diye amra different object create korbo. and object create korte hole object er ekta nam dite hobe
// rule: 1. 1 ta new variable nite hobe, 2. new keyword + class name ta call korte hobe 
// calling the constructor : constructor k directly call korte parbona, instead jokhon class k call korbo tokhon dhore nibo class function(instructor) k call kortesi...
const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);  // output e object return korbe.

// we can call the functions
aamir.startSupportSession('9.30');
aamir.createQuiz(60);


// calling the constructor
const solaiman = new Instructor('Solayman Khan', 'dhaka')
console.log(solaiman);

// ** Object er moddhe 2 ta jinish thake : 1. PROPERTY: Attribute or state , 2. METHOD: Do something function & procedure



//  -------------- full code ------------

class Instructor{
    name;
    designation = 'Web course Instructor'
    team = 'web team'
    location;
    constructor (name, location) {
        this.name = name;
        this.location = location;
        
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`);
    }
}

const aamir = new Instructor('aamir', 'mumbai');
console.log(aamir);  // output e object return korbe.

// we can call the functions
aamir.startSupportSession('9.30');
aamir.createQuiz(60);

// calling the constructor
const solaiman = new Instructor('Solayman Khan', 'dhaka')
console.log(solaiman);



// -------- Creating object with constructor ---------
class Vehicle{
    constructor (make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
    getName() {
        return this.make + " " + this.model;
    }
}
let car = new Vehicle("Toyota", "Corola", "Black");
console.log(car);



// --------------------------- more about class ----------------

// inheritance : extends keyword use kore korte hoy

// jokhon class theke object create kori  tokhon onek shomoy similarity thakena

class Vehicle(name, price){
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('gari chole na cholena cholena re');
    }
}

class Bus extends Vehicle { // onek shomoy onek similar class thake onek gulo tai every time common element gulo na likhe jei class er shathe common mil ache shekhan theke element niye ashte pari (extends) keyword use kore
    constructor (name, price, seat, ticketPrice) {
        super(name, price);  // jei element gulo common thake shegulo set korar jonno (super) keyword use korbo and common element gulo likhbo
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    
}


// another class
class Truck extends Vehicle{
    constructor (name, price, load) {
        super(name, price);
        this.load = load;
    }
    // ekhane truc er jodi kono unsimilar element thake ja parent e nai ta likhbo
}


// 