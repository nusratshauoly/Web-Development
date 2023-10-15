// button
document.getElementById('btn-withdraw').addEventListener('click', function () {
// withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldAmountString = withdrawField.value;
    const newWithdrawFieldAmount = parseFloat(newWithdrawFieldAmountString);
    withdrawField.value = '';

    if (isNaN(newWithdrawFieldAmount)) {
        alert("Please Provide a valid Number!!!");
        return;
    };

// withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  
// balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // withdraw over money
 if (newWithdrawFieldAmount > previousBalanceTotal) {
        alert("You don't have suffiecient balance!!!");
        return;
    }

  // withdraw total
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawFieldAmount;
    withdrawTotal.innerText = currentWithdrawTotal;


    // balance total
    const currentBalanceTotal = previousBalanceTotal - newWithdrawFieldAmount;
    balanceTotal.innerText = currentBalanceTotal;

})