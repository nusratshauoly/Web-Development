"use strict";
/*
// ------------- while loop ---------------
let i = 0;
while(i < 3){
    alert(i);
    i++;
}

// -----------
let i = 3;
while (i) {
  alert(i);
  i--;
}
// ------------
let i = 3;
while (i) alert(i--);

// ----- do - while loop -----
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

// ---------- for loop ---------
for (let i = 0; i < 3; i++) {
  alert(i);
}
--
let i = 0;
for (i = 0; i < 3; i++) {
  alert(i);
}
alert(i);

// ----
let i = 0;
for (; i < 3; i++) {
  alert(i);
}
// -----------

let i = 0;
for (; i < 3; ) {
  alert(i++);
}

//  ------------ breaking the loop ------------
let sum = 0;

while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break;

  sum += value;
}
alert("sum", sum);

// -------------- continue to the next iteration ---------------
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;

  alert(i);
}

// -------------- labels for break / continue -------------

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`value at coords (${i}, ${j})`, "");
    if (!input) break outer;
  }
}
alert("Done!");

// break out of loops without using labels:
let shouldBreak = false;

for (let i = 0; i < 3; i++) {
  for (j = 0; j < 3; j++) {
    let input = prompt(`value at coords (${i}, ${j})`, "");

    if (!input) {
      shouldBreak = true;
      break;
    }
    console.log(`Value at (${i}, ${j}: ${input}`);
  }
  if (shouldBreak) break;
}
alert("Done!");


// ------------------ Tasks ---------------

// last loop value
let i = 3;

while (i) {
  alert(i--);
}
3, 2, 1

// which value does the while loop show

// // the prefix form ++i

let i = 0;
while (++i < 5) alert(i); //  1, 2, 3, 4

// // the postfix pf i++
let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5

// which values get shown by the 'for' loop

// the prefix form:
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4

// the prefix form
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4

// output even numbers in the loop

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    alert(i);
  }
}

// replace 'for' with 'while'

for (let i = 0; i < 3; i++) {
 alert( `number ${i}!` );
}

let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// repeat until the input is correct

// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

let value = Number(prompt("Enter a Number greater than 100?", 0));

for (let i = 0; i >= 100; i++) {
  if (!(value >= 100) || value === "" || value === null) {
    value = Number(prompt("Enter a Number greater than 100?", 0));
  }
  alert(i);
}

// or

let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// ----- Output Prime Numbers -----
// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// --- Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

let n = 100;
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) continue nextPrime;
  }
  alert(i);
}

// // or

for (let num = 1; num <= 100; num++) {
  let isPrime = true;

  if (num <= 1) continue; // Skip numbers less than or equal to 1

  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Loop from 2 to √num
    if (num % i === 0) {
      isPrime = false; // If divisible, not prime
      break; // No need to check further
    }
  }

  if (isPrime) console.log(num); // Print the prime number
}

*/
