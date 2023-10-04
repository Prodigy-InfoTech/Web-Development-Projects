// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <span>${taskText}</span>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);
    document.
  
    // Save tasks in Local Storage
    saveTasksToLocalStorage();
  
    taskInput.value = "";
  }
  
  // Function to edit a task
  function editTask(editButton) {
    const taskTextElement = editButton.parentNode.querySelector("span");
    const newTaskText = prompt("Edit the task:", taskTextElement.innerText);
    
    if (newTaskText !== null) {
      taskTextElement.innerText = newTaskText;
      saveTasksToLocalStorage();
    }
  }
  
  // Function to delete a task
  function deleteTask(deleteButton) {
    const taskItem = deleteButton.parentNode;
    taskItem.parentNode.removeChild(taskItem);
    saveTasksToLocalStorage();
  }
  
  // Function to save tasks in Local Storage
  function saveTasksToLocalStorage() {
    const tasks = [];
    const taskList = document.getElementById("taskList");
    const taskItems = taskList.getElementsByTagName("li");
    
    for (let i = 0; i < taskItems.length; i++) {
      tasks.push(taskItems[i].querySelector("span").innerText);
    }
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Function to load tasks from Local Storage
  function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  
    if (savedTasks) {
      const taskList = document.getElementById("taskList");
      savedTasks.forEach((taskText) => {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
          <span>${taskText}</span>
          <button onclick="editTask(this)">Edit</button>
          <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
      });
    }
  }
  
  // Load saved tasks on page load
  loadTasks();
  