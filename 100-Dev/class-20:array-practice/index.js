// ------------------- array indexing --------------------
/*
    You can overwrite whole arrays by assigning an array to a different array
*/
let cars = ["Honda", "Toyota", "Ford", "Tesla"];
let nums = [1, 2, 3];
cars = nums;
console.log(cars);


// ---------------- array length -------------------
console.log(newArr.length); // 4


// --------------- array iteration ----------------------
/*
Iterates through an array passing in the value and index of each element
*/
let bestColors = ['green', 'blue', 'yellow', 'black'];

for(let i = 0; i < bestColors.length; i++){
    console.log(bestColors[i]);
}


// ------------ array iteration using forEach ------------------
//  forEach(catch (element, index)) run 1 time for each element in the array, it will run 4 times.

let bestColor = ['green', 'blue', 'yellow', 'black'];
bestColor.forEach((x, i) => console.log(x));


// ----------- other array methods -------------
// Remove item from the beginning of an array

// shift()
let bestRappers2020 = ['Gix9ine', 'Polo G', '6ix9ine'];
let removed = bestRappers2020.shift();
console.log(bestRappers2020);  // ['Polo G', '6ix9ine']


// add item to the beginning of an array

// unshift()
let bestRapperd2020 = ['Polo G'];
let removes = bestRapperd2020.unshift('Dylan');
console.log(bestRapperd2020);  // ['Dylan', 'Polo G']



// remove item from the end of an array

// pop()
let bestRapper2020 = ['Polo G', '6ix9ine'];
let remove = bestRapper2020.pop();
console.log(bestRapper2020);  // ['Polo G']


// add item to the end of an array

// push()
let bestRappering2020 = ['Dylan', 'Polo G'];
let removing = bestRappering2020.push('Dylan');
console.log(bestRappering2020);  // ['Dylan', 'Polo G', 'Dylan']


// map : check this code in chatgpt
//it does loop through an array but it creats a new array : here map will run three times cause there is a three element in (bestRappersMap2020) variable. map is gonna run for each element, 
let bestRappersMap2020 = ['Dylan', 'Polo G', 'Dylan'];
let bestRappersAllTime = bestRappersMap2020.map(x=> 'Dylan');
bestRappersAllTime.unshift('Dylan');
bestRappersAllTime.push('Dylan');
console.log(bestRappersAllTime);  // ['Dylan', 'Dylan', 'Dylan', 'Dylan', 'Dylan']
