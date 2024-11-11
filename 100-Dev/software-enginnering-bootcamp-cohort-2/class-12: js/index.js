// add different background color

document.getElementById('purple').onclick = partyPurple;
document.getElementById('green').onclick = partyGreen;
document.getElementById('blue').onclick = partyBlue;

function partyPurple() {
    document.querySelector('body').style.backgroundColor = 'rgba(241, 63, 247,1)';
    document.querySelector('body').style.color = 'white';
}

function partyGreen() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 253, 81,1)';
    document.querySelector('body').style.color = 'white';
}

function partyBlue() {
    document.querySelector('body').style.backgroundColor = 'rgba(0, 254, 213, 1)';
    document.querySelector('body').style.color = 'white';
}


// ----------------- calculator ------------

// add a new button to minus 5 (-5)

let total = 0;

document.querySelector('#pumpkin').addEventListener('click', makeZero);

document.querySelector('#dominosPizza').addEventListener('click', jumanji);

document.querySelector('#zebra').addEventListener('click', add9);

document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2);


function makeZero() {
    total = 0;
    document.querySelector('#placeToPutResult').innerText = total;
}

function jumanji() {
    total = total + 3;
    document.querySelector('#placeToPutResult').innerText = total;
}

function add9() {
    total = total + 9;
    document.querySelector('#placeToPutResult').innerText = total;
}

function sub2() {
    total = total - 2;
    document.querySelector('#placeToPutResult').innerText = total;
}


// <!-- --------------- days of the week ------------- -->
// we will click the button and check if its the class day, weekend or boring day

document.querySelector('#check').addEventListener('click', check);

function check() {
    const day = document.querySelector('#day').value;
    // conditionals go there
    if (day === 'tuesday' || day === 'thursday') {
        alert('CLASS Day');
    }
    else if (day === "saturday" || day === "sunday"){
        alert("Weekendd");
    }
    else {
        alert("Boooorrrrrrriiiiinnnnggggg!!!!!");
    }
}


// to make it case insensitive or make it not case sensitive so that any capital or small letter will be accepted and put the result in dom

document.querySelector('#check').addEventListener('click', check);

const placeToSee = document.querySelector('#placeToSee');

function check() {
    const day = document.querySelector('#day').value.toLowerCase();
    if (day === 'tuesday' || day === 'thursday') {
        // alert('Class Day');
        placeToSee.textContent = 'Class Day';
    }
    else if (day === 'saturday' || day === 'sunday') {
        // alert("weekend");
        placeToSee.textContent = 'Weekend';
    }
    else {
        // alert("boorriinngg");
        placeToSee.textContent = 'Booring';
    }
}

// -------------------------------------------------------------------


// conditions
const pizza = "Dominos";

if (pizza === "papa johns") {
    console.log('Scram!');
}
else if (pizza === 'Dominos') {
    console.log('All abroad the train to flavor town ');
}
else {
    console.log('what r u doing with your life') ;
}

// multiple conditions
if (name === "Bruce" && parents === "Dead") {
    // turn off the bat signal
}

if (day === "saturday" || day === "sunday") {
    // it is the weekend
}