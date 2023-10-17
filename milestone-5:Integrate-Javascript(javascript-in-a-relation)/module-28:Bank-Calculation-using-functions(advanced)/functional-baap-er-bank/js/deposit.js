// DRY ---> Donot repeat yourself

// /////////// deposit field section //////////////

    /*
        1.get the element by id
        2. get the value from the element
        3. convert string value to a number
    */


document.getElementById('btn-deposit').addEventListener('click', function () {
    /// deposit field value
    const newDepositInput = InputFieldValueId('deposit-field');

    // ////////// deposit total section //////////
    // get previous deposit total value by id
    const previousDepositTotal = getTextElementValueById('deposit-total');
    
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositInput;


    // set deposit total value (innertext hishebe boshanor jonno)
    setTextElementValueById('deposit-total', newDepositTotal);


    // // ////////// balance total section //////////
    // get total balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositInput;
    setTextElementValueById('balance-total', newBalanceTotal);
    })