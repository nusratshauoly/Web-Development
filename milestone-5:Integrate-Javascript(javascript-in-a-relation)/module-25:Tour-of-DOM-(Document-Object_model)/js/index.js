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

//*** (.getElementById) = css style set korte parbo
// **** we can also set style such as color, background-color & others in Id by adding(.style.color = 'color name')
//** Javascript e style tag gulo camelCase e kikha hoy (backgroundColor) and in (css => background-color)
const fruitsColor = document.getElementById('fruits-title').style.color = 'red';
const fruitsBackgroundColor = document.getElementById('fruits-title').style.backgroundColor = 'red';


// getAttribute('idName/ className') => element er class / id name ber korte parbo
// fruitsColor.getAttribute('id');
// fruitsColor.getAttribute('class');


// element er shob gulo class ekshathe pawar jonno (.classList) o use kora jay

fruitsColor.classList;

// ** kono new class jodi dynamic vabe add korte chai taholeo parbo
//fruitsColor.classList.add('new-class');
// then check korte parbo add hoise naki
//fruitsColor.classList;


// ** (delete - class) kono new class jodi dynamic vabe delete korte chai taholeo parbo
// fruitsColor.classList.delete('random-class');
// fruitsColor.classList;


/////////////////////////////////////////////////////

// (setAttribute) diye element er vitor kono kichu value set kora jay (first e class/id name, second e ki set korbo or kon value set korbo).

// title.setAttribute('fruits-color', 'tooltip set by Javascript');


// **** getElementByClassName diye position ber korbo index er
//document.getElementsByClassName('fruits-container')[0];

// jodi index[0] er full innerHTML chai (/n = > new line)

//document.getElementsByClassName('fruits-container')[0].innerHTML;

// *** innerHTML er vitor change oredit o korte pari

//document.getElementsByClassName('fruits-container')[0].innerHTML = '<h2>ABC wow DOM is changing.</h2>';


// *** fullHTML er moto full text o pawa jay
//document.getElementsByClassName('fruits-container')[0].innerText;

// *** (innerText) mane holo HTML er vitorer jei text ta dekhte parbo.

// {/* <div id="my-details">
//     {/* my detais */}
//     <h1>Name : chinku pinku</h1>
//     <p>Age: 12years</p>

// </div> */}

// getting text
// const div = document.getElementById('my-details');
// const text = div.innerText;
// console.log(text);

// (output e only name and age show korbe)
/*
Name : chinku pinku</h1>
Age: 12years
*/

// **** jodi html file comment kora thake tahole (innerText) er output ashbe (<empty string>) and html tag er vitorer element kichu dekha jabena

///////////////////////////////////////////////////

// uses of (innerHTML) show kore
// const div = document.getElementById('my-details');
// const html = div.innerHTML;
// console.log(html);
// Output e HTML file er vitor ki ki tag ache shetao dekhabe

/*
   <-- my detais -->
    <h1>Name : chinku pinku</h1>
    <p>Age: 12years</p>
*/

// **** jodi html file comment kora thake tahole (innerHTML) er output ashbe html tag er vitorer element kichu dekha jabe comment kora thakleo.


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Module: 25-6: Styling dom properties, add and remove css class using JS

