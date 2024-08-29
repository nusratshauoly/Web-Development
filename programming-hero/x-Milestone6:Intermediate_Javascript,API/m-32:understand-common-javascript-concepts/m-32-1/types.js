// strongly typed language
// int a = 5;
// string b = 'alim halim khalim'; 
// boolean c = True;
// object student = {name: 'noya daman', id: 55}
// int[] numbers = [12, 45, 78];
// string[] friends = ['abul','babul'];


//  javascript is a dynamic typed language
// primitive types
const a = 5;
const b = 'js dynamic type language';
const d = true;
// non-primitive types
const ages = [45, 65, 48];
const student = {id: 23, class: 7}
console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

// 
let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

const p = {job: 'web developer'}
let q = p;
q = {job: 'Backend'}; // ekhane (p, q) duitar value e change hoise
q.job = 'front job developer'; // ekhane shudhu q er value  change hoise  but output e (p, q) duitar value e change hobe.
console.log(p, q);

