// deposit & withdraw input field
function getInputFieldById(inputFieldId) {
    const inputElementField = document.getElementById(inputFieldId);
    const inputElementString = inputElementField.value;
    const inputElement = parseFloat(inputElementString);
    inputElementField.value = '';

    // invalid input
    if (isNaN(inputElement)) {
        alert('Invalid Input!!!');
        return;
    }
    return inputElement;
}


// deposit, withdraw, balance total element
function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// set innerText of deposit, withdraw and balance total
function setInnerTextElementValueById(textElementId, newValue) {
    const setInnerTextElement = document.getElementById(textElementId);
    setInnerTextElement.innerText = newValue;
}