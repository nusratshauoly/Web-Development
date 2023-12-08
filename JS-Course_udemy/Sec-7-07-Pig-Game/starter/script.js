'use strict';

// Selecting Elements:
// 1. for the first player id (normally use queryselector)
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
// 2. for the second player id
const score1El = document.getElementById('score--1');

// 2.1: current score for players
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

//3. for the dice
const diceEl = document.querySelector('.dice');
//5. for rolling dice
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// 15. inside the (step -13) init function variables will not run in the outside of init function that's why we have declare them here again
let scores, currentScore, activePlayer, playing;

// //* 4. Starting Condition: set the first player score to 0
// score0El.textContent = 0;
// score1El.textContent = 0;
// // *  4.1. we have to hide the dice in the start of game (creating a hidden class and add that hidden class here at the beginning.)
// diceEl.classList.add('hidden');
// // * 6.3: when every time dice rolled then it will store the the current number then current score need to be store somewhere (this can not be store in (6) function cause then each time will click the button the current score will be 0)
// // * the two players position will be (0 and 1).
// const scores = [0, 0];
// let currentScore = 0;
// // * 6.3.0: we need to know which player is the active player(which player is playing) when dice rolled (it will hold 0 if the current player is player0 and hold 1 if  player1 plays)
// let activePlayer = 0;
// // * 8. set a boolean value when playing is true and when finish the game playing is false
// let playing = true;

// 13. to reset the game again we have set everything in 0 and (step-12 & 4,4.1,6.3,6.3.0,8) will be set in this init(initial function)
const init = function () {
  // 16. since we declare these variable with let in(step 15) , so we do not need to declare with let again here.
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // set the current total score to 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // to hide the dice when reload and setting the new game
  diceEl.classList.add('hidden');
  // to remove black background of a winner
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // 12.1 : player0 will always be the first/active player
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// 14. first: when we load the page on the first time everything will be 0 & when click (new game) button everything will be 0. and for that we have to call (init) function
init();

// * 7.1.2: (6.3.5 - 6.3.7) & 7.2 condition will be same that's why same code put in a function:
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// 6: rolling dice functionality: rolling the dice by clicking (Roll Dice) button
btnRoll.addEventListener('click', function () {
  // 9: (6.1 - 6.3.6) will run if the only play
  if (playing) {
    // 6.1: generating a random dice roll (each time rolled a dice generate a new random numbers)
    const dice = Math.trunc(Math.random() * 6) + 1;
    //console.log(dice);
    // 6.2: Display dice (remove the hidden class of dice that we add before)
    diceEl.classList.remove('hidden');
    // 6.2.1: change the src of image in image so that when a random number appers then the same of  random number appear
    diceEl.src = `dice-${dice}.png`;

    // 6.3.1: check for rolled 1 : if true, switch to next player : (if a dice is not 1 then add score in the current score else dice 1 come then switch to the next player)
    if (dice !== 1) {
      // 6.3.2: Add dice to current score
      currentScore += dice;
      // 6.3.4 : we will actually know who is the current/active player
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // 6.3.3: from (2.1) => store the current score after rolling the dice
      //current0El.textContent = currentScore; //((change later))
    } else {
      // // 6.3.5: switch to next player : (when the dice === 1 then the current score will be 0 again and it switch the next player and the background color will be white to the actie player)
      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // // 6.3.6: if dice roll 1 then current score will be 0.
      // currentScore = 0;
      // // 6.3.7: change the background color to white when then player is active.
      // player0El.classList.toggle('player--active');
      // player1El.classList.toggle('player--active');
      switchPlayer();
    }
    // 9.1: end bracket
  }
});

// 7. click hold button and the score will transfer into my global score
btnHold.addEventListener('click', function () {
  // 10. if the player is playing then
  if (playing) {
    // console.log('Hold button');
    // 7.1. Add current score to active player's score : (here [activePlayer] means when then player0 play it will store player0's current score and when player1 play, store player 1's score)
    scores[activePlayer] += currentScore;
    //console.log(scores[activePlayer]);
    // *  example here:
    //scores[1] = scores[1] + currentScore;
    // 7.1.1: display the total score(when it player 0 it will show current score of 0 , and when it is player 1, it will show current score of 1):
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 7.2. check score if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // 7.3. finish the game
      // 8.1: when playing is finish
      playing = false;
      // 11. to remove the dice after playing
      diceEl.classList.add('hidden');
      ////
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--winner');
    } else {
      // 7.4. (from 7.1.2) Switch to the next player
      switchPlayer();
    }
    // 10.1: finish the playing by giving a closing tag
  }
});

// 12. resetting the new game
// 17. call the init function here
btnNew.addEventListener('click', init);
// {
// score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent = 0;
// current1El.textContent = 0;
// // to remove black background of a winner
// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// // 12.1 : player0 will always be the first/active player
// player0El.classList.add('player--active');
// player1El.classList.remove('player--active');
//});

/* -----------------------------------------------------------------------------------------------------------------
--------------------------------------------------- Full code ------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------*/
('use strict');

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions or reset the new game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // remove player winner and active both player when starting / restarting a new game
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
// call the init function means click the newgame or start the game.
init();

// when switching the next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //the value of activePlayer. If activePlayer is 0, it becomes 1, and if it's 1, it becomes 0.
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// when a active player starts playing
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player (when a dice value 1 comes)
      switchPlayer();
    }
  }
});

// event listener function calling when restart the new game
btnNew.addEventListener('click', init);
