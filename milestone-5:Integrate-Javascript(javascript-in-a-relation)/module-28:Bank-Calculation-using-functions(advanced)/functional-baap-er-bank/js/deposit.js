document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositInputField = getElementValueById('deposit-field');
    const depositTotal = getTextElementValueById('deposit-total');
    const totalDeposit = depositInputField + depositTotal;
    setTextElementValueById('deposit-total', totalDeposit);



    // --------- total balance ---------
    const balanceTotal = getTextElementValueById('balance-total');
    const totalBalance = balanceTotal + depositInputField;
    setTextElementValueById('balance-total',totalBalance);

})