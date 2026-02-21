document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-button");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("LocalTasks")) || [];
  tasks.forEach((Tasks) => renderTask(Tasks));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTask();

    todoInput.value = ""; //empty the input
    renderTask(newTask);

    // console.log(tasks);
  });
  // saving function in local storage
  function saveTask() {
    localStorage.setItem("LocalTasks", JSON.stringify(tasks));
  }

  function renderTask(LocalTasks) {
    console.log(LocalTasks);
    const li = document.createElement("li");
    li.setAttribute("data-id", LocalTasks.id);
    if (LocalTasks.completed) {
      li.classList.add("completed");
    }
    li.innerHTML = `<span>${LocalTasks.text}</span>
    <button>Delete</button>`;

    todoList.appendChild(li);

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      } else {
        LocalTasks.completed = !LocalTasks.completed;
        li.classList.toggle("completed");
        saveTask();
      }
    });
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.tagName === "BUTTON") {
        tasks = tasks.filter((t) => t.id !== LocalTasks.id);
        li.remove();
        saveTask();
      }
    });
  }
});
