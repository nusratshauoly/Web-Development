
// ------------------------------------
// event listener

let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', () => {
    console.log('button1 was clicked - handler 1');
});

/* here this is event handler inside event listener (
    ,() => { 
    console.log('button1 was clicked');
}
)
*/

btn1.addEventListener('click', () => {
    console.log('button1 was clicked 2 - handler - 2');
});

/*
btn1.addEventListener('click', () => {
    console.log('button1 was clicked 3 - handler - 3');
});
*/

btn1.addEventListener('click', () => {
    console.log('button1 was clicked 4 - handler - 4');
});

// inside event listeners we can insert event object as an argument
btn1.addEventListener('click', (e) => {
    console.log('button1 was clicked 2');
    console.log(e);
     console.log(e.type);
})

// -----------------

// just how we add event listener , we can also remove event listener
node.removeEventListener(event, callback);// this callback are we want to remove.
// whenever we want to remove the event handler should be same so that we can remove this from memory and to remove we have to store this event handler in a variable
// we want to remove 3rd button

const handler3 = () => {
    console.log('button1 was clicked 3 - handler - 3');
}
// add event listener
btn1.addEventListener('click', handler3);
// remove event listener
btn1.removeEventListener('click', handler3);



// Practice Problem: Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
// {when we go 1 state to (another), and again return (another) state to 1 state this is called toggling / toggle}.

