// //from module-17
// //Number
// var watchPrice = 120;
// watchPrice = 125;
// //string
// var userName = 'Sogir Uddin';
// //boolean
// var isExpensive = true;
// //integer : 1 2 3 4 5  6  7 8
// //float : 2.523 4.216 6.43

// // video-18.2: array
// var friendsAge = [11, 13, 17];
// var muriFee = [34, 234, 3];
// var nayikas = ['mahi', 'apu', 'mimi'];
// var oddNumbers = [1, 3, 5, 7, 9];
// var vowels = ['a', 'e', 'i', 'o', 'u'];
// console.log(vowels);
// console.log(oddNumbers);
// // jodi jante chai array er vitor koyta element ache
// console.log(oddNumbers.length);
// //new variable name diye ager variable ta boshano jay
// var vowelsCount = vowels.length;
// console.log(vowelsCount);
// // array element er index/position er count 0 diye shuru hoy 0,1,2,3,4 mane koyta elemment ache

//video-18.3: array index (array element ta koto number e ase er position ber korar jonno)
//index string er o hote pare
// var books = ['kite', 'runner', 'thousand', 'splendid', 'sun'];
// var kiteIndex = books.indexOf('kite');
// console.log(kiteIndex);
// //index number er o hote pare
// var numbers = [45, 98, 65, 72, 52, 63];
// var index = numbers.indexOf(72);
// console.log(index);
// jodi element jodi array te na thake tokhon output (-1) dekhabe
// var index1 = numbers.indexOf(152);
// console.log(index1);
// // 0,1,2,3 erokom array er position e kon element ache shetao ber korte parbo
// var books1 = ['kite', 'runner', 'thousand', 'splendid', 'sun'];
// var secondIndex = books1[2];
// console.log(secondIndex);
// // jodi emon position dei jekhane kono man nei tahole undefined dekhabe
// var sixthIndex = books1[6];
// console.log(sixthIndex);
// array er element new element diye replace o korte parbo
// var numbers1 = [45, 98, 65, 72, 52, 63];
// console.log(numbers1);
// numbers1[1] = 95;
// numbers1[4] = 21;
// console.log(numbers1);

// video-18.4: add new element is => push, remove element is => pop
// push => add element in a array : array er shobcheye last element always add hobe (jotobar pop korbo 1 ta kore element add hobe)
// var lastBench = ['ami', 'tumi', 'she'];
// lastBench.push('he');
// lastBench.push('you');
// lastBench.push('they');
// console.log(lastBench);

// var friendsAge = [11, 13, 15, 17];
// friendsAge.push(16);
// console.log(friendsAge);

// // pop => remove element from an array : array er shobcheye last element always delete hobe (jotobar pop korbo 1 ta kore element remove hobe)
// friendsAge.pop();
// friendsAge.pop();
// console.log(friendsAge);
// // last item jeta remove korbo oitao show korar jonno aladda variable declare korte hobe
// var lastItem = friendsAge.pop();
// console.log(friendsAge);
// console.log(lastItem);


// // video- 18.5 : compare variables
// // greater than
// console.log(5 > 6);
// // less than
// console.log(5 < 6);
// // is equal to
// console.log(5 == 6);
// console.log(6 == 6);
// //is not equal to
// console.log(5 != 6);
// console.log(6 != 6);
// //variale name diyeo compare kora jabe
// var myLove = 99;
// var yourLove = 100;
// console.log(myLove > yourLove);
// console.log(myLove == yourLove);
// console.log(myLove < yourLove);
// console.log(myLove != yourLove);
// // &&(and) operator (duita condition e fulfil korte hobe)
// console.log(studyGood && goodPerson);
// // ||(or) operator (2 ta condition er jekkono 1 ta  fulfil korte hobe)
// console.log(isBanker || goodResult);

// // video-18.6: conditional decision
// var isFoodReady = true;
// // if the food is ready i will eat
// if (isFoodReady == true){
//     console.log('i will eat now.');
// }
// // or jodi variable change hoy
// var isFoodReady = false;
// if (isFoodReady == true){
//     console.log('i will eat now.');
// }

// ///////less than(false condition)
// var iphonePrice = 70000;
// var myBudget = 9500;
// if(iphonePrice < myBudget){
//     console.log('I will buy Iphone');
// }
// // or(true condition)
// var iphonePrice = 70000;
// var myBudget = 109500;
// if(iphonePrice < myBudget){
//     console.log('I will buy Iphone');
// }

// ///////greater than 
// var iphonePrice = 70000;
// var myBudget = 109500;
// if(iphonePrice > myBudget){
//     console.log('I will not buy Iphone');
// }

