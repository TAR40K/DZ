"use strict";
console.log(`Мой первый проект`);
// Массив задач
let tasks = [];
// Сохраняем первые елементы
const addButton = document.querySelector(`.add-button`);
const taskInput = document.querySelector(`.task-input`);
const taskList = document.querySelector(`.task-list`);

// Выводим для проверки
// console.log(addButton);
// console.log(taskInput);
// console.log(taskList);
// Подписались на кнопку "добавления задачи", при клике она должна считывать написанное из поля ввода после чего добавлять ето в  список отдельной задачей после чего очишать поле для нового ввода

taskInput.addEventListener(`keydown`, (event) => {
  if (taskInput.value.trim() == "") {
    return;
  }
  if (event.code === `Enter`) {
    addTask();
  }
});
addButton.addEventListener(`click`, () => {
  if (taskInput.value.trim() == "") {
    return;
  }
  addTask();
});

function renderTask() {
  taskList.innerHTML = "";
  const sortedTasks = [...tasks];
  const priorityWeight = {
    high: 3,
    medium: 2,
    low: 1,
  };
  sortedTasks.sort((a, b) => {
    const result = priorityWeight[b.priority] - priorityWeight[a.priority];
    return result;
  });
  for (const task of sortedTasks) {
    const taskLi = document.createElement("li");
    taskLi.classList.add(`task-li`);
    const priorityMarker = document.createElement(`span`);
    priorityMarker.classList.add(`task-priority`);
    switch (task.priority) {
      case `low`:
        priorityMarker.classList.add(`task-priority__low`);
        break;
      case `medium`:
        priorityMarker.classList.add(`task-priority__medium`);
        break;
      case `high`:
        priorityMarker.classList.add(`task-priority__high`);
        break;
    }
    priorityMarker.addEventListener(`click`, () => {
      if (task.priority === `low`) {
        task.priority = `medium`;
      } else if (task.priority === `medium`) {
        task.priority = `high`;
      } else {
        task.priority = `low`;
      }
      renderTask();
    });
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    if (task.completed === true) {
      taskSpan.classList.add(`task-complete`);
    }
    taskSpan.classList.add(`task-li-name`);
    taskSpan.addEventListener(`click`, () => {
      task.completed = !task.completed;
      renderTask();
    });
    taskList.appendChild(taskLi);
    taskLi.appendChild(priorityMarker);
    taskLi.appendChild(taskSpan);
    const taskBut = document.createElement("button");
    taskBut.textContent = `Удалить`;
    taskLi.appendChild(taskBut);
    taskBut.classList.add("task-li-delete-button");
    taskBut.addEventListener(`click`, () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      renderTask();
    });
  }
}

function addTask() {
  if (taskInput.value.trim() === "") {
    return;
  }
  let taskId;
  if (tasks.length == 0) {
    taskId = 1;
  } else {
    taskId = tasks[tasks.length - 1].id + 1;
  }
  const task = {
    id: taskId,
    text: taskInput.value,
    completed: false,
    priority: `low`,
  };
  tasks.push(task);
  taskInput.value = "";
  renderTask();
}
