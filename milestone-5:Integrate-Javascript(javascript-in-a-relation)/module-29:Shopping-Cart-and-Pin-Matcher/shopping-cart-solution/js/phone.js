// step - 2 : phone koyta kinbo er number gulo update korar jonno function likhbo from (step-1):
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

// step - 5: phone price take ekta function e rakhbo from (step-3)
function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}

// // step - 8: total phone & phoneCase total price(subtotal, tax, total) er jonno function declare korte hobe fron (step-7)
// // step - 8.5: ekhane parameter (elementId) declare korsi karon ekhane (subtotal, tax & total) er id diye eder total ber korbo . tai (elementId) dile jekono shomoy jetar total dibo tar id diye ber korte parbo.
// function getTextElementValueById(elementId) {
//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal = parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }

// // step - 10: phone & phone case 2tar e plus icon er jonno eki code use hobe tai function use kore likhbo jate code repeat na hoy from (step-9)
  
// function calculateSubTotal() {
//     // calculate total
//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     const subTotalElement = document.getElementById('sub-total');
//     subTotalElement.innerText = currentSubTotal;
// }


// --------------------------------- for plus button ---------------------------------------

//  step - 1 : add addEventListener to the button
document.getElementById('btn-phone-plus').addEventListener('click', function() {

// step - 3 : for update phone number
    const newPhoneNumber = updatePhoneNumber(true);

// step - 6: call the function from (step - 5):
    updatePhoneTotalPrice(newPhoneNumber);


// // step - 9: declare the function of total from (step-8.5) 
 //calculate total
    // const currentPhoneTotal = getTextElementValueById('phone-total');
    // const currentCaseTotal = getTextElementValueById('case-total');
    // const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
    
//  step - 11: function call korbo from (step-10):
    calculateSubTotal();
    
}) 

// ----------------------------- for minus button ---------------------------------

// step - 4 : add addEventListener to the minus button
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);   

// step - 6.5: call the function from (step - 5):
    updatePhoneTotalPrice(newPhoneNumber);


// // step - 7:  calculate total money(subtotal, tax, total) of both (phone & the phone case) er jonno bar repeat korte hobe tai ekebare function hishebe declare kore dibo in (step-8) ekhane na likhe 
    // const phoneTotalElement = document.getElementById('phone-total');
    // const currentPhoneTotalString = phoneTotalElement.innerText;
    // const currentPhoneTotal = parseInt(currentPhoneTotalString);

    //  step - 11.5: function call korbo from (step-10):
    calculateSubTotal();
    
}) 


// ---------------------------------- full code --------------------------------------
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