// // dual condition (true and false) ekshathe likha jay
// // if(conditional){
// // }
// // else{
// // }
// var chickenPrice = 180;
// var myMoney = 50;
// if(chickenPrice < myMoney){
//    console.log('i will eat');
// }
// else{
//    console.log(i will not eat);
// }
// // or
// var chickenPrice = 180;
// var myMoney = 850;
// if(chickenPrice < myMoney){
//    console.log('i will eat');
// }
// else{
//    console.log(i will not eat);
// }


// video-18.7: multiple condition 
// for && (and) operator(shobgulo condition true hote hobe)
// var gotJob = true;
// // or
// // var gotJob = false;
// //compare korar jonno (==) use kora hoy
// if(gotJob == true){
//     console.log('i am now self ependent');
// }
// else{
//     console.log('i am not self ependent');
// }


// // for multiple condition
// var gotJob = true;
// var moneySaved = 150000;
// // or
// var moneySaved = 200000;
// if(gotJob == true && moneySaved > 200000){
//     console.log('i am now self ependent');
// }
// else{
//     console.log('i am not self ependent');
// }

// // for triple condition or aro onek beshi condition deya jabe
// var gotJob = true;
// var moneySaved = 150000;
// var hasFlat  = false;
// if(gotJob == true && moneySaved > 200000 && hasFlat == true){
//     console.log('i am now self ependent');
// }
// else{
//     console.log('i am not self ependent');
// }


// // for || (or) operator (jekono 1ta condition true holei hobe)
// var gotJob = true;
// var moneySaved = 150000;
// var hasFlat  = false;
// if(gotJob == true || moneySaved > 200000){
//     console.log('i am now self ependent');
// }
// else{
//     console.log('i am not self ependent');
// }


// // for multiple condition
// var gotJob = false;
// var moneySaved = 150000;
// var hasFlat  = false;
// if(gotJob == true || moneySaved > 200000 || hasFlat == true){
//     console.log('i am now self ependent');
// }
// else{
//     console.log('i am not self ependent');
// }

// // complex condition
// var gotJob = false;
// var moneySaved = 150000;
// var hasFlat  = false;
// var hasHouse = true;
// if((gotJob == true && moneySaved > 200000) || hasHouse == true){
//     console.log('i am now self ependent');
// }
// else{
//     console.log('i am not self ependent');
// }


// video- 18.8 - multi stage condition and nested condition

// // multi stage condition 
// var danishPrice = 25;
// var toastBiscuitPrice = 10;
// var butterBreadPrice = 50;
// // var myBudget = 100;
// // or
// // var myBudget = 20;
// // or
// var myBudget = 40;

// if(danishPrice < myBudget){
//     console.log('danish khabo');
// }
// else if(butterBreadPrice < myBudget){
//     console.log('butterBread khabo');
// }
// else if(toastBiscuitPrice < myBudget){
//     console.log('toastBiscuit khabo');
// }
// else{
//     console.log('my money is not enough');
// }

// // nested condition (condition er vitor abar condition)
// var danishPrice = 25;
// var toastBiscuitPrice = 10;
// var butterBreadPrice = 50;
// var myBudget = 40;
// var packedWell = false;

// if(danishPrice < myBudget){
//     if(packedWell == true){
//         console.log('danish khabo');
//     }else{
//         console.log('danish khabo na');
//     }
// }

// video - 18.9: summary

// 1. array likhar  niyom(position count shuru hobbe 0,1,2, evabe)
var tableLength = 12;
var tourDestination = ['coxsbazar', 'nepal', 'vutan', 'paris'];
// 2.indexOf : element gulo k kon position e ache janar jonno
tourDestination.indexOf('vutan');
// 3.kon position e kon element ache eta  jannar jonno
var fourthDestination = tourDestination[3];
// 4.changing array elements
tourDestination[1] = 'srilanka';
// 5.new array elemment add and delete in the last of a array
tourDestination.push('london');
tourDestination.pop('paris');
// 6.condition (complexe composotion)
if(tourDestination[1] == 'nepal'){
    console.log('pahare pshsre');
}
else if(tourDestination[1] == 'china'){
    console.log(i will not go china);
}
//7.length = kono array te kotogulo element ase
else if(tourDestination.length == 4){
    console.log('aro travel korte chai')
}
else{
    console.log('will not go anywhere');
}
//8. 18.9: two extra conditional comparison
// less than or equal (<=)
var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget){
    console.log('ami dim khabo');
}

// or
// greater than or equal(>=)
var eggPrice = 32;
var myBudget = 32;
if (eggPrice >= myBudget){
    console.log('ami dim khabo na');
}