// html file e kotogulo section ache ta ber korar jonno.
const sections = document.querySelectorAll('section');
// console.log(sections);
// using (for ... of)
for (const section of sections) {
    //console.log(section);

// we can also add / remove styles in section
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
//placesContainer.style.backgroundColor = 'yellow';
placesContainer.classList.add('yellow-bg');
placesContainer.classList.add('text-center');
placesContainer.classList.remove('large-text');

//**  jodi style element er moddhe direct boshe tahole tar priority high thakbe. r jodi pichone thake tahole priority low hobe.
//** 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Module: 25-7: NodeList, htmlcollection, parentNode, childNodes, createElement

// *** website er inspect e jeye likhbo

const placesContainer = document.getElementById('places-container');

// (.childNodes) diye (placesContainer) er vitor ki ki tag ache ta dekhar jonno.
placesContainer.childNodes;

// ** jodi (placesContainer) er moddhe first child/ last child first tag k dekhte chai
placesContainer.firstChild;
placesContainer.lastChild;

// *** jodi (placesContainer) er moddhe index number e  tag k dekhte chai
placesContainer.childNodes[1];

// *** child er vitorer child k jodi ber korte chai.
placesContainer.childNodes[3].childNodes;


// *** child er vitorer child er kono position er value jodi ber korte chai.
placesContainer.childNodes[3].childNodes[5];

// *** child er vitorer child er kono position er value jodi ber korte chai and er next / previous tag jodi ber korte chai.

placesContainer.childNodes[3].childNodes[5].previousSibling;

placesContainer.childNodes[3].childNodes[5].nextSibling;


// *** notun kono child add / remove o korte parbo

// first e (places-container) er (ul) e jabo)
const placesUL = document.querySelector('#places-container ul');

// then new (li) add korbo (.createElement) used create/ add new tag or element
const li = document.createElement('p');
document.createElement('span');
document.createElement('div');
document.createElement('li');
document.createElement('section');

// ** jodi (li) create korte chai shudhu (li)creat korle hobena , er vitor text o create korte hobe er jonno (innerText use korbo)
li.innerText = "Brand new place to go";

// ** now (placesUL) variable e (li) push korbo with (append). its like (push), used to add new value 
// ** ekhane (li) add korbo child hishebe
placesUL.appendChild(li);

// new variable declare kore child li create korbo.
const li2 = document.createElement('li');
li2.innerText = "another dynamic li";

// then (placesUL) e (li2) ,(appendChild) diye push kore dibo
placesUL.appendChild(li2);


// *** we can show the (parentNode) of a (childNode), ekhane (placesUL) er (parentNode) ber korte parbo
placesUL.parentNode;

// (parentNode) er o (parentNode) ber korte pari
placesUL.parentNode.parentNode;

// evabe (parentNode) er o (parentNode) er (parentNode) o ber korte pari
placesUL.parentNode.parentNode.parentNode;

// evabe (parentNode) er o (parentNode) er (parentNode) er (parentNode) o ber korte pari
placesUL.parentNode.parentNode.parentNode.parentNode;

// evabe (parentNode) er o (parentNode) er (parentNode) er (parentNode) er (parentNode) o ber korte pari but r kono (parentNode) na thakle (null) dekhabe.
placesUL.parentNode.parentNode.parentNode.parentNode.parentNode;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Module: 25-8: Create HTML elements using Javascript and appendChild

// ** jokhon onek gulo file or folder thakbe tokhon js file upore evabe (console.log(index.js); filename diye dibo jate konta kon file confusion na thake

//console.log(index.js);

// 1. where to add: 
// *** html file e (places-list) id er moddhe noddhe notun (li) add korbo
const placesList = document.getElementById('places-list');
console.log(placesList);

// 2. what to add:
// notun element banabo list e
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

// 3. add the child
placesList.appendChild(li);


// **** now add a full section 
// 0000. first find out section gulor parent k
// er jonno shob section er upore (main) e ekta (id) dite hobe. (id= "main-container") name e.

// 1. where to add
const mainContainer = document.getElementById('main-container');
//console.log(mainContainer);

// 2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
// 3. add the child
section.appendChild(h1);


const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'biriyani';
// 3. add the child
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani';
// 3. add the child
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
// 3. add the child
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);


// ***** set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>T-shirt</li>
        <li>Lungi</li>
        <li>Sando genji</li>
    </ul>
`

// main er id="main-container" er moddhe (sectionDress) id er (section) push korbo
mainContainer.appendChild(sectionDress);

// ***jodi onekgulo (script.js) file thake tahole jeta age thakbe sheta age kaj korbe r jodi js file er moddhe style er kaj kori(stylejs.js) then oi file ta shob (script.js) file er niche rakhbo tahole uporer shob js file e css and js er style apply hobe.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Module: 25-9: Module Summary (DOM Review)

