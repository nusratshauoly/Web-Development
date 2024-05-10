// ---------- event handling ------------
let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log("btn1 is clicked");
    let a = 25;
    a++;
    console.log(a);  // will print 26.
};

// -------- from index.html (onmouseover) --------
let box = document.querySelector('div');
box.onmouseover = () => {
    console.log("you are inside div");
}

// ------- using (event) in onclick function parameter ------------

let btn2 = document.querySelector('#btn1');
btn2.onclick = (event) => {
    console.log(event);
    console.log(event.type); // kon type er event hoyeche
    console.log(event.target); // kothay event hoyeche
    console.log(event.clientX, event.clientY);  // screen er upor kon position e ache 
}; 

//  ------------ using (event) in mouseover function parameter
let box1 = document.querySelector('div');
box1.onmouseover = (event) => {
    console.log("you are inside div");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
}

// ekta element er jonno 1 bar e event handle korte parbo r jodi 1 barer beshi kori tahole jeta last e thakbe shetar event handler er output e ashbe.

//----------------------------------------------------------------------------------------

//  ------------- event listener -----------
// ekta element er jonno joto bar icche event listener kora jabe element er function er vitore. (this is better than event handler)

let btn3 = document.querySelector('#btn1');
btn3.addEventListener("click", () => {
    console.log("button was clicked - handler 1");
});

// can write many eventlistener and inside eventlistener can write (event) as an argument
btn3.addEventListener("click", (event) => {
    console.log("button was clicked - handler 2");
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
});

// if we think that we will remove element from future then we have save it inside a variable and pass this variable in the eventlistener function
const handler3 = () => {
    console.log("button was clicked - handler 3");
}
btn3.addEventListener("click", handler3);



// ****  can remove element from event listener then callback reference should be the same
// if we want to remove handler 3 we have to add (removeEventListener) and pass the variable.
btn3.removeEventListener("click", handler3);

//----------------------------------------------------------------------------------

//  Practice
// Question - 1: create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.

// // -------------------- 1 type solution --------------------------
let modeBtn = document.querySelector('#mode');
let currMode = 'light'; // currentmode light dile button click korar por black hobe. 

modeBtn.addEventListener('click', () => {
    if (currMode === 'light') {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})


//  ------------------- 2 type solution -------------------
let modeBtn = document.querySelector('#mode');
let body = document.querySelector('body');

let currMode = 'light'; // currentmode light dile button click korar por black hobe. 

modeBtn.addEventListener('click', () => {
    if (currMode === 'light') {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        
    }
    console.log(currMode);
});