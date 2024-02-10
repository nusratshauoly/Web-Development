// console.log("inside index.js");

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}


/*
//sending another function with same name parameter
// parameter e j name use korbo console.log eo eki name use korbo.
function displayUsers2(data) {
    //console.log(data);
    // using for loop to get each user information separately
    for (const user of data) {
        console.log(user);
        // can get users name or email only
        console.log(user.name);
        console.log(user.email);
    }
}

*/
// --------------------------------------------
// from (div) element of HTML
function displayUsers2(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        console.log(user.name);
        // HTML code er (ul) er vitor (li) item create korbo
        const li = document.createElement('li');
        
        // li element er vitore (data) user er joto name ache shob add hoye jabe.
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

// --------------
// Deleting a resource
function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

// Patching a resource
function PatchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

// Creating a resource
function createAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


}


