
let arr = [1, 2, 3, 4];
for (let i = 1; i <= arr.length; i++){
    arr[i - 1] = i;
}
console.log(arr);

// ----
let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(sum);

// ---
let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log(factorial);