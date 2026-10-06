const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const tasks = document.getElementById("tasks");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        alert("Please enter both a task title and description.");
        return;
    }

    const newTask = document.createElement("div");
    newTask.className = "task";

    newTask.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
    `;

    tasks.appendChild(newTask);

    taskForm.reset();
});