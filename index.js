const taskInput = document.getElementById('task-input');
const taskDateInput = document.getElementById('task-date');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const taskDate = taskDateInput.value;

  if (!taskText || !taskDate) {
    alert('Please enter a task and select a date!');
    return;
  }

  addTask(taskText, taskDate);

  taskInput.value = '';
  taskDateInput.value = '';
});

function addTask(taskText, taskDate) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button onclick="toggleComplete(this)">✔</button>
    <button onclick="deleteTask(this)">✖</button>
    <div class="task-date">${new Date(taskDate).toLocaleString()}</div>
  `;

  taskList.appendChild(taskItem);
}

function toggleComplete(button) {
  const taskItem = button.parentElement;
  taskItem.classList.toggle('completed');
}

function deleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
