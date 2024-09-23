document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText} - ${new Date().toLocaleString()}</span>
            <div>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        document.getElementById('pendingTasks').appendChild(taskItem);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.add('completed');
    document.getElementById('completedTasks').appendChild(taskItem);
    button.remove();
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.firstChild.textContent.split(' - ')[0];
    const newTaskText = prompt('Edit your task:', taskText);

    if (newTaskText) {
        taskItem.firstChild.textContent = `${newTaskText} - ${new Date().toLocaleString()}`;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
