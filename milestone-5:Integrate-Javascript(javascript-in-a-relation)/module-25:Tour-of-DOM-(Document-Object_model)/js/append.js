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
mainContainer.appendChild(sectionDress);

// ***jodi onekgulo (script.js) file thake tahole jeta age thakbe sheta age kaj korbe r jodi js file er moddhe style er kaj kori(stylejs.js) then oi file ta shob (script.js) file er niche rakhbo tahole uporer shob js file e css and js er style apply hobe.