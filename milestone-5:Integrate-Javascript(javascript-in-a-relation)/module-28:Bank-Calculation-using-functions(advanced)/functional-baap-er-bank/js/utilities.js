function getElementValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const newInputString = inputField.value;
    const newInput = parseFloat(newInputString);
    inputField.value = '';
    
    if (isNaN(newInput)) {
        alert('enter a valid number!!!');
        return;
    }
    return newInput;
} 

function getTextElementValueById(textElementId) {
    const textTotal = document.getElementById(textElementId);
    const previousTextTotalString = textTotal.innerText;
    const previousTextTotal = parseFloat(previousTextTotalString);
    return previousTextTotal;
    
}

function setTextElementValueById(textElementId, newValue) {
    const textTotal = document.getElementById(textElementId);
    textTotal.innerText = newValue;
}