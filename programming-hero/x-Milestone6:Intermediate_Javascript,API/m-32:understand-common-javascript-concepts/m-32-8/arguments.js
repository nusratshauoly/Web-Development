//  * arguments is a array like object

function sum(a, b, c) {  // (a, b, c) are called parameters
    console.log(arguments); // arguments function er vitor pawa jabe & will show index: value
    console.log(arguments[4]); // 4 no index er value ber korte
    console.log(typeof arguments); // output will be object

    // index er value pete chaile for loop, for of loop o use korte pari
    // for (let i = 0)
    arguments.push(45); //❌  arguments e (push,map, filter) korte parbo na cause eta array na

    // argument is a array like object, tai eke array te convert korte parbo
    const args = [...arguments];
    console.log(args);
        
    const result = a + b + c; 
    return result;
}
// console.log(arguments); // ekhane dile access hobena.
const total = sum(45, 89, 12);
console.log(total);

const total1 = sum(45, 89, 12, 23, 45); // (45, 89, 12, 23, 45) are arguments
console.log(total1);
// output will be like {'0': 45, '1': 89, '2': 12, '3': 45, '4': 98, '5': 56}

console.log(typeof sum);
console.log(sum.length); // output: 3 ; funtion e length dile function e koyta parameter ache oita pawa jabe
