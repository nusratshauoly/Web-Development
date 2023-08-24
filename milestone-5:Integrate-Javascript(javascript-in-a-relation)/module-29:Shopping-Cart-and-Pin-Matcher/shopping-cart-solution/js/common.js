//from (phone.js) and will be use both (case.js & phone.js)

// step - 1: 
// step - 8:(from = phone.js) total phone & phoneCase total price(subtotal, tax, total) er jonno function declare korte hobe fron (step-7)
// step - 8.5:(from = phone.js) ekhane parameter (elementId) declare korsi karon ekhane (subtotal, tax & total) er id diye eder total ber korbo . tai (elementId) dile jekono shomoy jetar total dibo tar id diye ber korte parbo.
function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

// step - 4: subtotal element k function e declare korbo
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;

}


// step - 2: calculate subtotal
// step - 10:(from = phone.js) phone & phone case 2tar e plus icon er jonno eki code use hobe tai function use kore likhbo jate code repeat na hoy from (step-9)
function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    // const subTotalElement = document.getElementById('sub-total');
    // subTotalElement.innerText = currentSubTotal;
// step - 5: call the (setTextElementValueById) function from (step - 4)
    setTextElementValueById('sub-total', currentSubTotal);
    


// step - 3 : ------------------------ calculate tax --------------------------------
    // ekhane tax money (.) er por 2 digits dekhabe tai (.toFixed(2)) nibo but it will become string k number e convert korbo (parseFloat) diye
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);  // tax 10% = 0.1
    const taxAmount = parseFloat(taxAmountString);

    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}


//  ------------------------------------ full code ---------------------------------------

function getTextElementValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    // calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);  // tax 10% = 0.1
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}