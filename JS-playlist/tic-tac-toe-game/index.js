// 1.
let boxes = document.querySelectorAll('.box');
// 2.
let resetBtn = document.querySelector('#reset-btn');
// 14.
let newGameBtn = document.querySelector('#new-btn');
// 15.
let msgContainer = document.querySelector('.msg-container');
// 16.
let msg = document.querySelector('#msg');

//3. first play start with payer0
let turn0 = true; // playerX, player0

//4. If those patterns match then first matching playar will win
let winPatterns = [
                        //  horizontal pattern
    [0, 1, 2],          //  [0, 1, 2]
    [0, 3, 6],          //  [3, 4, 5]
    [0, 4, 8],          //  [6, 7, 8]
    [1, 4, 7],          // vertical pattern
    [2, 5, 8],          //  [0, 3, 6]
    [2, 4, 6],          //  [1, 4, 7]
    [3, 4, 5],          //  [2, 5, 8]
    [6, 7, 8]           // diagonal pattern
];                      //  [0, 4, 8]
                        //  [2, 4, 6]


// whenever click (new game) or (reset) button a new game will start
const resetGame = () => {
    turn0 = true;
    //22. call the (enableboxes) function
    enableBoxes();
    //24. again hide the winner message container
    msgContainer.classList.add('hide');


}



// 5.  for appearing random (X & 0), add addEventListener to the (.box) button , to add addEventListener all boxes we need to use (forEach) in (boxes)...
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // // console.log('box was clicked');
      // when click the box a text(0 / X) content will appear in the box

      // 6.
        //  if (turn0) is true the value of box will be 0;
        if (turn0) {  //player0's turn
            box.innerText = "O";
            // for next play or round e jeno (0) na ashe er jonno (false) boshabo
            turn0 = false;
        }
      // 7.
        else {  //playerX's turn
            // 
          box.innerText = "X";
          
      // 8. (player0's turn) will come after (playerX's turn)
            turn0 = true;
        }
      //9. whenever we  write innerText to any button we cannot click that button again that's why we will disabled the button after click (won't change value when click after 1 time)
        box.disabled = true;

      //10. whenever we click the button we have to check that any winner can be seen , that's why (checkWinner) function can be called .
        checkWinner();
    });
});

//19. whenever any player win then all button will disabled so that other can not play so create a (disbleBoxes) function
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

//21. when the new game starts so that all the button get access
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        //23. to remove previous button access (X/0)
        box.innerText = "";
    }
}


//17. to show winner message create a (showWinner) function:
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    // css class theke hide(display:none) remove kore dibo
    msgContainer.classList.remove('hide');
    //20. whenever any player win then all button will disabled so that other can not play and call the (disableBoxes) function
    disableBoxes();
}


//11. create a (checkWinner) function (to check winner we have to check each winning pattern) and each three position have to be same (X / 0).
const checkWinner = () => {
    // we have to run loop in (winPatterns) array.
    for (let pattern of winPatterns) {
        // pattern er individual index ber korte hobe (index count start from 0 = 0{first index}, 1{second index}, 2{third index}) 
        // //console.log(pattern[0], pattern[1], pattern[2]);
        // boxes button e index check korbo and value print korar jonno (innerText) dibo. (winPatterns) number wise.
        /* // console.log(
            boxes[pattern[0]].innerText, //this is position 1
            boxes[pattern[1]].innerText, //this is position 2
            boxes[pattern[2]].innerText //this is position 3
        ); // */

        //12. we can set this in individual variable and get its value
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        //13. we have to check the three position (0, 1, 2) same or not. if 1 of the position do not value then it can not win that's why we have to put if else condition  if it is winning pattern
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // who will be the winner
                // //console.log('winner', pos1Val);
              //18. to show the winner message call a function (showWinner())
                showWinner(pos1Val);
            }
        }
    }
};

//25. when (new game & reset) button will be clicked (resetGame) function trigger/access hoye jabe
newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);



// ----------------------------------------------------------------------------- full code -------------------------
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// reset the game
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

// first start the play with player0
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    // to disable the button after click 1 time
    box.disabled = true;
    // keep track of the number of moves made in the game.
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

// when the game draw
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};


// disabled the button after click the button 1 time
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// when new game starts
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// when player wins (parameter e (winner) value pass korbo)
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// check the winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // position 1 e j value hobe shei winner hobe
        showWinner(pos1Val);
        return true;
      }
    }
  }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);