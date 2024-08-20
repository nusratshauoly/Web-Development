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

//27-7:5. after click the (play now) button the game will start and a random alphabet will generate and we have click the same alphabet without seeing the keyboard.
function continueGame() {
    //27-7:6. call getARandomAlphabet() function to generate a random alphabet and set it to a variable
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet); 

    // 27-8: (recap) Random Alphabet and highlight Selected Alphabet
    // 27-8:1. set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // 27-8:3. calling (setBackgroundColorById) function for keyboard color on the (alphabet) which will appear in the screen from (27-7:1 - 27-7:6)
    setBackgroundColorById(alphabet);
}


// 27-6: Change Home Screen to Playground By Click 
//27-6:3. create function for button
function play() {
    //27-6:4. call the function (hideElementById) to hide home screen
    hideElementById('home-screen');
    //27-6:5. call the function (showElementById) to show playground screen
    showElementById('play-ground');
    //27-7:7. call the (continueGame) the start the game to play repeatedly
    continueGame();
}


// 28-2: Get the key pressed and check right or wrong key pressed

// 28-2:1. after start playing when the keyboard will appear and for pressing keyboard when player pressed the key
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    // 28-2:3. user expected to press the keyword
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, currentAlphabet);

    // 28-2:4. check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
    }
    else {
        console.log('you missed. You lost a life');
    }
}
// 28-2:2. capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);