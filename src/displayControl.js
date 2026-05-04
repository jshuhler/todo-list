import { todoList, createTodo } from "./createTodo.js";

// DECLARING VARIABLES 
const dialog = document.querySelector("dialog");
const addTodoButton = document.getElementById("add-task-button");
const closeTodoDialog = document.getElementById("close-todo-submit");
const addTodoDialog = document.getElementById("add-todo-submit");
let todoTitle;
let todoDetails;
let todoDueDate;
let todoProject;
let todoPriority;

// OPEN NEW TODO DIALOG
addTodoButton.addEventListener('click', () => {
    dialog.showModal();
    console.log('you clicked the add todo item button');
});

// CLOSE NEW TODO DIALOG WITHOUT ADDING ITEM
closeTodoDialog.addEventListener('click', (e) => {
    dialog.close();
    e.preventDefault();
    console.log('you clicked the close dialog button');
});

// CREATE TODO ITEM AND ADD TO ARRAY
addTodoDialog.addEventListener('click', (e) => {
    e.preventDefault();
    todoTitle = document.getElementById("todo-name").value;
    todoDetails = document.getElementById("todo-details").value;
    todoDueDate = document.getElementById("todo-date").value;
    todoProject = document.getElementById("todo-project").value;
    let form = document.forms[0];
    let radioButtons = form.elements["priority"];
    todoPriority = radioButtons.value;
    createTodo(todoTitle,todoDetails,todoDueDate,todoProject,todoPriority);
    console.log(todoList);
    dialog.close();
});