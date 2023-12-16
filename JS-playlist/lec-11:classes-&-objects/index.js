// a object define
const student = {
    fullName: "Nusrat jahan",
    marks: 98.3,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};

// prototype in object: 
let arr = ['apple', 'mango', 'banana'];
console.log(typeof arr);

// can create our own prototype
const employee = {
    // create a function which will invoke in (employee) object
    calcTax() {
        console.log('tax rate is 10%');
    },
};


// ---------------

// new employee in object
const karanArjun = {
    salary: 50000,
};

// --------------------
// if in future there will be 5 employees
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


// jodi (employee) object er function and method new employee (karanArjun) ei object e use korte/ (prototype) set korte chai tahole
karanArjun.__proto__ = employee;
// we do not have write repetedly calcTax() for every new object.
// we can assign (employee) class inside (.__proto__)
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;
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