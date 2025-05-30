// ----------- loops --------------

/*
-- while
-- do / while

-- for
-- for / in
-- for / of
-- forEach

*/

/*
    1. Write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'
*/
//  1 + 2 + 3 + 4 + 5
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i; // (i) the value of i chages every time.
  i++;
}
console.log(sum);
