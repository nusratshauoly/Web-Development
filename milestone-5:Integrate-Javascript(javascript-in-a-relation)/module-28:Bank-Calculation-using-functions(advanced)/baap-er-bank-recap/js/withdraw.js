// ------------ Module: 28-4: Money withdraw and reduce balance for withdraw: ---------------
//**** */ At first consolee.log diye check korte hobe file response kore kine: console.log('withdraw js file connected');

/*
----- List of Task : -----
1. add eventhandler with the withdraw button
2.get the withdraw amount
2.5: convert string withdraw amount to a number type
3. clear the withdraw input field after getting the value
4. get the previous withdraw total
5.calculate (new withdraw + previous withdraw) total withdraw and set the value to the withdraw total
6. get current balance total
7. calculate the new balance and set it to the balance total element

*/

// step-1. add eventhandler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

// step - 2.get the withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
// step-2.5: convert string withdraw amount to a number type
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step-3: clear the withdraw input field after getting the value
    withdrawField.value = '';
    // if give unvalid number
    if(isNaN(newWithdrawAmount)) {
        alert('Enter a valid number!!!');
    }

// step-4. get the previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step-5.calculate (new withdraw + previous withdraw) total withdraw and set the value to the withdraw total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;


// ------------- Balance section --------------
// step-6. get current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Account doesn't have sufficient balance!!!");
    }

// step-7: calculate the new balance and set it to the balance total element
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})