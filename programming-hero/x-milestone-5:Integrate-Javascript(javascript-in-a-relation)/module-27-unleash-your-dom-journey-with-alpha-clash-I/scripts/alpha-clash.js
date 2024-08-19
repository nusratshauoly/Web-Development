// // 27-6: Change Home Screen to Playground By Click 

// // create function for button (play now button from home screen)
// function play() {
//     // 1. hide the home screen. To hide the screen , add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // 2. show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

// ------- 👆🏻 we could use this code in a function (common function) in (utilities.js)



// 27-7: Build getRandom Alphabet function

// after click the (play now) button the game will start and a random alphabet will generate and we have click the same alphabet without seeing the keyboard.
function continueGame() {
    // call getARandomAlphabet() function to generate a random alphabet and set it to a variable
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet); 

    // 27-8: (recap) Random Alphabet and highlight Selected Alphabet
    // 27-8:1. set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // 27-8:3. set background color
    setBackgroundColorById(alphabet);
}


// 27-6: Change Home Screen to Playground By Click 
// create function for button
function play() {
    // call the function (hideElementById) to hide home screen
    hideElementById('home-screen');
    // call the function (showElementById) to show playground screen
    showElementById('play-ground');
    // call the (continueGame) the start the game to play repeatedly
    continueGame();
}