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

ToDoList.addTask(`Помыть посуду`, 2);
ToDoList.addTask(`Помыть жепу`, 5);
ToDoList.updateTask(2, `Не мыть`, 3);
console.log(ToDoList);
console.log(ToDoList.tasks);
