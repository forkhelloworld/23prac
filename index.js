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
buttonAdd.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();

  const inputTask = document.querySelector("input");
  const text = inputTask.value;

  if (text) {
    updateTasks();
  } else {
    alert("Task cannot be empty");
  }
}

function updateTasks() {
  const tasks = document.querySelector("#tasks");
  const task = document.createElement("li");
  const deleteButton = document.createElement("button");

  task.textContent = text;
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", deleteTask);

  task.append(deleteButton);
  tasks.append(task);
}

function deleteTask(event) {
  event.target.parentNode.remove();
}
