function getPin() {
    let pin = generatePin();
    let pinString = pin + '';
    if (pinString.length === 4) {
        return pinString;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    let random = Math.round(Math.random() * 10000);
    return random;
}

// generatePin
document.getElementById('generate-pin').addEventListener('click', function () {
    let pin = getPin();
    let displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

// calculator
document.getElementById('calculator').addEventListener('click', function (event) {
    let number = event.target.innerText;
    let typedNumberField = document.getElementById('typed-numbers');
    let previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            let digits = previousTypedNumber.split('');
            digits.pop();
            let remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        let newTypedNumbers = previousTypedNumber + number;
        typedNumberField.value = newTypedNumbers;
    }
});

// submit button
document.getElementById('verify-pin').addEventListener('click', function () {
    let displayPinField = document.getElementById('display-pin');
    let currentPin = displayPinField.value;
    let typedNumberField = document.getElementById('typed-numbers');
    let typedNumber = typedNumberField.value;

    let successPinMessage = document.getElementById('pin-success');
    let failurePinMessage = document.getElementById('pin-failure');

    if (typedNumber === currentPin) {
        successPinMessage.style.display = 'block';
        failurePinMessage.style.display = 'none';
    }
    else {
        failurePinMessage.style.display = 'block';
         successPinMessage.style.display = 'none';
    }
})