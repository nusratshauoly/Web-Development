// console.log('app.js');

function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data));
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
    //  .then(data => console.log(data))
    // can call another function here
    .then(data => displayUsers(data))
    
}


// can send another function with same name parameter
function displayUsers(data) {
    console.log(data);

}