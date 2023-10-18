//////////////////// for phone case ///////////////////////


// -------------- 1. (step 1 + 2) from (case.js) Phone case (+) and (-) er kaj all same except (+) , (-) ----------------
    //  parameter (isIncrease) nibo , jodi (+) kori tahole (case.js) e (updateCaseNumber(true)) diye call korbo or (updateCaseNumber(false)) diye call korbo.
    // step - 1.1
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    // step - 1.2 + 2.2 from (case.js) case number 1 increase/decrease hobe tai (if/else) use korbo 
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    // step - 1.3 + 2.3 from (case.js)
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}


// step - 1.3 + 2.3 from (case.js) er (mobile case price increase + decrease) er code same tai etake 1 function er vitore declare korbo and je koyta (newCaseNumber) hobe oiguloke (59) diye (*) kore dibo.
//  1 ta function er vitor 1 ta value parameter hishebe boshaye dile er value set hoy.
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}



//////////////////////////////////////////////////////////////

//  //////////////////////// for Phone  /////////////////////
//  ------- step - 1
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
} 


////////////////////// for total money + tax  of phone and phone case /////////////////////

// Module:29-5: (advanced) Calculate subtotal tax amount and final total
    // step - 2: from (phone.js) -------------------- get text total balance  ------------------
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}


// step - 4: sub total value guloke text hishebe boshanor jonno
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}


// step - 3: from(phone.js) ------- calculate subtotal
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    // -------------- Add the sub total balance
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // step - 4.1 : (step - 4) er subtotal er innerText k ekhane declare korbo.....
    setTextElementValueById('sub-total', currentSubTotal);

    // -------------- step - 5: calculate tax
    // (.) er por 2 digits and string k number return korar jonno
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    // step - 5.1 : (step - 4) er subtotal er innerText k ekhane declare korbo.....
    setTextElementValueById('tax-amount', taxAmount);

    // ------------- step - 6: calculate final Amount
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}

// ------------------------- full code -----------------------

function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);

}