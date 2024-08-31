for (var i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside', i); 


// ----------------------

// calling the function
print5();
print10();  // let / const use korle initialization er age call kora jayna...

print11(); // it wont call cause var diye kono variable declare korle shudhu oi variable tai call hobe er vitore jodi function thake sheta call hobena tai ekhane function undefined dekhabe 

// loop er moddhe var use korle pore i er man onno kothao use korle value change hoye jabe tai we use (let) and (console.log) function er bahire kaj kore na.
for (let i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside', i); // won't work because of block scope


// function er vitore function likhle full function take hoist kore fele... tai jekono jaygay ei function k cal korte parbo

function print5() {
    console.log('inside print5', 5);
}
const print10 = function () {
    console.log('inside print10', 10);
}

// 
var print11 = function () {
    console.log('inside print11', 11);
}