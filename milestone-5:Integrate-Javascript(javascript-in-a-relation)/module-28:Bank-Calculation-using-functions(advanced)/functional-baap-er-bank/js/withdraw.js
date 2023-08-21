// --------------------- Module: 28-5: (semi-advanced) Common function to reduce code repeat: ----------------------

//console.log('withdraw file');

//------------------------ Module: 28-8: (advanced) shared balance update function-----------------------------

/*
    1: add withdraw button event handler
    2: get withdraw amount by using (getInputFieldValueById function)
    3: get previous withdraw amount by using getTextElement
    4: calculate new withdraw total and set the value
    4.5: set new withdraw total by using (setTextElementValueById function) 
    5. get previous balance total by (getTextElementValueById function)
    6. calculate new balance total 
    7. set balance total using (setTextElementValueById function)
*/

// step-1: add withdraw button event handler
    document.getElementById('btn-withdraw').addEventListener('click', function () {
// step-2: get withdraw amount by using (getInputFieldValueById function)
        const newWithdrawAmount = getInputFieldValueById('withdraw-field');
// step-3: get previous withdraw amount by using getTextElement
        const previousWithdrawTotal = getTextElementValueById('withdraw-total');
// step-4: calculate new withdraw total and set the value
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//  step-4.5: set new withdraw total by using (setTextElementValueById function)
        setTextElementValueById('withdraw-total', newWithdrawTotal);
//  step-5: get previous balance total by (getTextElementValueById function)
        const previousBalanceTotal = getTextElementValueById('balance-total');
//  step-6: calculate new balance total
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
//  step-7: set balance total using (setTextElementValueById function)
        setTextElementValueById('balance-total', newBalanceTotal);
    })