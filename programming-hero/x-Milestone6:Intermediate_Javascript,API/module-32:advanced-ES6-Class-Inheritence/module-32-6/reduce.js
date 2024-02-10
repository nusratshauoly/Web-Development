// reduce: shobgulo element e jabe but 1 ta function thakbe oi function apply kore each element k ekta ultimate value diye pathaye dibe.
const numbers = [1, 2, 3, 4, 5];
//.reduce(accumulatorFunction, initial value = 0)
// accumulatorFunction use two parameters
const total = numbers.reduce((previous, current) => previous + current, 0);
console.log(total);


// 2. using multiline in reduce
const numbers1 = [1, 2, 3, 4, 5];
//.reduce(accumulatorFunction, initial value = 0)
// accumulatorFunction use two parameters
const total1 = numbers1.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total1);


