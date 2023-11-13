document.getElementById('btn-deposit').addEventListener('click', function () {
// ---------- deposit Field -----------
    const depositField = document.getElementById('deposit-field');
    const newDepositFieldString = depositField.value;
    const newDepositField = parseFloat(newDepositFieldString);
    depositField.value = '';

    if(isNaN(newDepositField)) {
        alert('Enter a valid Amount!!!');
        return;
    };


    // ------------ Deposit Total ---------------
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const newDepositTotal = previousDepositTotal + newDepositField;
    depositTotal.innerText = newDepositTotal;

    // ------------ Balance Total -------------
    const balanceTotal = document.getElementById('total-balance');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal + newDepositField;
    balanceTotal.innerText = newBalanceTotal;
})