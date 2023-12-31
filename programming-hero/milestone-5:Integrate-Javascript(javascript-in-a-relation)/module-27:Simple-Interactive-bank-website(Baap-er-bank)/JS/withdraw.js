document.getElementById('btn-withdraw').addEventListener('click', function () {
    // --------- withdraw field -----------
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawFieldString = withdrawField.value;
    const newWithdrawField = parseFloat(newWithdrawFieldString);
    withdrawField.value = '';

    if (isNaN(newWithdrawField)) {
        alert('Enter a valid number');
        return;
    }

    // -------- withdraw total ------------
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawField;
    withdrawTotal.innerText = newWithdrawTotal;


    // -------------- balance Total ---------------
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdrawField > previousBalanceTotal) {
        alert('Do not have sufficient balance!!!');
        return;
    }
    const newBalanceTotal = previousBalanceTotal - newWithdrawField;
    balanceTotal.innerText = newBalanceTotal;


})