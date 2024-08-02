// -------- vide - 5: manipulate the DOM --------
const divElement = document.createElement('div');
divElement.className = 'red';

// if we want to set some code
divElement.setAttribute('id', 'red'); // set id named 'red' in (divElement).
divElement.setAttribute('title', 'Red Div');
// console.dir(divElement);


// set the (id="red") before  (<h2>Incomplete Tasks</h2>)
const container = document.querySelector('.todo-list');
const h2Element = container.querySelector('h2');

// (insertBefore) 2 ta element ney (ki insert korbo, kar age insert korbo)
container.insertBefore(divElement, h2Element); 


// (container) er vitor last child hishebe add korte chai (divElement) k : (appendChild) diye element shobar last e add korte pari
container.appendChild(divElement);
const a = container.appendChild(divElement);
console.log(a);
container.appendChild(divElement, document.createElement('p'), 'Hello world');

// can also use (append) to add in last
container.append(divElement);
container.append('Hello World');
container.append(divElement, document.createElement('p'), 'Hello world');



/*
// ---------- Difference between (append) and (appendChild)--------------

-------- append --------
1. append e text add kora jay, 
container.append('Hello World'); ✅
2. append returns (undefined) if the content is not found;
const b = container.append(divElement);
console.log(b);

3. we can add multiple elements in (append)
container.append(divElement, document.createElement('p'), 'Hello world');


--------- appendChild ---------
1. appendChild e text add kora jay, 
container.appendChild('Hello World'); ❌
2. const a = container.appendChild(divElement);
console.log(a);

3. we can add only one element in (appendChild), baki jai dibo ta ignore korbe
container.appendChild(divElement, document.createElement('p'), 'Hello world');

*/