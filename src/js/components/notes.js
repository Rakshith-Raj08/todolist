

class Task {
    constructor(title, description, importance, color) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.color = color;
    }
}


export function addTask() {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const importance = document.getElementById('taskImportance').value;
    const color = document.getElementById('taskColor').value;

    if (title && description && importance && importance >= 1 && importance <= 5) {
       
        const newTask = new Task(title, description, importance, color);

       
        addTaskToList(newTask);

        
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskDescription').value = '';
        document.getElementById('taskImportance').value = '';
        document.getElementById('taskColor').value = '#ffffff';
    } else {
        alert('Please fill out all fields and ensure importance is between 1 and 5.');
    }
}


// Function to add a Task object to the task list
function addTaskToList(task) {
    const taskList = document.getElementById('taskList');
    if (!taskList) {
        console.error('taskList element not found!');
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.style.backgroundColor = task.color;

    taskItem.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p>Importance: ${task.importance}</p>
        <button class="deleteTask">Delete</button>

    `;
    

    taskList.appendChild(taskItem);
    taskItem.querySelector('.deleteTask').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}


window.addTask = addTask;
