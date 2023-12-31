// button e click korle style change hobe...
document.getElementById('apply-bg').addEventListener('click', function () {
    // console.log("apply background");
    // jotogulo friend ase shobgulor style change korbo
    const friends = document.getElementsByClassName('friend');
    //console.log(friends);
    // onekgulo class name use korar jonno (for) loop o use korte pari
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }

});


// specific kono element/item er upor event add korte chaile
document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = "center";
});


// Add new element/item after the friends div
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    // new friend add korar jonno new div banabo
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
        <h3 class="friend-name">New Friend</h3>
        <p>Something new added</p>
    `
    friendContainer.appendChild(friend);
});

