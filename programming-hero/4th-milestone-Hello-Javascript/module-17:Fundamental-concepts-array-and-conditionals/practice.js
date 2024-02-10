// video- 17.2
var friendsAge = [11, 12, 13, 14, 15];
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels.length);
console.log(friendsAge.length);

// video- 17.3
//1. get element by index
//array position count 0 diye shuru hoy
var numbers = [45, 76, 67, 12, 98, 89];
console.log(numbers[0]);

var element = numbers[1];
console.log(element);

//2. set element value by index
// we can also assign numbers using index
numbers[1] = 77;
numbers[3] = 66;
console.log(numbers);

// 3. find element index position in array
var positionIndex = numbers.indexOf(12);
console.log(positionIndex); 
var indexPosition1 = numbers.indexOf(77);
console.log(indexPosition1);

// video -  17.4
//push pop
var numbers = [78, 45, 98, 45];
numbers.push(65); 
numbers.pop();
console.log(numbers);

// shift(remove item from first)
var shiftElement = numbers.shift();
console.log(shiftElement);

var unShiftElement = numbers.unshift(13);
console.log(unShiftElement);


// 17.5:  comparison
// less than
console.log(5 < 6);
// greater than
console.log(5 > 6);
// equal
console.log(5 == 6);
// equal (== / ===)
console.log(6 == 6);
// equal not(== / ===)
console.log(5 != 6);
// greater than or equal
console.log(6 >= 6);
console.log(5 >= 6);
console.log(15 >= 6);
// less than or equal
console.log(5 <= 6);
console.log(6 <= 6);
console.log(16 <= 6);

// 
var num1 = 56;
var num2 = 55;
console.log(num1 > num2);

// multiple conditions
// money1 > money2 && height1 > height2;

// money1 > money2 || height1 > height2;


// 17.6
var iphonePrice = 79000;
var myBudget = 9500;

if(iphonePrice < myBudget){
    console.log("i will buy the phone");
}
// 
var chickenPrice = 500;
var myMoney = 50;
if(chickenPrice <= myMoney){
   console.log("i will eat chiken");
}
if(chickenPrice > myMoney){
   console.log("smashed potato khabo");
}
if(chickenPrice < myMoney){
    console.log("chiken khabo");
 }
 else{
    console.log("alu khabo");
}

// 17.7
var isGraduated = true;
var salary = 75000;
var cars = 1;

if((isGraduated == true && salary > 50000) || cars >= 1){
    console.log('lets get married');
}
else{
    console.log('lets not get married');
}

// 17.8
var money = 10;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money){
    console.log("danish den");
}else if(butterBread < money){
    console.log("butterbread den");
}else if(toast < money){
    console.log("toast den");
}
else{
    console.log("tea please");
}

// nested condition
var math = true;
var geometry = true;
var straightLine = true;
if(math == true){
   if(geometry == true){
    if(straightLine == true){
        console.log("shoja line jaba");
    }
    else{
        console.log("baka line e jaba");
    }

}
else{
    console.log("pithagorus hobana");
}

}else{
    console.log("mathematician hobana");
}
