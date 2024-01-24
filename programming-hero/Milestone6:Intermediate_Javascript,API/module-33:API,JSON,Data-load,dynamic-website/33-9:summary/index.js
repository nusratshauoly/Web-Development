function loadTodos() {
    // console.log('loading todos');
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}
function displayTodos(todos) {
    // 1. get the container
    // console.log(todos);
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        // 2. create the child element
        const todoDiv = document.createElement('div');
        // 3. set innerText or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId}</p>
            <p>Is completed: ${todo.completed}</p>
            <!-- using ternary operator(?) here  -->
            <p>Is completed: ${todo.completed === true ? 'complete' : 'not complete'}</p>

        `
        // 4. appendchild
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();