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
    if (task) {
      if (newTitle) task.title = newTitle;
      if (newPriority) task.priority = newPriority;
    }
    return task;
  },

  sortByPriority() {
    return this.tasks.sort((a, b) => a.priority - b.priority);
  },
};
