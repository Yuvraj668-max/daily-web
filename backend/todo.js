const { log } = require("console");
const fs = require("fs");
const filePath = "./tasks.json";

const command = process.argv[2];
const argument = process.argv[3];

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
const addTask = (task) => {
  const tasks = loadTasks();
  // console.log("this is itask: ",tasks);

  tasks.push({ task });
  saveTasks(tasks);
  console.log("task added succesfully");
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
  console.log("file written successfully");
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`);
  });
};

const removeTask = (argument) => {
  const i = parseInt(argument);
  const indexToRemove = i - 1;
  let tasks = loadTasks();
  tasks = tasks.filter((_, index) => index !== indexToRemove);
  saveTasks(tasks);
};

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(argument);
} else {
  console.log("wrong argument");
}
