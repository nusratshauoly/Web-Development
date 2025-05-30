// alert("hello");
// console.log(alert("hello"));
// window.console.log("HEllo2");
// window.console.log("Hello world");
// console.log(window.dir);
// console.dir(window);
// console.dir(window.document);
// console.log(document.body);
// console.dir(document.body.childNodes[1]);

// // style change in css
document.body.style.backgroundColor = "green";

// // text change in html
document.body.childNodes[3].innerText = "abcd";

// // dom manipulation

// // starting with id
let headerId = document.getElementById("heading");
console.log(headerId);
console.dir(headerId);

// // starting with class

let headerClass = document.getElementsByClassName("heading3");
console.log(headerClass);
console.dir(headerClass);

// // starting with tagname
let tagName = document.getElementsByTagName("p");
console.log(tagName);

// // starting with querySelector
let elements = document.querySelector("p");
console.log(elements);

let allHeading = document.querySelectorAll(".heading3");
console.log(allHeading);

let headerSelector = document.querySelector("#heading");
console.log(headerSelector);

// //  dom manipulation properties (tagName, innerText, innerHTML, textContent)

// // parent, child : firstChild, lastChild, siblings in dom
console.log(document.querySelector("div"));
console.log(document.querySelector("div").children);

// // node: text node, comment node, element node => read the documents about these topics

// // -------------- for innertext --------------
// let divForInnerText = document.querySelector(".divInnerText");
// console.dir(divForInnerText);

let divForInnerText = document.querySelector(".divInnerText");
console.dir(divForInnerText);
divForInnerText.innerText;
divForInnerText.innerHTML;

divForInnerText.innerText = "abcd";
divForInnerText.innerHTML = `<div>innerHTML</div>`;
divForInnerText.textContent;
// h1.textContent;

// // 1. question: Create a H2 heading element with text - "Hello Javascript". Append "from Apna College students" to this text using JS.

let h2 = document.querySelector("h2");
console.log(h2.innerText);

h2.innerText = h2.innerText + " from apna college students";
console.log(h2.innerText);

// //  2. question: Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
divs[0].innerText = "new first div";
divs[1].innerText = "new second div";
divs[2].innerText = "new third div";
console.log(divs);

// // we can use for loop instead of writing so many codes
let index = 1;
let divsIndex = document.querySelectorAll(".box");
for (let div of divsIndex) {
  div.innerText = `new unique value ${index}`;
  index++;
  console.log(div.innerText);
}

console.log(divsIndex);
