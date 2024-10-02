function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementInnerText = textElement.innerText;
    const element = parseFloat(textElementInnerText);
    return element;
}

function setInnerTextElementById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.textContent = newValue;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setInnerTextElementById('sub-total', currentSubTotal);

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setInnerTextElementById('tax-amount', taxAmount);

    const finalTotal = currentSubTotal + taxAmount;
    setInnerTextElementById('final-total', finalTotal);

}