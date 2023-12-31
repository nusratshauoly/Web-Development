document.getElementById('btn-withdraw').addEventListener('click', function () {
        const withdrawInputField = getElementValueById('withdraw-field');
        const withdrawTotal = getTextElementValueById('withdraw-total');
        const totalWithdraw = withdrawInputField + withdrawTotal;
        setTextElementValueById('withdraw-total', totalWithdraw);



        // ------ balance --------
        const balanceTotal = getTextElementValueById('balance-total');
        const totalBalance = balanceTotal - withdrawInputField;
        if (withdrawInputField >        totalBalance) {
                alert('donot have sufficient balance');
                return;
        }
        setTextElementValueById('balance-total', totalBalance);

})