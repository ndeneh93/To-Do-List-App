document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");

    if (addButton && taskInput) {
        addButton.addEventListener("click", addTask);
        taskInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") addTask();
        });
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task element
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <i class="fas fa-check done"></i>
                <i class="fas fa-trash delete"></i>
            </div>
        `;

        // Add event listeners
        li.querySelector(".done").addEventListener("click", () => {
            li.classList.toggle("completed");
            li.querySelector(".done").style.color = li.classList.contains("completed") ? "gray" : "green";
        });

        li.querySelector(".delete").addEventListener("click", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";
    }
});
