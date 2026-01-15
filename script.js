const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
 e.preventDefault();

 const taskText = input.value;

 const li = document.createElement("li");
 li.textContent = taskText;

 li.addEventListener("click", function () {
   li.classList.toggle("completed");
 });

 const deleteBtn = document.createElement("button");
 deleteBtn.textContent = "X";

 deleteBtn.addEventListener("click", function () {
   li.remove();
 });

 li.appendChild(deleteBtn);
 list.appendChild(li);

 input.value = "";
});