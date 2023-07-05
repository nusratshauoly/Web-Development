// DOM => Document Object Model

// DOM Manipulation



// GetElementById()


const title = document.getElementById('main-heading');
console.log(title);


// GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);


// getElementByTagName()

const tagItem = document.getElementsByTagName('li');
console.log(tagItem);


// querySelector() {its used for selection all elements of clas,id, tag er parent selection e , ekhane shob gulor parent div}

const container = document.querySelector('div');
console.log(container);


// querySelectorAll() {r jodi onekgula div thake tahole (querySelectorAll()) use korbo shobgulo selection er jonno}

const allContainer = document.querySelectorAll('div');
console.log(allContainer);


//////////////////////////////////////////////

//////////////   styling elements    ////////////

///////////// to style css with javascript ////////////

// DOM manipulation

const title = document.querySelector('#main-heading');
title.style.color = 'red';
title.style.fontSize = '3rem';

/* 
we can apply css style through javascript by applying one by one.

-- but we cannot apply style for all of the div or section it won't work

-- to work this style to all of the div/section we have to apply loop 
*/
 
const listItems = document.querySelectorAll('.list-items');

 for (let i = 0; i < listItems.length; i++){
     listItems[i].style.fontSize = '2rem';
 }
 console.log(listItems);
 


//////////////////////////////////////////////////////////////

//////////////   creating elements    ////////////

// 

/* Method of adding elements

const firstListItem = document.querySelector('.list-items');
 console.log(firstListItem.innerText);
 console.log(firstListItem.innerContent);
 console.log(firstListItem.innerHTML);
 */

 ///////


// if we want to add elements in website
// 1. first select where to add item and add element using(createElement('li'));

const ul = document.querySelector('ul');
const li = document.createElement('li');


// 2. {add li inside ul} => (append) is used for adding method
// Adding elements
ul.append(li);

///////////////////////////////////////////////////////////


// /////////////{modifying the text} /////////////

//(innerText => is used to write / add text)
// 3. most of the will use (innerText)

li.innerText = 'X-Men';

///////////////////////////////////////////////////////////


// ///////////////4. {modifying attribute and classes}  /////////////////////

// {li.setAttribute(qualifiedName, value)} => you have add two things(attribute => here is the id, name of the attribute)
li.setAttribute('id', 'main-heading');


///////////////////////////////////////////////////////

// 4. remove attribute (attribute)
li.removeAttribute('id');

////////////////////////////////////////////////////////

// 5. getAttribute diye JS e attribute set korar niyom
const title1 = document.querySelector('#main-heading');
console.log(title1.getAttribute('id'));

////////////////////////////////////////////////////////

// 6. classes in javascript = we can add classname in attribute (ekhane {li} te classname add korbo baki shobgulor moto)
li.classList.add('list-items');

// 6.1: classes in javascript = we can remove classname in attribute (ekhane {li} te classname remove korbo)
li.classList.remove('list-items');

///////////////////////////////////////////////////////

// 7. we can check if a certain attribute are in the js code (ekhane check korbo shobgulo {li} te {list-items} name er classname ache na)
console.log(li.classList.contains('list-items'));

////////////////////////////////////////////////////////

//////////////////// remove elements //////////////////////

// 8. if we want to remove li elements
li.remove()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //////////////// traversing the DOM ////////////////////

// ////DOM Manipulation ///////







// ///////// Traverse the DOM //////////////




//////////// Parent Node Traversal //////////////

// *** here in html file (h1 and ul) in the same level and are siblings. now lets see which is the parent and grandparent of (ul).
let ul = document.querySelector(('ul');
 
// *** if we want to find the (parentNode) of ul
console.log(ul.parentNode);

//***   if we want to find the (parentNode) of the (parentNode) of (ul):
console.log(ul.parentNode.parentNode);

// *** same things happens as we want to find the (parentElement) as like (parentNode)
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);


// **** we use mostly (parentNode) when we use traversing the DOM
const html = document.documentElement;
console.log(html.parentNode);
console.log(html.parentElement);

//////////// Child Node Traversal ///////////////
// *** we will use (ul) with (childNode), to see its child text (li) because (ul) is child of (div)
let ul = document.querySelector('ul');
console.log(ul.childNodes);

// *** we can find (firstChild) and (lastChild)
console.log(ul.firstChild);
console.log(ul.lastChild);

// *** we can add styles in (childNodes) and (jei child er color change korbo tar position number dibo)
ul.childNodes[1].style.backgroundColor = 'blue';

// *** we can see childs using (children)
console.log(ul.children);

//  *** can also see the element of childs
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


//////////// Sibling node traversal //////////////////

// *** here (h1 and ul) are siblings, being siblings doesnt have to be same type of node.

// *** this will select all the element of (ul) in (document)
let ul = document.querySelector('ul');

// *** this will select all the element of (ul) in (document)
const div = document.querySelector('div');

// *** this will show how many childs are in (div)
console.log(div.childNodes);

// *** this will show the previous siblings of (ul)
console.log(ul.previousSibling);

// *** this will show the next siblings of (ul)
console.log(ul.nextSibling);

// *** instead of (previousSibling / nextSibling) we can use (previousElementSibling / nextElementSibling) so that we can find the elements inside of the siblings
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);