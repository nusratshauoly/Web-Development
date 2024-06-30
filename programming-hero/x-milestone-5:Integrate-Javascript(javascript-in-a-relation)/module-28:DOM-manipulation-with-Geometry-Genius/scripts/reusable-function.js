//  reusable function ----> reduce duplicate code


// reusable get Input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);

    // jokhon jei different function call korbe tokhon value return korbe 
    return value;
}