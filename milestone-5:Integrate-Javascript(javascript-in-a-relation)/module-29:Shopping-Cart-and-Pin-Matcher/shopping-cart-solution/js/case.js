
// Module:29-1: Module Overview and shopping cart increase case count:

/*
1. add event listener to the case plus button
2.get the value inside the case number field(input field)
3. convert the number to an integer
4.calculate the new case number
5.set the value to the case number field

*/

// Module:29-2: shopping cart handle decrease and update price:

// ------------------------- using function (to reduce duplicate code of step - 1 & 2) ----------------
// STEP - 3 : *** (for add item and for remove item) er every line is same shudhu (const newCaseNumber = previousCaseNumber + 1;) and (const newCaseNumber = previousCaseNumber - 1;) ei line chara. and shob line jehetu repeat kortese tai eta (DRY => don't repeat yourself) method break kortese. er jonno function use korbo jate same code bar bar likha na lage. ekhane  parameter(isIncrease) nilam condition boshanor jonno (isIncrease) true or false hobe means increase or decrease korbo kina.
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
// step - 6: jodi (parameter = isIncrease (true) hoy then 1 kore barbe r (false) hole 1 kore kombe)
    // ekhane (newCaseNumber) e (let) diye declare korsi cause er value change hobe (+ or -) korle. r (const) diye kirle change kora jabena tai const dibo na. 
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

// step - 3 : er baki tuku 
    caseNumberField.value = newCaseNumber;

// step - 6.5:
    return newCaseNumber;
}

// step - 9: (for price update and decrease) (step-7 & step-8) same content tai function likhe ekshathe anbo jate DRY method apply korte pari
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}


// step - 1: ------------- for add item  / plus item ---------------
document.getElementById('btn-case-plus').addEventListener('click', function () {
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;

    // // (input field e jei value e nei sheta string hishebe thake tai string k number e convert korte hobe er jonno parseInt use korte hobe) we have to buy full case , we can not buy half of case so we have to give (parseInt)
    // const previousCaseNumber = parseInt(caseNumberString);

    // // each time 1 kore increase hobe
    // const newCaseNumber = previousCaseNumber + 1;

    // // newCaseNumber o ekta input field tai (.value) use korbo
    // // caseNumberField er moddhe new decrease value gulo show korbe
    // caseNumberField.value = newCaseNumber;


// step - 4 (calling the step - 3: function) just khali function ta ekhane call kore dibo with (true) so that the number increase
// step - 6.6: declaring newCaseNumber
    const newCaseNumber = updateCaseNumber(true);

// step - 7: (case er amount increase korar shathe shathe price o add korar jonno) kotota case er jonno koto taka lagbe sheta ber korar jonno (* 59 cause eta default vabe deya thake 1 ta case er price) 
    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

// step - 10: function call korbo price baranor jonno from (step - 9)
    updateCaseTotalPrice(newCaseNumber);

// step - 12: called the subtotal function call from (common.js = step-2/ phone.js = step-10 theke neya)
    calculateSubTotal();
})

// step - 2:  --------------- for remove / minus item ----------------
document.getElementById('btn-case-minus').addEventListener('click', function () {
    //     const caseNumberField = document.getElementById('case number-field');
    //     const caseNumberString = caseNumberField.value;
    //     const previousCaseNumber = parseInt(caseNumberString);

    // //  each time 1 kore decrease hobe
    //     const newCaseNumber = previousCaseNumber - 1;

    // // newCaseNumber o ekta input field tai (.value) use korbo
    // // caseNumberField er moddhe new decrease value gulo show korbe
    //    caseNumberField.value = newCaseNumber;


// step - 5 (calling the step - 3: function) just khali function ta ekhane call kore dibo wth (false) so that the number do not increase.
// step - 6.7 : declaring newCaseNumber
    const newCaseNumber = updateCaseNumber(false);

// step - 8: (case er amount decrease korar shathe shathe price o minus korar jonno) kotota case er komanor(minus) korar jonno koto taka komate lagbe sheta ber korar jonno (* 59 diye korbo cause eta case er price) 
    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

// step - 11: function call korbo price komanor jonno from (step - 9) : ekta function er vitor value tokhon e pabe jodi parameter e value pass kore dey... ekhane (step- 9) er parameter e (newCaseNumber) parameter pass korsi
    updateCaseTotalPrice(newCaseNumber);

// step - 12.5: called the subtotal function call from (common.js = step-2/ phone.js = step-10 theke neya)
    calculateSubTotal();
})


// ---------------------------------- full code ----------------------------------------


function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
})
