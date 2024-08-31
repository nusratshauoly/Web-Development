// closure
//  kono 1 ta function er vitor r 1 ta function return korle vitorer function ta bahirer joto function ase sheigulate access korte parbe.

// // 1ta function er vitor theke r 1ta function jokhon create kortesi tokhon nijeder moddhe alada instance create hobe and their own copy of variable thakbe ekhane counter variable jemon ekhane (watch2) janena (watch1) er counter variable koto only watch1 knows its own counter value.

// 1ta internal function outer function e access korte partese etake bole closure
// 1 ta function theke jodi r 1 ta function e return kori or 1 ta function er vitor theke r 1 ta function k call korle tada nijossho or own closure create kore 

// closure create korte hole 1 ta function er vitore r 1 ta function return korte hobe emon kono kotha nei, kintu 1 ta function er vitore r 1 ta function k call korte hobe.
function kitchen() {
    let roast = 0;
    return function () {  // 2nd function : 1ta function er vitor theke r 1ta function k return kortesi 
        roast++;
        return roast;
    }
}
const firstServer = kitchen();
console.log(firstServer);



// 
function stopWatch() {
    let counter = 0;
    return function () {  // 1ta function er vitor theke r 1ta function k return kortesi 
        counter++;
        return counter;
    }
}

const watch1 = stopWatch();
console.log(watch1);
watch1();
watch1();
watch1();

// evabe joto bar watch() k call korbo 1, 2, 3 kore totobar 1 kore barbe.

const watch2 = stopWatch();
watch2();
watch2();
watch2();
// evabe joto bar watch2() k call korbo 1, 2, 3 kore totobar 1 kore barbe.

watch1();
watch1();
watch1();
// evabe  abar watch() k call korle ager bar jotobar kore call korsi tar por theke count shuru hobe 4, 5, 6

watch2();
watch2();
watch2();
watch2();
watch2();
watch2();
// evabe  abar watch2() k call korle ager bar jotobar kore call korsi tar por theke count shuru hobe 4, 5, 6, 7, 8, 9


const watch3 = stopWatch();
watch3();
watch3();
watch3();
// evabe  abar watch3() k call korle ager bar jotobar kore call korsi tar por theke count shuru hobe 1, 2, 3