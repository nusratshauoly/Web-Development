// video: 70:
'use strict';

// 4. define the secret number out of the function first declare e random secret number...
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// 5. if we guess wrong each time the (score) point will decrease by 1.
let score = 20;

// // 4.1: set the secretRandom number in (?) (number class) section and show the secret number when player wins
//     document.querySelector('.number').textContent = secretNumber;

// 8. first set highscore always in 0
let highscore = 0;

// video - 73: handling click events

// 1. add event listener in (check button)
document.querySelector('.check').addEventListener('click', function () {
  // 2. above check button input section and convert the string into (Number)
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // 3. condition: If we/guess donot insert any number/out of (1 to 20) in the input field or give the correct secretnumbers or greater/smaller number
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    //4.2: when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    // 4.1: set the secretRandom number in (?) (number class) section and show the secret number when player wins
    document.querySelector('.number').textContent = secretNumber;

    //6. css : changing background color  and width of (?) section using dom when wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    //6.1: change css
    document.querySelector('.number').style.width = '30rem';

    // 8.1: highscore set when the player wins and set
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //4.3 when guess is too high
  } else if (guess > secretNumber) {
    // to fixed a limit so that below 0 point don't show
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      // 5.1: decrease the score by 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //4.4 when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      //5.2: decrease the score by 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // document.querySelector('.message').textContent = '📉 Too low!';
    // // 5.2: decrease the score by 1
    // score--;
    // document.querySelector('.score').textContent = score;
  }
});

///////////////////////////////////////

// 7. after click (again button) every think back normal again
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
// 7.1:
document.querySelector('.again').addEventListener('click', function () {
  // 7.2:
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // 7.3:
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // 7.4:
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// ------------------------------ full code without comment --------------------------------
('use strict');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//  document.querySelector('.number').textContent = secretNumber;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';

    //4.2: when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // 8.1: highscore set when the player wins and set
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //4.3 when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //4.4 when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      //5.2: decrease the score by 1
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // document.querySelector('.message').textContent = '📉 Too low!';
    // score--;
    // document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// -----------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
// ----------------------------------- full code (using dry method) ---------------------------------------
('use strict');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // -------------- duplicate if/else condition code -----------------
  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
