/* 
Завдання: написати додаток “список справ”

Необхідний функціонал - форма вводу і кнопка, за натиснення на яку записаний у форму текст відображається елементом списку).

Опціональний функціонал (завдання з зірочкою): кожен елемент має кнопку “видалення”, за натиснення на яку елемент списку видаляється 
і зникає.

Ця задача потребує мислення в першу чергу про дані (інформацію від користувача, яка має десь зберігатись), 
і вже в другу чергу - про елементи, які рендеряться на екран. Спробуйте в першу чергу спиратись на дані, а потім синхронізовувати їх 
і елементи на екрані.

Стилістично оформити власним за смаком.
*/

const buttonAdd = document.querySelector("#addTask");
buttonAdd.addEventListener("click", updateView);
let taskList = [];
let liArray = [];

function updateView(event) {
  event.preventDefault();
  const inputTask = document.querySelector("input");
  const text = inputTask.value;
  inputTask.value = "";

  taskList.push(text);

  if (text) {
    updateTasks(taskList);
  } else {
    alert("Task cannot be empty");
  }
}

function createTasks(taskList) {
  liArray = [];
  let id = 1;
  for (text of taskList) {
    const task = document.createElement("li");
    const deleteButton = document.createElement("button");

    task.dataset.id = id;
    task.textContent = text;
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", deleteTask);
    task.append(deleteButton);
    liArray.push(task);
    id++;
  }
  return liArray;
}

function updateTasks(taskList) {
  const liArray = createTasks(taskList);
  const tasks = document.querySelector("#tasks");
  tasks.replaceChildren(...liArray);
}

function deleteTask(event) {
  elementId = event.target.parentNode.dataset.id;
  for (task of liArray) {
    if (task.dataset.id == elementId) {
      taskList.splice(elementId - 1, 1);
  
      break;
    }
  }

  updateTasks(taskList);
}
