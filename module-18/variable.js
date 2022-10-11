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


// video- 18.5 : 