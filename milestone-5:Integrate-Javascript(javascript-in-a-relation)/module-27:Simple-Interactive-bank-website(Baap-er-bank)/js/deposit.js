// button
document.getElementById('btn-deposit').addEventListener('click', function () {
// deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldAmountString = depositField.value;
    const newDepositFieldAmount = parseFloat(newDepositFieldAmountString);
    depositField.value = '';

    if (isNaN(newDepositFieldAmount)) {
        alert("Please Provide a valid Number!!!");
        return;
    };

// deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositFieldAmount;
    depositTotal.innerText = currentDepositTotal;


// balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositFieldAmount;
    balanceTotal.innerText = currentBalanceTotal;
    

})