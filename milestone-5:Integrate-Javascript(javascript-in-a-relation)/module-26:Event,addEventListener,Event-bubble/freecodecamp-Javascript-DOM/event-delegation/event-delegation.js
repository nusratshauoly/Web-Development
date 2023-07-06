// DOM Manipulation




// Event delegation




/* It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.

*** It allows users to append a SINGLE event listener to a parent element that adds it to all of its present =>(it allows users to append a single event listener to our parent element that adds it to all of its present children and as you can  see this is clear benefits ranging from code quality as well as code maintenance because instead of having all those lines of code in the previous example where we attached an event listener to each of the list items.) if we click the button it will it will show background grey, it will print in console (football clicked!); with delegation and using less code then adding style separately.

*** it will same for every button 

*** we will add (addEventListener) in (ul)
*/
//--------- football -------------
// football click korar por j change ashbe, (querySelector) dibo cause whole(ul) er vitor (li) select korbo tai.
document.querySelector('#football')?.addEventListener('click', function (e) {
    console.log('football is clicked');

    // click korar por background color change howar jonno
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});

//--------- basketball -------------
// football click korar por j change ashbe, (querySelector) dibo cause whole(ul) er vitor (li) select korbo tai.
document.querySelector('#basketball')?.addEventListener('click', function (e) {
    console.log('basketball is clicked');

    // click korar por background color change howar jonno
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});


//--------- boxing -------------
// football click korar por j change ashbe, (querySelector) dibo cause whole(ul) er vitor (li) select korbo tai.
document.querySelector('#boxing')?.addEventListener('click', function (e) {
    console.log('boxing is clicked');

    // click korar por background color change howar jonno
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});


//--------- tenis -------------
// football click korar por j change ashbe, (querySelector) dibo cause whole(ul) er vitor (li) select korbo tai.
document.querySelector('#tennis')?.addEventListener('click', function (e) {
    console.log('tennis is clicked');

    // click korar por background color change howar jonno
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});


//--------- golf -------------
// football click korar por j change ashbe, (querySelector) dibo cause whole(ul) er vitor (li) select korbo tai.
document.querySelector('#golf')?.addEventListener('click', function (e) {
    console.log('golf is clicked');

    // click korar por background color change howar jonno
    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'lightgrey';
    }
});
////////////////////////////////////////////////////////////////////////


// using event delegation

// first step of the meaning of delegation 

/*
*** It allows users to append a SINGLE event listener to a parent element that adds it to all of its present descendants =>(it allows users to append a single event listener to our parent element that adds it to all of its present children and as you can  see this is clear benefits ranging from code quality as well as code maintenance because instead of having all those lines of code in the previous example where we attached an event listener to each of the list items we now have it all inside one event listener here, now we also improved our performance because having more events in our code will take up a lot of memory and using event delegation we're going to save a ton on memory which again will vastly improve our performance inside of our projects ) if we click the button it will it will show background grey, it will print in console (football clicked!); with delegation and using less code then adding style separately.
*/



// **** to use event delegation remove all the code before using (addEventListener)

/* when we adding background color separately we have to add more code separately but we can write less code by using (event delegation)

//  instead of attaching the eventlisteners directle to each of the list items here we can delegate the listening to the parent which is the (ul) here which has the id of sports so that when the li is clicked the listener of the parent element catches the bubbling event and performs our task which change the color of our background to lightgray when we clicked one of the boxes and also showcased some text inside of our console here.
*/
// using event delegation (our target is the (li) items which has the id attribute which all of them do whichever one that we click on will display that specific sport + extra bit of text here of is clicked)
document.querySelector('#sports')?.addEventListener('click', function (e) {
    console.log(e.target.getAttribute('id') + ' is clicked');


// *** ow all of this working because we've attached that one event listener to the parent element which catches the bubbling event and then performs our task which we've written in here.

//  now if we want to change the background color when we click ,
const target = e.target;

if (target.matches('li')) {
    target.style.backgroundColor = 'lightgrey';
}

})



//  ////// 2nd step of the meaning of delegation /////
/*
**** anow another crutial benefit of (event delegation) is the second part of our definition: (its also add the future descendants that match that selector) => this is actually in regard to dynamic elements, lets just say we had an (add button) here at the end of this sports box where it allowed us to add another sport to our list.
*/

const sports = document.querySelector(('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.appendChild(newSport);

// if we click in rugby now ot will show the same styling as other sport cause cause we use (addEventListener) in parent (ul) element 