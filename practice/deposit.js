function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldValue = caseNumberField.value;
    const caseNumber = parseInt(caseNumberFieldValue);

    let newCaseNumber;

    if (isIncrease === true) {
        newCaseNumber = caseNumber + 1;
    }
    else if (caseNumber > 0) {
        newCaseNumber = caseNumber - 1;
    }
    else {
        return caseNumber;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber) {
    const updateCasePrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = updateCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCase = updateCaseNumber(true);
    updateCaseTotalPrice(newCase);
    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCase = updateCaseNumber(false);
    updateCaseTotalPrice(newCase);
    calculateSubTotal();
})