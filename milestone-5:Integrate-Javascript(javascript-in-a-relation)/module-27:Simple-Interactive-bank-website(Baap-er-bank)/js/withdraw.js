// 1. add event handler with the withdraw button
// 2. get the withdraw amount from the withdraw input field
// 2.5. also make sure to convert the input into a number by using a parseFloat
// 3. Get previous withdraw total
// 4.calculate total withdraw amount
// 4.5. set total withdraw amount
// 5. get the previous balance total
// 6. calculate new balance total
// 6.5: set the new balance total
// 7. clear the input field

// 8. **** jodi empty string / abc type value dei then (withdraw and balance) section e (NaN) dekhay eta fix korar jonno...

//  step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //console.log('withdraw button clicked');

//step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');

// ------ step-7.1: clear er amount ta amra already 1ta varible e niye nisi tai ei (withdrawField er value) take condition er age boshaye dite pari ----------
    const newWithdrawAmountString = withdrawField.value;

// step-2.5. also make sure to convert the input into a number by using a parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// step- 8. **** jodi empty string / abc type value dei then (withdraw and balance) section e (NaN) dekhay eta fix korar jonno...
   // console.log(newWithdrawAmount);


//jekono valid invalid value input e enter korar por input field ta clear howar jonno. clear er amount ta amra already 1ta varible e niye nisi tai ei code variable er niche likhbo
    
// step-7: clear the input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }



// step-3: Get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log(previousWithdrawTotal);


    // ---- cause of remove step-4 from here ------- beshi amount withdraw korte chaile total balance er cheye ----------(withdraw total take update kortesi ei step 4 e.tai jodi withdraw money(balance) er cheye beshi dei then alert ashleo shei withraw money value ta(withdraw) section e dekhabe tai ei step ta condition er pore likhbo cause jodi condition true hoy tahole r update korbena money value.r jodi false hoy tahole chole jabe mane value show korbe then condition er vitor o dhukbena and return o korbena.
    
// // step-4: calculate total withdraw amount
//     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// // step- 4.5. set total withdraw amount
//     withdrawTotalElement.innerText = currentWithdrawTotal;

// step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //console.log(previousBalanceTotal);



 // ---------- step-7.1: clear er amount ta amra already 1ta varible e niye nisi tai ei (withdrawField er value) take condition er age boshaye dite pari ---------
// // step-7:
//     withdrawField.value = '';

// ----------- Module: 27-9: Module Summary and Overall Project Overview: ------------//
// validation check when withdraw more money than deposited money
    
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Your Bank doesn't have sufficient Balance");
//  ekhane condition ta function er vitore. function oi jaygay stop korte chaile condition er vitor return kore dibo.
        return;
    }


//---- cause of add step-4 here ------- beshi amount withdraw korte chaile total balance er cheye ----------(withdraw total take update kortesi ei step 4 e. tai jodi withdraw money (balance) er cheye beshi dei then alert ashleo shei withraw money value ta (withdraw) section e dekhabe tai ei step ta condition er pore likhbo cause jodi condition true hoy tahole r update korbena money value.r jodi false hoy tahole chole jabe mane value show korbe then condition er vitor o dhekbena and return o korbena.
    
// step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// step- 4.5. set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    

// ------------------------------------------------- //


// step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
// step-6.5: set the new balance total
    balanceTotalElement.innerText = newBalanceTotal;
    
    
    
// // step-7:
//     withdrawField.value = '';

})





// // -------------------- full code ---------------------

// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {

// step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString); 

// step-7: clear the input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }

// step-3: Get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

// step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


// step-5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
       if (newWithdrawAmount > previousBalanceTotal) {
        alert("Bank doesn't have sufficient money");
        return;
       }



// step-6: calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

