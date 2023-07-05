// DOM Manipulation


// Event Listeners


// element.addEventListener("click", function);

// *** create alert in external way using (function) and (addEventListener) in (button 2).
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love Javascript');
};
buttonTwo.addEventListener('click', alertBtn);

// *** (Mouseover) using in third button (adding style)
const newBackgroundColor = document.querySelector('.box-3');
function changeBgColor(){
    newBackgroundColor.style.backgroundColor = 'blue';
};
newBackgroundColor.addEventListener('mouseover', changeBgColor)