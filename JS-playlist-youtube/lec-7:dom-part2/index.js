
// ----------- get attribute -----------
let div = document.querySelector('div');
console.log(div);

let id = div.getAttribute('id');
console.log(id);

let name = div.getAttribute('name');
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));




// ------------- set the new attribute -----------
let para1 = document.querySelector('p');
console.log(para1.setAttribute('class', 'newClass'));
// website er inspect er (console) e undefined dekhaleo (elements) e change dekhabe. 

// changing node styles
let div1 = document.querySelector('div');
console.log(div1);
div1.style.backgroundColor = "blue";
div1.style.fontSize = "26px";
div1.innerText = "Hello!";
// div1.style.visibility = "hidden";



// ------------ insert elements -------------
// let el = document.createElement("div");

//  * node.append(el) = adds at the end of node (inside)
// * node.prepend(el) = adds at the start of node (inside)
// * node.before(el) = adds before the node (outside)
// * node.after(el) = // adds after the node (outside)


//  *** to add a element 1. create a element 2. add the element
let newBtn = document.createElement('button');
newBtn.innerText = "click me";
console.log(newBtn);

let divBtn = document.querySelector("div");
divBtn.append(newBtn); // shobar sheshe add korte chaile

divBtn.prepend(newBtn); // shobar first e add korte chaile

divBtn.before(newBtn); // node er first e div er age add korte chaile

divBtn.after(newBtn); // node er last e div er pore add korte chaile



// adding a paragraph
let p = document.querySelector("p");
p.after(newBtn);

// adding a heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi! I am new!</i>";

document.querySelector("body").prepend(newHeading);





//  ------------ delete elements -------------
// * node.remove() // remove the code
let paraRemove = document.querySelector('p'); // to remove paragraph
paraRemove.remove();

let headingRemove = document.querySelector('h1'); // to remove heading
headingRemove.remove();






// appendchild, removechild, classList (read documentation)


// 1. create a new button element. Gite it a text "click me", background color of red & text color of white. Insert the button as the first element inside the body tag.

let createBtn = document.createElement("button");
createBtn.innerText = "click me";
createBtn.style.backgroundColor = "red";
createBtn.style.color = "white";

document.querySelector("body").prepend(createBtn);




// 2. Create a <p> tag in HTML, give it a class & some styling.Now create a new class in CSS and try to append this class to the <p> element. Did you notice, how you overwrite the class name when you add a new class. Solve this problem using classList.

let newPara = document.querySelector('p');
newPara.classList.add("newClass");
newPara.classList.remove("newClass");


// newPara.classList /// inspect e jeye dekhbo koyta class ache.