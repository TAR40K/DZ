const ToDoList = {
  tasks: [],

  addTask(title, priority) {
    const id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
    this.tasks.push({ title, id, priority });
    return this.tasks;
  },

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks;
  },

  updateTask(id, newTitle, newPriority) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new Error("Task not found");
    }

    task.title = newTitle ? newTitle : task.title;
    task.priority = newPriority ? newPriority : task.priority;

    return task;
  },

  sortByPriority() {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};

const newTask = {
  tasks: [],
};

function addNewTaskFunc(obj, title, priority, description) {
  ToDoList.addTask.call(obj, title, priority);
  obj.tasks[obj.tasks.length - 1].description = description;
}

function removeNewTaskFunc(obj, id) {
  ToDoList.removeTask.call(obj, id);
}

function updateNewTaskFunc(obj, id, newTitle, newPriority, description) {
  const updatedTask = ToDoList.updateTask.call(obj, id, newTitle, newPriority);
  if (updatedTask) {
    updatedTask.description = description;
  }
}

function sortByPriorityNew(obj) {
  ToDoList.sortByPriority.call(obj);
}

addNewTaskFunc(newTask, `Помыть посуду`, 5, `тщательно помыть`);
addNewTaskFunc(newTask, `Помыть жепу`, 10, "очень тщательно помыть");

removeNewTaskFunc(newTask, 2);

updateNewTaskFunc(newTask, 1, `Помыть пол`, 4, "Не старайся");

addNewTaskFunc(newTask, `Написать очередное ебанутое ДЗ`, 8, `Разозлиться`);

addNewTaskFunc(newTask, `Успокоиться после дз`, 6, `Выпить Персенчик`);

sortByPriorityNew(newTask);

console.log(newTask.tasks);
