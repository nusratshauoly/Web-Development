
///////////////////// Module: 27-6: Get User deposit and set deposit total value /////////////////////

// ----------------- Tasks ---------------------

// step-1: add event listener to the deposit button
// step-2: get the deposit amount from the deposit input field
// step-2.1: also make sure to convert the input into a number by using a parseFloat ( input field e type of number 'string' hishebe dekhabe. tai add hobe na, add korte chaile pashapashi dekhabe tai (string) take parseFloat hishebe dekhabo (parseFloat) use korbo karon (.number) o deya lagte pare.)
// step-3: get the current deposit from total amount
// step-4: add numbers to set the total deposit
//step-4.1: ager deposit er shathe notun input er value add kore deposit e updated sum value rakhar jonno.
//step-4.2: set the deposit total: (deposit) input field er value ta set hobe (deposit $) section e
// step-5: get balance current total
//step-5.1  (balance) section e(deposit) er shathe add korar jonno money value.
// step-6: calculate current the total balance
// step-7: clear the deposit field



// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //console.log('deposit button clicked');
// step-2: get the deposit amount from the deposit input field
    // for input field use (.value) to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
//2.1. also make sure to convert the input into a number by using a parseFloat 
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(newDepositAmount);
    //console.log(typeof newDepositAmount);

// ------------------   Module: 27-7: Update deposit and balance and handle string add ------------------


// step-3: get the current deposit from total amount
// Note: for non-input(element other than input, textarea) use innerText to get the text
   
    const depositTotalElement = document.getElementById('deposit-total');
     // shudhu amount ta change hobe but ($) sign ta same thakbe ( const previousDepositTotal = depositTotalElement.innerText;)
    
    // 2.1(again) input field e type of number 'string' hishebe dekhabe. tai add hobe na, add korte chaile pashapashi dekhabe tai (string) take parseFloat hishebe dekhabo (parseFloat) use korbo karon (.number) o deya lagte pare.
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(depositTotal); 
    //console.log(typeof previousDepositTotal);
    


    
//  step-4: add numbers to set the total deposit 
    
    //step-4.1: ager deposit er shathe notun input er value add kore deposit e updated sum value rakhar jonno.
    const currentDepositTotal = previousDepositTotal + newDepositAmount;    

    //step-4.2: set the deposit total: (deposit) input field er value ta set hobe (deposit $) section e
    depositTotalElement.innerText = currentDepositTotal;

// step-5: get balance current total:
//step-5.1  (balance) section e(deposit) er shathe add korar jonno money value.
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6: calculate current the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

// set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    
//  step-7: clear the deposit field (value add howar por input field abar clear hoye jabe)
    depositField.value = '';

})


// // --------------- full code -----------------------

// ----------- please deposit section ------------

// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

// step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


 //////////////////////////////////////////
    
// ------------- Deposit section ---------------

// step-3: get the current deposit from total amount
// Note: for non-input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

//  step-4: add numbers to set the total deposit  
    const currentDepositTotal = previousDepositTotal + newDepositAmount;    
    //set the deposit total: 
    depositTotalElement.innerText = currentDepositTotal;
    
///////////////////////////////////////
// ------------- Balance Section ----------------

// step-5: get balance current total:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6: calculate current the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

// set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    
//  step-7: clear the deposit field (value add howar por input field abar clear hoye jabe)
    depositField.value = '';

})