document.addEventListener("DOMContentLoaded", () => {
  //as soon as the dom is loaded we want to get the taks from the local storage
  const todoInput = document.getElementById("todo-input");

  const addTaskButton = document.getElementById("add-task-button");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim(); //grabs the task
    if (taskText === "") {
      return; // ends the code if task is empty
    }
    const newTasK = {
      id: Date.now(),
      text: taskText,
      completed: false,
    }; // creates a new object with three properties
    tasks.push(newTasK); // pushing the object in array
    saveTask(); // saving the task in local storage
    renderTask(newTasK);
    todoInput.value = ""; // empty the add task area
    console.log(tasks); // just for checking
  });
  // saving task function in local storage of browser
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  //function to read from the local storage
  // rendder means display
  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if (task.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      } else {
        task.completed = !task.completed;
        li.classList.toggle("completed");
      }
      saveTask();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent event bubbling
      tasks = tasks.filter((t) => t.id !== task.id); // using filter method on array
      li.remove();
      saveTask();
    });
    todoList.appendChild(li);
  }
});
