/*
2. write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`;
*/
let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j); // every time we change the loop, we push the value in (countdown) array
  j--; // countdown from reverse
}
console.log(countdown);

/*
3. write a `do - while` loop that prompts a user to enter their favourite tea type until they enter "stop". Store each tea type in an array named "teaCollection".
*/

// in (do-while) loop it takes input atleast 1 time from user then start the loop

let teaCollection = [];
let tea;
do{
    tea = prompt(`Enter your favourite tea (type "stop" to finish`);

    if(tea !== "stop"){
        teaCollection.push(tea);
    }

}while()

/*
4. write a `do-while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`
*/
