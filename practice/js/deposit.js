document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit Input
    const depositInput = getInputFieldById('deposit-field');

    // invalid input
    if (depositInput === undefined || depositInput <= 0) {
        return;
    }

    // deposit total
    const depositTotal = getTextElementValueById('deposit-total');
    const newDepositTotal = depositTotal + depositInput;

    // set InnerText in deposit total
    setInnerTextElementValueById('deposit-total', newDepositTotal);

    // balance total
      const balanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = balanceTotal + depositInput;

    // set InnerText in deposit total
    setInnerTextElementValueById('balance-total', newBalanceTotal);
})