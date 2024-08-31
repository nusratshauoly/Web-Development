// block scope :  {} second bracket er vitore ja thakbe shetai 1 ta scope & we won't get the result outside of bracket if declare with const/let
function add(a, b) {
    const total = a + b;
    console.log(a, b);
    if (b > 5) {
        const sum = 25 + a + b;
    }
    else {
        const sum = 5 + a + b;
        var current = sum; // var diye kono variable declare korle declare part ta k function er niche & onno shob variable er upore niye jay , etake bole (hoisting). var do not follow the block scope rules
    }
    console.log(sum);  // we won't get the result of sum outside of bracket if declare with const/let
    console.log(current);
    return total;
}
// console.log(a, b);
// console.log(total); // we won't get the result of total outside of function
add(5, 3); 
add(5, 7);