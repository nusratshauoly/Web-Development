//console.log('fetching');

// ekhane fetch name er function k call kortesi and 1 ta input inside (fetch) function jeta 1 ta (API link) k call kortese and get some result from this link.
// function call korar por link kono data diteo pare or nao dite pare thay why its (.then)
// call korar por ja dibe shei value ta ke(response.JSON()) e convert korte hobe.
// then JSON k return pabar por (≈console.log)korte hobe.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) //.json is not similar but close to JSON.parse
    .then(json => console.log(json))
      

/*    
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => console.log(response)) //.json is not similar but close to JSON.parse
    .then(json => console.log(json))

*/

// when do it own
// 1. take a lik into a variable
// 2. keep the variable line as a parameter in fetch function
// 3. j url k call korsi ta jodi kono response dey tahole .then diye JSON er 1ta promise e convert kore call korbo. 
// 4. promise k resolve korbo
//5. function create kore ervitore rakhbo
// html file e function call jore dibo


function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
