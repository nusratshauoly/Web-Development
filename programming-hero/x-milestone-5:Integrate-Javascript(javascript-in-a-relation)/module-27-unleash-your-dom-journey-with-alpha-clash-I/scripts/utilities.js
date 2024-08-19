// 27-6: Change Home Screen to Playground By Click 


// common function to hidden content
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


// common function to show content
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//  // 27-8: (recap) Random Alphabet and highlight Selected Alphabet
// 27-8:2. 
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// 27-9: Module summary
// 27-9:1: removeBackgroundColorById
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}



// 27-7: Build getRandom Alphabet function

//generate a random alphabet
function getARandomAlphabet() {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    console.log(alphabets);

    // get a random index between 0 - 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
 
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    // (alphabet) k (alpha-clash.js) theke call korchi tai return korbo.
    return alphabet;
}
 
