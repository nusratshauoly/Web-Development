//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let powerRangers = ['Mighty Morphin', 'Alien Rangers', 'Zeo']

// this forEach is gonna run for 3 times, cause theres 3 elements in the array
powerRangers.forEach( show => console.log( show ) )    // what is the (show) is here .... is show here is parameter.

//Create and array of numbers
let nums = [21, 56, 88, 24, 99,710]
//Return a new array of numbers that includes every even number from the previous Arrays

let onlyEvens = arr => arr.filter( n => n % 2 === 0 )  // here (arr) is the parameter. // filter runs once for each element in the array and it checks to see if something is true., if its true, it includes in the new array.  // filter here help us to set up a new array. // filter will run 6 times here, cause nums array have 6 elements here.

console.log( onlyEvens( nums) );




// check in chatgpt
//Create a function that takes in an array of numbers   // 
//Alert the sum of the second lowest and the second highest number
function sumSecondLowAndHigh(arr){
    let sorted = arr.sort((a,b)=> a-b)
    alert( sorted[1] + sorted[ sorted.length - 2] )
}
sumSecondLowAndHigh([2,3,1,5,4])




