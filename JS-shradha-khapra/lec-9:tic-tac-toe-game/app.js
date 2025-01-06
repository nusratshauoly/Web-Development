let boxes = document.querySelectorAll('.box');
//  horizontal pattern
    //  [0, 1, 2]
    //  [3, 4, 5]
    //  [6, 7, 8]
    // vertical pattern
    //  [0, 3, 6]
    //  [1, 4, 7]
    //  [2, 5, 8]
    // diagonal pattern
    //  [0, 4, 8]
    //  [2, 4, 6]

let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
    
let turn0 = true;
let count = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    count = 0;
    //enableBoxes();
    msgContainer.classList.add('hide');
}
