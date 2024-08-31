
//  --------------------- passby value -----------------
/*

// * kono primitive type(like: number)  jodi function er parameter hishebe pass kori and function er vitore jodi er value ta change kori tahole er outside scope er value take change korbe na ja chilo tai thakbe.

*/

// primitive types are pass by value

let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27; // if we want to assign a value in variable a then this value will apply in multiply
    const result = a * b;
    return result;
}
console.log(num1); // function call korar age console.log korle value kono change dekhabe na.
const output = multiply(num1, num2);
console.log(output); 
console.log(num1); // function call korar pore console.log korle value change dekhabe na. 





// ---------------- passby reference -----------------

/*
**** kono 1 ta object or array k function er vitore pass kori shetar vitore jodi kono 1 ta part modify kori, kono 1 ta index , tahole shei outer scope er j array ba object ase shetar vitorer ongsho takeo change korbe. karon function er moddhe jokhon ei object ba array k pass korbo eta reference hishebe pass kore

*/

// object and array are pass by reference

let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1, couple2) {
    couple1.name = 'ononto';
    couple2.partner = 'mim';
    
}
// * kono non primitive type(like: string)  jodi function er parameter hishebe pass kori and function er vitore jodi er value ta change kori tahole er outside scope er value take change korbe na ja chilo tai thakbe this is called pass by reference.
console.log(student1, student2); // function call korar age console.log korle value kono change dekhabe na.
makeMovie(student1, student2);
console.log(student1, student2); // function call korar pore console.log korle value change dekhabe. 