// script.js
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="completeCheckbox">
            <span class="taskText">${taskText}</span>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        addEditListener(li);
        addDeleteListener(li);
    }
});

function addEditListener(li) {
    const editButton = li.querySelector('.editButton');
    const taskTextElement = li.querySelector('.taskText');

    editButton.addEventListener('click', () => {
        const newText = prompt('Edit task:', taskTextElement.textContent);
        if (newText !== null) {
            taskTextElement.textContent = newText;
        }
    });
}

function addDeleteListener(li) {
    const deleteButton = li.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
}

// Add event listener to each checkbox for task completion
const completeCheckboxes = document.querySelectorAll('.completeCheckbox');
completeCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const taskTextElement = checkbox.nextElementSibling;
        taskTextElement.classList.toggle('completed', checkbox.checked);
    });
});