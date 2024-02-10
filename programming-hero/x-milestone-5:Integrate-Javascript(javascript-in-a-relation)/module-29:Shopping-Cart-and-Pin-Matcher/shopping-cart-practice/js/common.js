function getTextElementValueById(elementId) {
    const totalElement = document.getElementById(elementId);
    const totalElementString = totalElement.innerText;
    const currentTotalElement = parseFloat(totalElementString);
    return currentTotalElement;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateTotal() {

    // subTotal
    const phoneTotal = getTextElementValueById('phone-total');
    const caseTotal = getTextElementValueById('case-total');
    const subTotal = phoneTotal + caseTotal;
    setTextElementValueById('sub-total', subTotal);

    // tax
    const taxAmountString = (subTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-total', taxAmount);

    // finalAMount
    const finalAmount = subTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}