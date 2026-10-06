const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskPriority = document.getElementById("taskPriority");
const tasks = document.getElementById("tasks");

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();
    const priority = taskPriority.value;

    if (title === "" || description === "") {
        alert("Please enter both a task title and description.");
        return;
    }

    if (priority === "") {
        alert("Please select a task priority.");
        return;
    }

    const newTask = document.createElement("div");
    newTask.className = "task";

    newTask.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>

        <label>Priority:</label>
        <span class="priority-label ${priority.toLowerCase()}">${priority}</span>

        <label>Status:</label>
        <select class="task-status">
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>
    `;

    tasks.appendChild(newTask);

    taskForm.reset();

    setupStatus(newTask.querySelector(".task-status"));
});

function setupStatus(statusSelect) {
    statusSelect.addEventListener("change", function () {
        const task = this.closest(".task");
        task.dataset.status = this.value;
    });
}

document.querySelectorAll(".task-status").forEach(setupStatus);
