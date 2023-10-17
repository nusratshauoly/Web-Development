// --------------------- Module: 28-5: (semi-advanced) Common function to reduce code repeat: ----------------------
//console.log('utilities file');



// --------------------- Module: 28-5: (semi-advanced) Common function to reduce code repeat: ----------------------
//---------------------- Module: 28-6: (advanced) Share one function between two input field ---------------------
// -------------------- Module: 28-7: (advanced) get and set element value using a function --------------------------

// ------------- ekhaner function gulo niye (utilities.js) file e set korte hobe but -------------

// *** step-1:: normal deposit bank er (step-2: get deposit amount from the deposit input field) and (step-3: 3. clear the deposit input field after getting the value) er replace e ei function boshano hoise eki code bar bar repeat korar poriborte .....

// ekhane (function name => getInputFieldValueById && parameter name => inputFieldId)

//////// deposit and withdraw field section ////////
function InputFieldValueId(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}


/////// deposit and withdraw and balance total section ////////

function getTextElementValueById(textElementId) {
    const textElement = document.getElementById(textElementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}


// *** step-2:: normal bank er (step-4: get the previous deposit total) and (step-6: get current balance total) er replace e ei function boshabo
//

/////// total deposit and withdraw and balance  total section e innertext hishebe boshanor jonno ////////
function setTextElementValueById(textElementId, newValue) {
    const textElement = document.getElementById(textElementId);
    textElement.innerText = newValue;
}
