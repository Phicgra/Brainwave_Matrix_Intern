document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Event listener for adding a todo when the "Add" button is clicked
    addBtn.addEventListener('click', addTodo);

    // Event listener for adding a todo when the Enter key is pressed
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // Function to add a new todo item
    function addTodo() {
        const todoText = todoInput.value.trim();

        // Ensure the input is not empty
        if (todoText !== '') {
            const li = document.createElement('li');
            li.textContent = todoText;

            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Complete';
            completeBtn.className = 'complete-btn';
            completeBtn.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                li.remove();
            });

            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            todoList.appendChild(li);

            // Clear the input field and refocus for the next input
            todoInput.value = '';
            todoInput.focus();
        }
    }
});
