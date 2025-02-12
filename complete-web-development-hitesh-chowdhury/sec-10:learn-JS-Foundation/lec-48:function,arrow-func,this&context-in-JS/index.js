// ------------------ functions in Javascript -------------------------

// ------------ function --------------

/*
1. Write a function named `makeTea` that makes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.

Store the result in a variable named `teaOrder`
*/
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");
console.log(teaOrder);

// --------------- create function within function ---------------

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/
function orderTea(teaType) {
  function confirmOrder() {
    return `"Order confirmed for chai"`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);

// ---------------- arrow function ----------------
/*
3. Write a arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.

Store the result in a variable named `totalCost`.
*/
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(50, 10);
console.log(totalCost);
