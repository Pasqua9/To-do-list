
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});


taskList.addEventListener('click', function(event) {
    if (event.target.className === 'deleteBtn') {
        event.target.parentElement.remove();
    }
});


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('div');
        taskItem.className = 'taskItem';
        taskItem.innerHTML = `
            ${taskText}
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}