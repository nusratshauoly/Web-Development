// // --------------------- Module: 28-5: (semi-advanced) Common function to reduce code repeat: ----------------------
// //---------------------- Module: 28-6: (advanced) Share one function between two input field ---------------------
// // -------------------- Module: 28-7: (advanced) get and set element value using a function --------------------------

// // ------------- ekhaner function gulo niye (utilities.js) file e set korte hobe but jodi ei file thekei jete chai then (function name) select kore (f12/go to the definition) e click korlei (utilities.js) file e niye jabe. or (utilities.js) file e (function name) select kore (f12/go to the definition) e click korlei (deposit.js) file e niye jabe -------------

// // *** step-1:: normal deposit bank er (step-2: get deposit amount from the deposit input field) and (step-3: 3. clear the deposit input field after getting the value) er replace e ei function boshano hoise eki code bar bar repeat korar poriborte .....

// // ekhane (function name => getInputFieldValueById && parameter name => inputId)
// function getInputFieldValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     //return inputField;
//     //return inputFieldValueString;
//     return inputFieldValue; // jei variable ta shobar niche thakbe oitai return korbo ...
// } 


// // *** step-2:: normal bank er (step-4: get the previous deposit total) and (step-6: get current balance total) er replace e ei function boshabo
// //
// function getTextElementValueById(elementId) {
//     const textElement = document.getElementById(elementId);
//     const textElementValueString = textElement.innerText;
//     const textElementValue = parseFloat(textElementValueString);
//     return textElementValue;
// }

// // *** step-4 :: normal bank er (step-5:new deposit + previous deposit) er innertext boshanor jonno function create kote hobe
// function setTextElementValueById(elementId, newValue) {
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue;
// }




// *** step-1.5:: applying the function
/* 
    step-1.5: e ei 3 ta kaj korsi 
        1. get the element by id (add event listener to the deposit button)
        2. get the value from the element (get deposit amount from the deposit input field)
        3. convert string value to a number (convert string deposit amount to a number type)
*/
document.getElementById('btn-deposit').addEventListener('click', function(){
// ekhane input field e j new value dibo tar jonno upore function(getInputFieldValueById) k call korbo and parameter e id er name dibo
    const newDepositFieldAmount = getInputFieldValueById('deposit-field');


// *** step-2.5:: applying the function
/*
    step-2.5: e ei 3 ta kaj korsi
        1. get the previous deposit total by id
        2. get current balance total
*/
    const previousDepositTotal = getTextElementValueById('deposit-total');
    
// *** step-3:: calculate new deposit total (calculate (new deposit + previous deposit) total and set the value to the deposit total)
    const newDepositTotal = previousDepositTotal + newDepositFieldAmount;

// *** step-4.5: set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);


// ***** ----------------------- Balance text Section --------------------------------


// *** (step-2.6): From (step-2) get previous balance by using the function (after step-4.5)
    const previousBalanceTotal = getTextElementValueById('balance-total');

// *** step-5. calculate the new balance and set it to the balance total element
    const newBalanceTotal = previousBalanceTotal + newDepositFieldAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})