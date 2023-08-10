// ////////////// Module: 27-3: Add event listener and compare email password /////////////////////////

// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('button clicked'); (click korar por button click show kore kina dekhar jonno)

// step-2: get the email address inside the email input field
    // Note: always remember to use (.value) to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email); (click korar por email show kore kina dekhar jonno)

// step-3: get password inside password input field
    // s-3.a: set id on the HTML element
    // s-3.b: get the element
    // s-3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //console.log(password); (click korar por password show kore kina dekhar jonno) (or duita ekshathe evabeo likha jay) =>                           console.log(name, password);


// NOTE: step-4: DANGER: DO NOT VERIFY email password on the client side
// step-4: verify email and password and check whether valid user or not (valid / unvalid)
    if (email === 'sontan@baap.com' && password === 'secret') {

// -----------  Module: 27-4: Navigate to another page, Deposit, withdraw, Balance grid (window.location.href = 'bank.html'; alert('Cannot enter, forgot the password???'); then ------ (login page e 'sontan@baap.com' and 'secret' ei passwod dile (bank.html) page e niye jabe ----------------- //
        //console.log('valid user');
        window.location.href = 'bank.html';
    }
    else {
        //console.log('invalid user');
        alert('Cannot enter!!! forgot the password???');
    }

});