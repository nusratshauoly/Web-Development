function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldValue = phoneNumberField.value;
    const phoneNumber = parseInt(phoneNumberFieldValue);

    let newPhoneNumber;

    if (isIncrease === true) {
        newPhoneNumber = phoneNumber + 1;
    }
    else if (phoneNumber > 0) {
        newPhoneNumber = phoneNumber - 1;
    }
    else {
        return phoneNumber;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const updateTotal = newPhoneNumber * 1219;
    const updatePhoneTotalElement = document.getElementById('phone-total');
    updatePhoneTotalElement.innerText = updateTotal;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhone = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhone);
    calculateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhone = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhone);
    calculateSubTotal();
});