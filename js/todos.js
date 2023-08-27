function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos') 
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos){
    const showTodos = document.getElementById('todo-container')
    for(const todo of todos){
        //1. create the child element 
        const todoDiv = document.createElement('div') ;
        //2. set innerText or innerHTML
        todoDiv.innerHTML = `
        <h3>title:${todo.title}</h3>
        <p>User: ${todo.userId}</p>
        <p>Is completed: ${todo.completed === true ? 'complete' : 'not complete'}</p>
        ` ;
        // 3. appendChild
        showTodos.appendChild(todoDiv)
    }
}
loadTodos()

