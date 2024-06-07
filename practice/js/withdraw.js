document.getElementById('withdraw-btn').addEventListener('click', function () {
    // withdraw Input
     const withdrawInput = getInputFieldById('withdraw-field');
     const currentBalance = getTextElementValueById('balance-total');

    // invalid input
    if (withdrawInput === undefined || withdrawInput <= 0) {
        return;
    }
     
     // insufficient value
     if (withdrawInput > currentBalance) {
          alert('Insufficient balance!!!');
          return;
     }

    // withdraw total
    const withdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = withdrawTotal + withdrawInput;

    // set InnerText in deposit total
    setInnerTextElementValueById('withdraw-total', newWithdrawTotal);

    // balance total
      const balanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = balanceTotal - withdrawInput;

    // set InnerText in deposit total
    setInnerTextElementValueById('balance-total', newBalanceTotal);
})