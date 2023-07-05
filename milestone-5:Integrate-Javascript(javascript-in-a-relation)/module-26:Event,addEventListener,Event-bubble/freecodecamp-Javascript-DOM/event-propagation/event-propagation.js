/*
(event propagation) has 3 phases

1. Event Capturing : (capturing phase starts from the root and travels all the way to the target after it's reached the target it goes into the bubbling phase which travels back up from the target to the root.)

2. Target : (this property represents the element that the event is actually on so again it relates to our target phase)

3. Event Bubbling : (so from the target it's bubbling to the highest position to lowest position in the dom tree,)

*/

// DOM Manipulation

// ///////////////// Event Propagation ////////////////////

// for window (applied addEventListener directly)
window.addEventListener('click', function () {
    console.log('Window');
}, true); //false

// for document
document.addEventListener('click', function () {
    console.log('Document');
}, true); //false


// for select (querySelector) div2 and add the (click) event in (div2)
document.querySelector('.div2').addEventListener('click', function (e) {
    
    // *** 3.1. if  add (e => event) in function parameter and add(e.stoppropagation) then when it will reach into (div2) then it will stop the events and no more will see in the (document and window), it can also used as event capturing, when it is (true) in function but stop the propagation in second div (e.stopPropagation(); then the output will be (window, document,DIV2) and it will stop propagation in our function) and even again we use (false) in function and also use (stoppropagation) => (e.stopPropagation()) then it will stop the propagation in which function we will give the (stopPropagation).

    // *** 3.2: we can use event bubbling only once

     e.stopPropagation();


    console.log('DIV 2');


}, true); //false

// for select (querySelector) div1 and add the (click) event in (div1)
document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
}, true); //false


//  here (e => event), when we click the (click) button then event happens and all the documents know about this event happens.
document.querySelector('button').addEventListener('click', function(e){
    console.log(e);

    /* 
        if we click the button it will show/ body er each element k janabe tai (window, document, div2, div1, button) show korbe.
    */
    // console.log(e.target);

    // *** we can also change the text of button after when we click the button by using (innerText).
    //console.log(e.target.innerText = 'clicked!');


    // *** 3. bubbling: normally while using (true) boolean value the result will shown parent to child means if i click a button it will show (window, document, div2, div1, button) but if i use (false) in function it will show child to parents(button, div1, div2, document, window).
    
}, true); //false


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// same propagation like before

// ///////////////// Event Propagation ////////////////////


window.addEventListener('click', function () {
    console.log('Window');
}, false); 

// for document
document.addEventListener('click', function () {
    console.log('Document');
}, false); 


//3.2: using event bubbling in another way using (true) in the (div2) and removing the (e) parameter from function and want to only once for our (third parameter), for that we set {once: true} instead of only (true). now if we click on the button then it will show in inspect it will start as click and bubble up to the window (clicked!, DIV 1, DIV 2, Document, Window)

//3.3 then if we click the(click) button again it will show(clicked!, DIV 1, Document, Window),  it wont show (Div2) cause if set the (div2) to be clicked only once in function ({once: true})

document.querySelector('.div2').addEventListener('click', function () {

    //  e.stopPropagation();
    console.log('DIV 2');
}, {once: true});


document.querySelector('.div1').addEventListener('click', function(){
    console.log('DIV 1');
}, false);


/////////////////////////  // *** prevent default behaviour /////////////////////////


/*  <!-- 3.4: prevent default method -->
    <a href class="button">Click</a>
*/

//3.5: if we make anchor tag a button when it is clicked then the information will not show it will just go in a blink. cause anchor tag is to try and redirect us to somewhere else link. and this is caused this quick fire off / blink off all the events and 

document.querySelector('.button').addEventListener('click', function (e) {
//3.6: to prevent this we will use (preventDefault()) {e.preventDefault()} and then if we (click) the button then the console will shpw us the bubbling phase(clicked, Div1, Div2, Document, Window)
    e.preventDefault()
    console.log(e.target.innertext = 'clicked!');    
}, false);