// ----------- Video - 3: traversing DOM Elements ----------
// ---- getElementById ----
let headerElement = document.getElementById('header'); 

// ----- to change the text of HTML -----
headerElement.textContent = 'To - Do Apps';
headerElement.innerText = 'To - Do App';
console.log(headerElement.textContent); // edit korleo edit shoho ager output e dekhabe
console.log(headerElement.innerText); // edit korar por finall output dekhabe
console.log(headerElement.innerHTML); // html e ja ache shei output e dekhabe

// ---- change the style ----
headerElement.style.color = 'red';
headerElement.style.fontSize = '50px';

// ------- getElementsByClassName ------
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByClassName('item')[0]);


let itemUl = document.getElementById('items');
const items = itemUl.getElementsByClassName('item');  // shob class name select na kore shudhu jetar moddhe id ache oita select korbo
for (let i = 0; i < items.length; i++){
    items[i].style.color = 'red';
}

// ---- getElementByTagName ----
let listOfTag = document.getElementsByTagName('li');
console.log(listOfTag);

let imgOfTag = document.getElementsByTagName('img');
console.log(imgOfTag);

// ------- query selector --------
let header = document.querySelector('.header');
console.log(header);

let newTask = document.querySelector('#new-task');
console.log(newTask);


let lastItem = document.querySelector('.item:nth-child(2)');
lastItem.style.color = "green";
console.log(lastItem);


let lastItemId = document.querySelector('#items').querySelector('.item:nth-child(3)');
lastItemId.style.color = "red";
console.log(lastItemId);



// ---------- querySelectorAll -----------
let lastItems = document.querySelectorAll('.item:last-child');
for (let element of lastItems) {
    element.style.color = 'red';
}
// console.log(lastItems);


// ----------- Video - 4: traversing DOM Hierarchy ----------
// ----------- parent / child relation --------
const grandParent = document.querySelector('.todo-list');
const parents = grandParent.children;
const parent = document.querySelector('#items');
const children = parent.children[1];
console.log(children);


// grandparent theke children e jete hole
const grandParents = document.querySelector('.todo-list');
const childrens = grandParents.querySelectorAll('.item');
console.log(childrens);


// children theke grandparent e jete hole
const children1 = document.querySelector('.item');
const parent1 = children1.parentElement;
const grandParent1 = parent1.parentElement;
console.log(parent1);


// children theke grandparent e jete hole
const children2 = document.querySelector('.item');
const grandParent2 = children2.closest('.todo-list');  // closest() nicher theke uporer dike jay
console.log(grandParent2);


// siblings relation (upor theke niche)
const childrenOne = document.querySelector('.item');
const childrenTwo = childrenOne.nextElementSibling;
childrenTwo.style.color = 'blue';
console.log(childrenTwo);

// siblings relation (nicher theke upore)
const childrenNo2 = document.querySelector('.item').nextElementSibling;
const childrenNo1 = childrenNo2.previousElementSibling;
childrenNo1.style.color = "yellow";
