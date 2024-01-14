// a object define
const student = {
    fullName: "Nusrat jahan", // called (properties)
    marks: 98.3,
    printMarks: function () {   // called (method)
        console.log("marks = ", this.marks); // student.marks
    },
};
// // ---------------------------------------

// check object in (inspect) = a uniqe object create in property while running the code called (_proto_)
// student   // output is object
// student.printMarks  // output is (function)
// student.abc   // output is undefined
// student.toString    // output is String

// //  ---------------------------------------
// prototype inside object: 
let arr = ['apple', 'mango', 'banana'];
console.log(typeof arr);

// arr.push('litchi');

// -------------------------------------

// // example: can create our own prototype
const employee = {
    // create a function which will invoke in (employee) object
    calcTax1() {
        console.log('tax rate is 10%');
    },

    calcTax2: function() {
        console.log('tax rate is 20%');
    },

    // calcTax1, calcTax2 both functions are ok.

};

//  // // run in (inspect)....
employee.calcTax();


// // // -----------------------------------------
// if in future there will be 5 employees
const karanArjun1 = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

const karanArjun2 = {
    salary: 50000,
};

const karanArjun3 = {
    salary: 50000,
};

const karanArjun4 = {
    salary: 50000,
};

const karanArjun5 = {
    salary: 50000,
};


// ----- (inspect) e ----------------
karanArjun;

// jodi (employee) object er function and method new employee (karanArjun1) ei object e use korte chai tahole (prototype = __proto__) set korte  
karanArjun1.__proto__ = employee;

//  prototype is a reference of a object.

// we do not have write repetedly calcTax() for every new object.

// we can assign (employee) class inside (.__proto__)
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;


// jokhon kono object and on it's prototype er moddhe same name hoy kono method er tahole shei tax rate e output ashbe jeta method er moddhe ache
karanArjun1.calcTax();


console.log(employee.calcTax());
console.log(karanArjun.calcTax());
console.log(karanArjun2.calcTax());
console.log(karanArjun3.calcTax());
console.log(karanArjun4.calcTax());

/////////////------------------------------------

// website er inspect e 
karanArjun //(enter)
// here we got the salary and heres (prototype) object er vitor (new function) will appear named (calcTax())

//  we can use the (calcTax) function in (karanArjun) object.
karanArjun.calcTax();


////////////--------------------------------------



// a prototype is a (reference) to an object.

// ----------------------------------------------------------------- class in js -----------------------------------------------

// // // class is a blue print of object

class ToyotaCar {

    // when we do not write constructor it will automatically create constructor in object

    //  but when we create construtor it will print 
    constructor (brand, mileage) {
        console.log("creating new object"); 
        this.brand = brand;
        this.mileage = mileage;
    }

    
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    // can create new function inside class
    // // we can set this function to a constructor
    // setBrand(brand) {
    //     this.brandName = brand;
    // }
}
let fortuner = new ToyotaCar(); // it will print the constructor
fortuner.setBrand("fortuner", 10);
console.log(fortuner);
console.log(typeof fortuner);

// inspect e
fortuner.start();
fortuner.stop();


// can call this (ToyotaCar) in another new variable
let lexus = new ToyotaCar("lexus", 10); // it will print the constructor brand
lexus.setBrand("fortuner");
console.log(lexus);


// we can change the brand name of lexus (inspect)
lexus.brand = "lexus";
lexus;

// class normally used to create a template to create multiple property


/// ---------------------------------------------------------------- Inheritance in JS -----------------------------------------------

class Parent{
    hello() {
        console.log('hello');
    }
}


// child clas er moddhe Parent class use korte hole (extends) diye parent class likhte hoy...
class Child extends Parent{

}

// new obj
let obj = new Child();

//  ---- (inspect) ----
obj
obj.hello();
obj.abc();


// ------------------------------------
//  new example
class Person {
    constructor () {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}
    // person er jeshob habit ogulo enginner er moddhe thaka uchit...
    class Engineer extends person{
        work() {
            console.log("solve problems, build something");
        }
    }

    class Doctor extends Person() {
    work() {
        console.log("treat patients");
    }
}



let shradhaObj = new Engineer();

//  print in (inspect) ------
shradhaObj
shradhaObj.work()
shradhaObj.eat()

// -----
let e1 = new Engineer();

// -------------------------


// *** Method overriding:  when parent class theke child class e extends korbo tokhon jodi parent and child dui jaygatei same name e function thake tahole child function er output tai print hobe.



// ------------------------------------------------------------------------------------------------------- super Keyword in JS -----------------------------------------------

// *** sometines we have access properties from child class to parent class. to call parents constructor we use 'super' keyword...

// *** child constructor e (this) call korar age (super) call korte hobe...
class Person{
    constructor (name) {
        // console.log('enter parent constructor');
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
}

class Engineer extends Person{
    constructor (name) {
        // console.log('enter child constructor');
        super(name); // to invoke parent class constructor // parent class e invoke howar jonno (super) er vitor (name) parameter dibo
        this.branch = branch;
        // console.log('exit child constructor');
    }
    work() {
        super.eat();
        console.log("solve problems, build something");
    }
}
let engObj = new Engineer("shradha");


//  run in (inspect) -------
engObj


// ----------------------------------------------------------- Error handling -----------------------------------------------
//*** (try) er moddhe j error hoyeche sheta dibo and (catch) er moddhe error ta print korbo. 

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
try {
    console.log("a + b = ", a + c); // error
}
catch (err) {
    console.log(err);
}
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);