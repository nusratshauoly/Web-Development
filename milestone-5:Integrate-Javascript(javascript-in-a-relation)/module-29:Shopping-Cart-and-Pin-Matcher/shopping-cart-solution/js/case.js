
//  ------------------- 1. + 2. (phone case + , -) same hower jonno (common.js) file e function create korbo r ekhane just er (+) , (-) er function call korbo

// --------------------- 1. phone case (+) button ------------------

// step - 1 : add event listener to the phone case er (+) button 
document.getElementById('btn-case-plus').addEventListener('click', function () {

    /*  
    // step - 2 : get the value inside the case number field (input field)
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    // step - 3: convert the number to an parseInteger
    const previousCaseNumber = parseInt(caseNumberString);
    // step - 4: calculate the new case number 1 kore increase hobe 
    const newCaseNumber = previousCaseNumber + 1;
    // step - 5: set the (new case number) in to (case number field) 
    caseNumberField.value = newCaseNumber;
    */
    
// step - 1.2:  (common.js) (updateCaseNumber) function er parameter e (isIncrease) nibo , jodi (+) kori tahole (case.js) e (updateCaseNumber(true)) diye call korbo 
    const newCaseNumber = updateCaseNumber(true);


    /* 
    // (step 1.3 + 2.3) same tai (common.js) e function create kore rakhbo
    // step - 1.3 : phone case er price (+) er shomoy : je koyta (newCaseNumber) hobe oiguloke (59) diye (*) kore increase korbo dibo.
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
    */
    // step - 1.4:  (common.js) theke (1.3 + 2.3) er function call kore dibo
    updateCaseTotalPrice(newCaseNumber);
    // step - 6 : (from common.js => step - 3)  calling function for sub total
    calculateSubTotal();
});

// ------------------- 2. phone case (-) button ------------------
document.getElementById('btn-case-minus').addEventListener('click', function () {
/*
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
*/
    // step - 2.2: (common.js) (updateCaseNumber) function er parameter e (isIncrease) nibo , jodi (-) kori tahole (case.js) e (updateCaseNumber(false)) diye call korbo 
    const newCaseNumber = updateCaseNumber(false);

    /* 
    // (step 1.3 + 2.3) same tai (common.js) e function create kore rakhbo
    // step - 2.3 : phone case er price (-) er shomoy : je koyta (newCaseNumber) hobe oiguloke (59) diye (*) kore /increase/decrease korbo dibo.

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
    */
    // step - 2.4:  (common.js) theke (1.3 + 2.3) er function call kore dibo
    updateCaseTotalPrice(newCaseNumber);
    // step - 6.1 : (from common.js => step - 3)  calling function
    calculateSubTotal();
    
})







// ---------------------- full code -------------------
// --------- function from (common.js) -------------
//////////////////// full code ///////////////////////

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

// ------------------- phone case (+) button ------------------
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});
// ------------------- phone case (-) button ------------------
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
})



