// Module- 25-1: What is Dom, Connect your JS file with html file

console.log('hello from js');

// document likhle html file er shob file tuku show korbe.
//jodi website er (inspect) e jeye (document) likhi tahole html er full file tuku ashbe
console.log(document);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Module: 25-2: Traversing dom - getElementsByTagName



document.body

// tagname holo HTML er j tag gulo ache shegulo - h1, p, li etc. 

// h1 tag er joto gulo element ache shegulo ber korar jonno  getElementsByTagName('') use korbo jei elemnet ashbe oiguloke bole (array like object).
document.getElementsByTagName('h1');
document.getElementsByTagName('li');


// r jodi vs code e likhi tahole variable diye likhte hobe
const h1Collection = document.getElementsByTagName('h1');
console.log(h1Collection);
const liCollection = document.getElementsByTagName('li');
console.log(liCollection);

//   or  evabeo ber korte pari (for .. of) use kore without console.log
for (const li of liCollection) {
    console.log(liCollection);
// overall document er li er vitor ki ki text ache shegulo dekhte chai (.innerText)
    console.log(li.innerText);
}

// for header
const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    console.log(h1);
    console.log(h1.innerText);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Module:25-3: Traversing dom - getElementByClass VS getElementById

// ***** document.getElementById => directly give us the element cause id 1 ta element er e hoy. html er id tag show, style change and aro onek kichu korar jonno use kora hoy (Id only one time for unique cause use korte hoy)

const fruits = document.getElementById('fruits-title');

// ***(.innertext) diye text change o kora jay javascript er through html file er
fruits.innerText = 'Fruits changed by JS';
console.log(fruits);

const places = document.getElementById('places-title');
console.log(places);

//**** kono id jodi na thake tahole null dibe
const fruit = document.getElementById('fruit-title');
console.log(fruit);

/////////////////////////////////////////////////////

// ***** document.getElementsByClassName => will give us collection cause eki classname e onekgulo element thakbe. html er class tag show, style change and aro onek kichu korar jonno use kora hoy (class name onek jaygay ekshathe use kora jay)
//const allFavouritePlaces = document.getElementsByClassName('important-places').innerText;
const favouritePlaces = document.getElementsByClassName('important-places');
for (const place of favouritePlaces) {

// ** jodi vitorer text gulo pete chai er jonno (.innerText) likhbo
    console.log(favouritePlaces.innerText);
}


// other place class
const otherPlace = document.getElementsByClassName('other-places');
console.log(otherPlace.innerText);

//******* */ kono class jodi na thake tahole empty array dibe
const favouritePlace = document.getElementsByClassName('important-place');
console.log(favouritePlace);



/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Module:25-4: Traversing dom - getElementByQuerySelector, querySelectorAll

//** querySelectorAll => kono fixed class or id er jonno use kora hoy, like if i want to select some (li)and use it the (querySelectorAll) not all the (li).
document.querySelectorAll('#fruits-title');

const someLi = document.querySelectorAll('.fruits-container li');
//console.log(someLi);
for (const li of someLi) {
    console.log(li.innerText);
}


// **** jodi shudhu first element ta chai tahole (document.querySelector('class/id-name tag name'))
const firstElement = document.querySelector('.fruits-container li');
console.log(firstElement);
console.log(firstElement.innerText);


/* *** website er inspect er console e
---- (document.getElementByClass('impotant-places')) dile (HTML Collection) dekhay
 and 
----(document.querySelectorAll('.fruits-container')) dile (NodeList)

*** difference between (NodeList) and (HTMLCollection)

--- (HTMLCollection) e live connection thake and we can't use (forEach) in this. but can use (for .. of)

---- (NodeList) is a static and we can use (forEach) and (for ... of) in this.

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Module: 25-5: Dynamic style, getAttribute, setAttribute, innerText, innerHTML