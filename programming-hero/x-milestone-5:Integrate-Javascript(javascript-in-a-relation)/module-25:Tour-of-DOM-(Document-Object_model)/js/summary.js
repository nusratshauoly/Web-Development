// Module: 25-9: Module Summary (DOM Review)

console.log('summary file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);


const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);


const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'violet';
secondSection.style.backgroundColor = 'steelblue';


// document.querySelectorAll => output will be the nodelist
// document.querySelectorAll => will give the first matching element
// traversing the nodeList, nodechild, previousSiblings, nextSiblings



// 1. where to add
const secondList = document.getElementById('second-list');

// what to add
const li = document.createElement('li');
li.innerText = 'My dynamic item';

secondList.appendChild(li);




