// html e js file theke data load korte hobe
//  can can be done 2 ways 1. button e click kore function call kore, 2. js  file er vitor function call kore

// calling (header) using function call
function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    // .then(data => console.log(data))
        .then(data => displayPosts(data))
}

/*
//  main er moddhe user er post gulo dekhabo
// kono 1ta element e new element add korar niyom
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/
// post data guloke show koranor jonno alada function likhbo
function displayPosts(posts) {
    // to add new elements
        const postsContainer = document.getElementById('posts-container');
    // to print new added each user
    for (const post of posts) {
        const postDiv = document.createElement('div');
        // add class (post) in (postDiv)
        postDiv.classList.add('post');
        console.log(post);
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
    }
}




loadPosts();
