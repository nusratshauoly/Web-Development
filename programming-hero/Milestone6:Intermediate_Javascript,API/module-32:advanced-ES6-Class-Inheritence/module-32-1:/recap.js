// 1. var let const (use let and const)
const numbers = [12, 546, 56, 90]; // jokhon variable declare korbo tokhon e value dite hobe and reassign korte parbo na.


// 2. let a number reassign korte parbo
let salary = 450;
salary = 455;


// 3. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0) {
   const remaining = salary - salary * tax;
   const total = remaining + bonus;
   return total;
}


// 4. template string
const element = `
   <div>
       <h3>Name: </h3>
       <p>Address: </p>
       <p>Salary: ${calculateSalary(10000, 0, 0)}</p>
       <p>Others: ${numbers[2]}</p>
   </div>
`

// 5. Arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;


// 6. spread operator
const ages = [11, 13, 15, 14, 10, 16];
const newAges = [...ages, 22, 24, 23];
console.log(newAges);


// 7. destructuring (...z is rest operator => a, b, c er por baki shobgulo (z) te add hobe )
// object er moddhe position name and variable name same hote hobe
const {a, b, c, ...z} = {a: 45, b: 67, c: 78, name: 'sakib', salary: 1200};



// Array er moddhe position and variable name same na holeo hobe
const [a, b, ...c] = [12, 13, 14, 15, 16];