function addTask() {

  // Get input value
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  // Don't add empty tasks
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create new list item
  let li = document.createElement("li");

  li.innerText = taskText;

  // Click task to mark completed
  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  // Create delete button
  let deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";

  deleteButton.onclick = function (event) {
    event.stopPropagation();
    li.remove();
  };

  // Add delete button to li
  li.appendChild(deleteButton);

  // Add li to list
  document.getElementById("taskList").appendChild(li);

  // Clear input
  input.value = "";
}