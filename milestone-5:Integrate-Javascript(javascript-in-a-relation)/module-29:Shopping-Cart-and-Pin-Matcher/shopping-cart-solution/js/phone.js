// step - 1: for phone
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);


    //------------------------------------------------------
    

// Module:29-5: (advanced) Calculate subtotal tax amount and final total
    // ----- step - 2: from (common.js) for phone and call function (getTextElementValueById) (move this to (common.js) function
    /*
    const phoneTotalElement = document.getElementById('phone-total');
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString)
    */
    


    // -----step - 3:  calculate subtotal (move this to (common.js) function
    /*
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    // Add the total balance
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
    */
    

// step - 4 : (from common.js => step - 3)  calling function
    calculateSubTotal();
    //---------------------------------------------------------
});


// step - 1.1: for phone
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
// step - 4.1 : (from common.js => step - 3)  calling function
    calculateSubTotal();

});


// -------------------- full code -----------------------------

document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();    
}) 
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);   
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();    
}) 

*/



// --------------------- full code -----------------------

// --------------- common.js --------------
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
// --------------- phone.js ------------------
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();
});

