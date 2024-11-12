// condition
const pizza = "Dominos";

if (pizza === 'Papa Johns') {
    console.log('Scram!!');
}
else if (pizza === "Dominos") {
    console.log("All abroad the train to flavor town");
}
else {
    console.log("What r u even doing with your life!");
}


// double condition
if (name === "Leon" && status === "Ballin") {
    // wink at camera
}

// 
if (day === 'Saturday' || day === 'Sunday') {
    // ti is the weekend
}


// day of te week
document.querySelector('#check').addEventListener('click', check);

function check() {
    const day = document.querySelector('#day').value.toLowerCase();

    if (day === 'tuesday' || day === 'thursday') {
        console.log('you have class');
    }
    else if (day === 'saturday' || day === 'sunday') {
        console.log('Its a weekend');
    }
    else {
        console.log('Boring');
    }
}


// <!-- --------------- angry parent simulator -------------------- -->

document.querySelector('#yell').addEventListener('click', run);

function run() {
    const fName = document.querySelector('#firstName').value;
    const fMidName = document.querySelector('#firstMiddle').value;
    const lMidName = document.querySelector('#lastMiddle').value;
    const lName = document.querySelector('#lastName').value;

    // old way to put the names into the DOM
    // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

    // Add what you should be doing - conditionals go here
    // new way to put the names into the DOM
    document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`;
}

    // ---- another way (to a audio speech of the output)------
    const synth = window.speechSynthesis;
    document.querySelector('#yell').addEventListener('click', run);


    function run() {
        const fName = document.querySelector('#firstName').value;
        const fMidName = document.querySelector('#firstMiddle').value;
        const lMidName = document.querySelector('#lastMiddle').value;
        const lName = document.querySelector('#lastName').value;

        const yellText = `${fName} ${fMidName} ${lMidName} ${lName}`;

        document.querySelector('#placeToYell').innerText = yellText;

        let yellThis = new SpeechSynthesisUtterance(yellText);

        synth.speak(yellThis);
    }


    // ------------- Pseudo Code ---------------

//  -------- A temperature converter (celius to fahrenheit)  ---------
    
// write your pseudo code first! (think through the steps that have to happen for that conversion to happen)

//  0 -> 32 (celius to fahrenheit)
document.querySelector('#convert').addEventListener('click', convert);

function convert() {
    //  step 1: need the value that is in celcius
    let temp = document.querySelector('#celcius').value;
    //  step 2: convert from celcius to fahrenheit
    temp = temp * 9 / 5 + 32;
    //  step 3: show it
    document.querySelector('#placeToConvert').innerText = temp;
}



// --------------------- bachelor code ---------------------

// 1.

document.querySelector('#finalRose').addEventListener('click', hide);

function hide() {
    document.querySelector('#claire').style.display = 'none';
    document.querySelector('#sharleen').style.display = 'none';

}

// 2. --------------------
const andi = document.querySelector('#andiImage');
const claire = document.querySelector('#claireImage');
const nikki = document.querySelector('#nikkiImage');

document.querySelector('#andiNext').addEventListener('click', andiNext);
document.querySelector('#claireNext').addEventListener('click', claireNext);
document.querySelector('#nikkiNext').addEventListener('click', nikkiNext);

function andiNext() {
    claire.classList.add('hidden');
    nikki.classList.add('hidden');
    andi.classList.toggle('hidden');
}

function claireNext() {
    andi.classList.add('hidden');
    nikki.classList.add('hidden');
    claire.classList.toggle('hidden');
}

function nikkiNext() {
    andi.classList.add('hidden');
    claire.classList.add('hidden');
    nikki.classList.toggle('hidden');
}

// 3. 
const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(click) {
    if (click.target.classList.contains('rose')) {
        document.querySelector('#nikkiClick').classList.toggle('hidden');
    }
    else {
        alert("Wrong!");
    }
}