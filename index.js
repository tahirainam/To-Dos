//javaScript logic for To-Do list will go here
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `<span>${taskInput.value}</span> <span class="delete" onclick="deleteTask(this)">✖</span>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}
//end here