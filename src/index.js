let todos = [];

let todoDataSection = document.getElementById("todo-data");
let saveButton = document.getElementById("save-todo");
let todoInputBar = document.getElementById("todo-input-bar");

todoInputBar.addEventListener("keyup", function toggleSaveButton() {
  let todoText = todoInputBar.value;
  if (todoText.length === 0) {
    if (saveButton.classList.contains("disabled")) return;
    saveButton.classList.add("disabled");
  } else if (saveButton.classList.contains("disabled")) {
    saveButton.classList.remove("disabled");
  }
});

saveButton.addEventListener("click", function getTextAndAddTodo() {
  let todoText = todoInputBar.value;
  if (todoText.length === 0) return;
  todos.push(todoText);
  addTodo(todoText, todos.length);
  todoInputBar.value = "";
});

function addTodo(todoData, todoCount) {
  let rowDiv = document.createElement("div");
  let todoItem = document.createElement("div");
  let todoNumber = document.createElement("div");
  let todoDetail = document.createElement("div");
  let todoStatus = document.createElement("div");
  let todoActions = document.createElement("div");
  let deleteButton = document.createElement("button");
  let finishedButton = document.createElement("button");
  let hr = document.createElement("hr");

  rowDiv.classList.add("row");
  todoItem.classList.add(
    "todo-item",
    "d-flex",
    "flex-row",
    "justify-content-between",
    "align-items-center"
  );

  todoNumber.classList.add("todo-no");
  todoDetail.classList.add("todo-detail", "text-muted");
  todoStatus.classList.add("todo-status", "text-muted");
  todoActions.classList.add(
    "todo-actions",
    "d-flex",
    "justify-content-start",
    "gap-2"
  );
  deleteButton.classList.add("btn", "btn-danger");
  finishedButton.classList.add("btn", "btn-success");

  todoNumber.textContent = `${todoCount}`;
  todoDetail.textContent = todoData;
  todoStatus.textContent = "In Progress";
  deleteButton.textContent = "Delete";
  finishedButton.textContent = "Finished";

  todoActions.appendChild(deleteButton);
  todoActions.appendChild(finishedButton);

  todoItem.appendChild(todoNumber);
  todoItem.appendChild(todoDetail);
  todoItem.appendChild(todoStatus);
  todoItem.appendChild(todoActions);

  rowDiv.appendChild(todoItem);
  rowDiv.appendChild(hr);

  todoDataSection.appendChild(rowDiv);
}
