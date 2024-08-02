// event listener
const headerElement = document.querySelector('#header');
headerElement.addEventListener('click', (event) => {
    console.log(event);
});

headerElement.addEventListener('dblclick', (event) => {
    console.log(event);
});

headerElement.addEventListener('mousedown', (event) => {
    console.log(event);
});

headerElement.addEventListener('mouseup', (event) => {
    console.log(event);
});

headerElement.addEventListener('mouseenter', (event) => {
    console.log(event);
});

headerElement.addEventListener('mouseleave', (event) => {
    console.log(event);
});

headerElement.addEventListener('mouseover', (event) => {
    console.log(event);
});

headerElement.addEventListener('mouseout', (event) => {
    console.log(event);
});

headerElement.addEventListener('mousemove', (event) => {
    console.log(event);
});

// 
const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('keydown', (event) => {
    // input er shomoy element gulo pete hole ( console.log(event.target.value);) likhte hoy
    console.log(event.target.value);
    console.log(event);
});

inputElement.addEventListener('keyup', (event) => {
    console.log(event);
});

inputElement.addEventListener('keypress', (event) => {
    console.log(event);
});

inputElement.addEventListener('focus', (event) => {
    console.log(event);
});

inputElement.addEventListener('blur', (event) => {
    console.log(event);
});

inputElement.addEventListener('cut', (event) => {
    console.log(event);
});

inputElement.addEventListener('paste', (event) => {
    console.log(event);
});

inputElement.addEventListener('input', (event) => {
    console.log(event);
});

// 
const formElement = document.querySelector('form');

formElement.addEventListener('submit', (event) => {
    // form a submit korar por jate reload na hoy er jonno (event.preventDefault();) dibo
    event.preventDefault();

// kon element er upore event ta fire hocche er jonno (console.log(event.target);)
    console.log(event.target);
    console.log(event);
});