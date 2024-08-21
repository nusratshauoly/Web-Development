// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log( 'player pressed', playerPressed)

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point!');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        // ---------------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        
        // // 2 .increase the score by 1
        // const newScore = currentScore + 1;

        // // 3. show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('dhurrr vaiya va apu...right key press koro');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // ----------------------------
        // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step -2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}



// ------------------------------------------------------------------------------------------------------------------------------





// // // 27-6: Change Home Screen to Playground By Click 

// // // create function for button (play now button from home screen)
// // function play() {
// //     // 1. hide the home screen. To hide the screen , add the class hidden to the home section.
// //     const homeSection = document.getElementById('home-screen');
// //     homeSection.classList.add('hidden');

// //     // 2. show the playground
// //     const playgroundSection = document.getElementById('play-ground');
// //     playgroundSection.classList.remove('hidden');
// // }

// // ------- 👆🏻 we could use this code in a function (common function) in (utilities.js)





// // 27-6: Change Home Screen to Playground By Click 
// //27-6:3. create function for button
// function play() {
//     // 28-6.4: hide everything show only the playground

//     //27-6:4. call the function (hideElementById) to hide home screen
//     hideElementById('home-screen');

//     // 28-6:3. hide the final score to play again
//     hideElementById('final-score');

//     //27-6:5. call the function (showElementById) to show playground screen
//     showElementById('play-ground');

//     // 28-6:5. reset score and life when starting play again everytime
//     setTextElementValueById('current-life', 5);
//     setTextElementValueById('current-score', 0);


//     //27-7:7. call the (continueGame) the start the game to play repeatedly
//     continueGame();
// }

// // 27-7: Build getRandom Alphabet function

// //27-7:5. after click the (play now) button the game will start and a random alphabet will generate and we have click the same alphabet without seeing the keyboard.
// function continueGame() {
//     //27-7:6. call getARandomAlphabet() function to generate a random alphabet and set it to a variable
//     const alphabet = getARandomAlphabet();
//     console.log('your random alphabet', alphabet); 

//     // 27-8: (recap) Random Alphabet and highlight Selected Alphabet
//     // 27-8:1. set randomly generated alphabet to the screen (show it)
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     currentAlphabetElement.innerText = alphabet;

//     // 27-8:3. calling (setBackgroundColorById) function for keyboard color on the (alphabet) which will appear in the screen from (27-7:1 - 27-7:6)
//     setBackgroundColorById(alphabet);
// }



// // 28-2: Get the key pressed and check right or wrong key pressed

// // 28-2:1. after start playing when the keyboard will appear and for pressing keyboard when player pressed the key (keyboard press related parameter always (event) hoy)
// function handleKeyboardKeyUpEvent(event) {
//     //28-1:1. when player pressed the key
//     const playerPressed = event.key;
//     console.log('Player Pressed', playerPressed);

//    // 28-7:4. stop the game if pressed 'Esc'
//     if(playerPressed === 'Escape'){
//         gameOver();
//     }


//     // 28-2:3. player expected to press the keyword
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     //28-2:3. alphabet k lowercase bananor jonno
//     const expectedAlphabet = currentAlphabet.toLowerCase();
//     // console.log(playerPressed, currentAlphabet);

//     // 28-2:4. check right or wrong key pressed : check matched or not (screen alphabet and player pressed alphabet matched or not)
//     if (playerPressed === expectedAlphabet) {
//         console.log('you get a point');

//         // ------------------------------

//         // // 28-4: update score and life based on right or wrong key press
//         // // 28-4:1. update score : get the current score
//         // const currentScoreElement = document.getElementById('current-score');
//         // const currentScoreText = currentScoreElement.innerText;
//         // const currentScore = parseInt(currentScoreText);
//         // console.log(currentScoreText);

//         // // 28-4:2. update score : increase the score by 1
//         // const newScore = currentScore + 1;

//         // // 28-4:3. show the updated score :
//         // currentScoreElement.innerText = newScore;

//         // -------------------------------


//         // 28-5:2. update score from(28-5:1)
//         const currentScore = getTextElementValueById('current-score');
//         // console.log(currentScore);
//         const updatedScore = currentScore + 1;
//         // 28-5:4. set the value
//         setTextElementValueById('current-score', updatedScore);


//         // 28-3: clear right key background and continue the game

//         // 28-3:1. if click the right key and continue to play again and click the next key
//         // console.log('you have pressed correctly', expectedAlphabet);

//         // 28-3:2. Start a new round : then previous expected keyword color should be gone function from(27-9, 27-9:1)
//         removeBackgroundColorById(expectedAlphabet);
//         continueGame();
//     }
//     else {
//         console.log('you missed. You lost a life');
//         // --------------------------------------
//         // // 28-4:4. get the current life number
//         // const currentLifeElement = document.getElementById('current-life');
//         // const currentLifeText = currentLifeElement.innerText;
//         // const currentLife = parseInt(currentLifeText);
//         // // 28-4:5. reduce the life count
//         // const newLife = currentLife - 1;
//         // // 28-4:6. display the updated life count
//         // currentLifeElement.innerText = newLife;
//         // ---------------------------------------

//         // 28-5:5. life score from(28-5:1)
//         const currentLife = getTextElementValueById('current-life');
//         const updatedLife = currentLife - 1;
//         setTextElementValueById('current-life', updatedLife);

//         // 28-6: implement play again and reset life and score
//         // 28-6:1. if life score become 0
//         if (updatedLife === 0) {
//             gameover();
//         }
//     }
// }
// // 28-2:2. capture keyboard key press overall keyboard er jekono key press korle
// document.addEventListener('keyup', handleKeyboardKeyUpEvent);


// // // 28-6:2. create a (game over) function if game is over go to the next page
// function gameover() {
//     hideElementById('play-ground');
//     showElementById('final-score');
//     // 28-7: Final score, clear previous alphabet and quit game
//     // 28-7:1. update final score : get the final score
//     const lastScore = getTextElementValueById('current-score');
//     console.log(lastScore);
//     setTextElementValueById('last-score', lastScore);

//     // 28-7:3. clear the last selected alphabet highlight
//     const currentAlphabet = getElementTextById('current-alphabet');
//     // console.log(currentAlphabet);
//     removeBackgroundColorById(currentAlphabet);
// }