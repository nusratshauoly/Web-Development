//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [42,19,77,33,57]

let sum = nums.reduce( (acc,c) => acc + c, 0  ) //reduce runs once for each element in the array, every time reduce runs, there two element happens (first value as accumulator + second value as current value), 0 means the accumulation starts at 0. (0 + 42) = 42, 42+19 = 61, 61 + 77 = 138, 138 + 33 = 171, 171 + 57 = 228.


alert(sum);




//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

//Create a function that takes string
//Print the reverse of that string to the console

//Create a function that takes in a string
//Alert if the string is a palindrome or not
