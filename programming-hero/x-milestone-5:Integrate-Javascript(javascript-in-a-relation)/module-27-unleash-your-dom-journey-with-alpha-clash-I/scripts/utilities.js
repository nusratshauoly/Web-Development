// 27-6: Change Home Screen to Playground By Click 

//27-6:1. common function to hidden content
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


//27-6:2. common function to show content
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//  // 27-8: (recap) Random Alphabet and highlight Selected Alphabet
// 27-8:2. set the background color of keyboard word which will apper in the screen
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// 27-9: Module summary
// 27-9:1: removeBackgroundColorById from keyboard which  will appear on the screen              
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}


// 27-7: Build getRandom Alphabet function

//27-7:1. generate a random alphabet
function getARandomAlphabet() {
    //27-7:2. get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    //27-7:3. get a random index between 0 - 25
    const randomNumber = Math.random() * 25;
    // (Math.round() => make fraction number to a full number)
    const index = Math.round(randomNumber);
 
    //27-7:4. (alphabet) from (alpha-clash.js): to get the alphabet in index number
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    // (alphabet) k (alpha-clash.js) theke call korchi tai return korbo.
    return alphabet;
}
 

// 28-5: Recap get and set score of life using function
// 28-5.1: update score

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

// 28-5:2. set the updated score as innerText value
function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


// 28-7:2. 
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}