// ----------------- generate pin -----------------
// Step - 2: kono number er length jante hole oi number er shathe (+ ' ') add korbo tahole tahole sheta number theke string hobe then jodi (4 digit) er number chai then (1000) diye (/) korlei bujha jabe.
function getPin() {
    const pin = generatePin();

    // 1. (string 4 digit er kina ta check korbo) ekhane a new number k string(' ') diye (+)add korbo and 4 diye (/)divide korbo to see its length, jodi 4 diye divide hoy then oi pin take return korbo or jodi false hoy ager function takei call korbo and new value generate korbo . evabe jotokkhon porjonto emon number na pabo jeta 4 diye divide hoy totokkhon ei loop choltei thakbe.
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        //2. jodi 4 digit na hoy then abar (getPin() k call kore dibo.) console.log('pin not 4 digit found', pin);
        return getPin();
    }
}

// Step - 1:  4 digit er random number pete hole (*10000)diye multiply korte hobe(Math.random()) k.
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

// step - 3: generate pin  button er id & addeventlistener add kora
document.getElementById('generate-pin').addEventListener('click', function(){
    //3. getpin function k call korbo random pin generate korar jonno
    const pin = getPin();
    //4. generate pin er j input field tar id declare korbo:  display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

// ---------------------- calculator -----------------------
/*
   Task :
   1. number gulo side by side input field e pront hobe
   2. 'C' click korle puro input field clear hoye jabe
   3. '<' click korle print kora digit theke lat er 1 ta digit kore delete hoye jabe.
*/

//  step - 4 : use event bubble to create calculator to do that give id='calculator' in a whole calculator body div and create document & addEventListener with function & id... & set a parameter named (event) cause it's button and button e click korle kono (event) create hobe..
document.getElementById('calculator').addEventListener('click', function (event) {
    //5. (event.target.value/innerText) dile & oi button e click korle oi field er html code full dekhabe. string hishhebe.
    const number = event.target.innerText;
    //6. calculator input field
    const typedNumberField = document.getElementById('typed-numbers');
    //7. input field tai (.value) boshabo
    const previousTypedNumber = typedNumberField.value;
    // 8. when number is not clicked (if 'C' and '<' is clicked)
    if (isNaN(number)) {
    // 9.'C' is clicked the input field will be empty/clear
        if (number === 'C') {
            typedNumberField.value = '';
        }
    // 10.'<' is clicked the last number will be removed
        else if (number === '<') {
    //11. string k remove korar jonno first e number gulo (split) korte hobe then last digit remove korar jonno (.pop) dite hobe 
            const digits = previousTypedNumber.split('');
            digits.pop();
    // 12. after remove remaining string gulo abar ekshathe korar jonno(.join) dite hobe
            const remainingDigits = digits.join('');
    //13. then (.join) korar por remaining digits guloke abar value hishebe show korbo 
            typedNumberField.value = remainingDigits;
        }
    }
    else {
    //14. number value gulo jate input field e string hishebe side by side boshe
        const newTypedNumber = previousTypedNumber + number;
    // 15. side by side boshe digits guloke abar value hishebe show korbo 
        typedNumberField.value = newTypedNumber;
        }
        
}) 
  // --------------------------------- submit button ------------------------------------
/*
   Task :
   1. submit button e click korle jodi calculator er value generate pin er shathe match hoy then alert e 'pin matched' dekhabe r na hole 'pin didn't match' dekhabe
*/

// step - 5 : In a submit button create document & addEventListener with function & id... & set a parameter named (event)
document.getElementById('verify-pin').addEventListener('click', function () {
// 16. (Generate Pin) er input field er shathe connect korate hobe submit button er tai input field er id (display-pin) nibo
    const displayPinField = document.getElementById('display-pin');
//17. input field tai (.value) dibo
    const currentPin = displayPinField.value;
//18. calculator er input field connect korbo submit button er shathe cause (generate pin) e jei random number ashbe shetai calculator field e print korte hobe and submit button e click korte hobe
    const typedNumberField = document.getElementById('typed-numbers');
//19. input field tai (.value) dibo
    const typedNumber = typedNumberField.value;


// jodi (if/else) er moddhe kono variable declare kori (const /let) diye tahole (else) er valriable (if) er moddhe j variable declare kora ache oikhane access pabe na or (if) er variable (else) er moddhe access pabe na. er jonno variable declare (if/else) er bahire korbo 
//20. submit button er shathe (pin-success) & (pin-failure) id connect korbo
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

// 21. jodi (Generate Pin) er random number and calcutor field er input same hoy and submit button e click kori then (print success) message show korbe and (print failure) message hide hoye jabe  
    if (typedNumber === currentPin) {
        pinSuccessMessage.style.display = 'block';
    // jokhon success message ashbe tokhon r failure message dekhabo na.
        pinFailureMessage.style.display = 'none';
    }
//22.  jodi (Generate Pin) er random number and calcutor field er input same na hoy and submit button e click kori then (print success) message hide korbe and (print failure) message show  korbe
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})

// ------------------------ ---------------------------------------- full code ------------------------------------------------------------------------------------------

// ----------------- generate pin -----------------
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

// ---------------------- calculator -----------------------
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})


  // --------------------------------- submit button ------------------------------------
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})