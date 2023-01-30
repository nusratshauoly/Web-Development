// Number
var sunglassPrice = 120;

// string type variable
var specialOneName = "Ariana Gande";

// boolean type variable
var isSingle = true;

// two types of number:Integer: 120;
// float, decimal: 3.65;

// variable naming convention: rules, best practices
/*
1.single word
2. no gap or space
3. no quote
4.no keyword
5.can not start with a number
6.can not contain dash
7.should use camelCase
*/
// Math Operations: +, -, *, /
// shorthand: +=,-+,*=, ==, --
// convert: parseInt, parseFloat
// toFixed
// remainder: % (vagshesh)

// 17.2:

var friendsAge = [11, 21, 45, 17, 14];
var picnicFee = [5000, 2000, 4000, 150];
var nayikas = ['mahi', 'opu', 'mimi', 'tisha'];
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);
// kon array te koyta value ase ber korar jonno
// array te position count 0 theke shuru hoy : 0, 1, 2, 3 evabe
console.log(vowels.length);
var vowelsCount = vowels.length;
console.log(vowelsCount);

var friendsName = ['ami','tumi', 'shey'];
var friendsAge = [33, 23, 56];
console.log(friendsName.length);
var newLength = friendsName.length;
console.log(newLength);

// 17.3
// with index we access array value
var numbers = [45,56, 67, 78, 89];
//1. get element by index (kono position er value jodi dekhate chai)
console.log(numbers[0]);
console.log(numbers[3]);

var element = numbers[1];
console.log(element);
//2. get element value by index: kono position e new number set korle new number boshe ager number delete hoye jabe
numbers[1] = 77;
numbers[3] = 44;
console.log(numbers);

//3. find index of an element (kono ekta element er index/position khuje ber kora)
var positionIndex = numbers.indexOf(44);
console.log(positionIndex);
// jodi number na pawa jay tahole -1 dekhabe
var positionIndex1 = numbers.indexOf(89);
console.log(positionIndex1);

// 17.4:

//1. new number array er last e add korar jonno
// use push to add element to an array as the last element array
var numbers = [78, 45, 98, 45];
numbers.push(63);
console.log(numbers);

var friends = ['balam', 'kalam', 'salam'];
console.log(friends);
friends.push('dilam');
console.log(friends);

// 2. array er last position theke number delete korar jonno
// use pop to get rid of the last element
friends.pop();
console.log(friends);
// new variable e pop ta rakhle jei value ta bad dibe sheta dekhabe
var newElement = friends.pop();
console.log(newElement);


// 3. kono array er first e jodi value add korte chai

// unshift adds items in the first of an array
friends.unshift("nilam");
console.log(friends);
// 4. kono array er first theke jodi value remove korte chai
// shift removes the first item of an array
friends.shift();
console.log(friends);

// 17.5
console.log(6 != 5);
var myLove = 99;
var yourLove = 100;
