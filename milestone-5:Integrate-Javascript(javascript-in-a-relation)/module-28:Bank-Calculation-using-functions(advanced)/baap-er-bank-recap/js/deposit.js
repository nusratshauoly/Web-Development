// -------------- Module: 28-2: (recap) Get User deposit and set deposit total value-------------
// To check the page is working : console.log('deposit.js');

/* list of Task:
1: add event listener to the deposit button
2: get deposit amount from the deposit input field
2.5: convert string deposit amount to a number type
3. clear the deposit input field after getting the value
4. get the previous deposit total
5.calculate (new deposit + previous deposit) total and set the value to the deposit total
6. get current balance total
7. calculate the new balance and set it to the balance total element
*/


// --------- your deposit section ---------

// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function() {
// step-2: get deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');

    // input/textarea field e text nite hole (.value) dite hoy.
    const newDepositAmountString = depositField.value;
// step-2.5: convert string deposit amount to a number type
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmount);

// step-3: clear the deposit input field after getting the value
    depositField.value = '';
    // if give unvalid number
    if (isNaN(newDepositAmount)) {
        alert('Enter a valid Number');
    }



// ----------- Deposit section ---------
    
// step-4: get the previous deposit total
    const depositTotalElement = document.getElementById('deposit-total');

    //(input/textarea) na hole text nite hole (.innerText) dite hoy.
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-5: calculate (new deposit + previous deposit) total and set the value to the deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

// ------------- Balance section --------------
// step-6. get current balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-7. calculate the new balance and set it to the balance total element
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})