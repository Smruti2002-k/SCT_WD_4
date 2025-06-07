function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const dateTime = document.getElementById("taskDateTime").value;
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const list = document.getElementById("taskList");
  const li = document.createElement("li");
  li.className = "task";

  const taskSpan = document.createElement("span");
  taskSpan.innerHTML = `${taskText} <small>${dateTime}</small>`;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔️";
  completeBtn.onclick = () => li.classList.toggle("completed");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(taskSpan);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  document.getElementById("taskInput").value = "";
  document.getElementById("taskDateTime").value = "";
}
