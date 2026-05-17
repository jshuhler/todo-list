import { todoList, createTodo } from "./createTodo.js";
import { projectArray, createProject, deleteProject } from "./createProject.js";

// -------------------------------
// OPENING AND CLOSING THE NEW TODO DIALOG
// -------------------------------

// DECLARING VARIABLES FOR TODO DIALOG
const todoDialog = document.querySelector("dialog.todo-dialog");
const addTodoButton = document.getElementById("add-task-button");
const closeTodoDialog = document.querySelector(".todo-dialog-close");
const addTodoDialog = document.getElementById("add-todo-submit");
let todoTitle;
let todoDetails;
let todoDueDate;
let todoProject;
let todoPriority;

// OPEN NEW TODO DIALOG
addTodoButton.addEventListener('click', () => {
    todoDialog.showModal();
    console.log('add todo item button press');
});

// CLOSE NEW TODO DIALOG WITHOUT ADDING ITEM
closeTodoDialog.addEventListener('click', (e) => {
    todoDialog.close();
    e.preventDefault();
    console.log('close todo dialog button press');
});

// CREATE TODO ITEM AND ADD TO ARRAY
addTodoDialog.addEventListener('click', (e) => {
    e.preventDefault();
    todoTitle = document.getElementById("todo-List").value;
    todoDetails = document.getElementById("todo-details").value;
    todoDueDate = document.getElementById("todo-date").value;
    todoProject = document.getElementById("todo-project").value;
    let form = document.forms[0]; // getting the value out of the RadioNodeList value property
    let radioButtons = form.elements["priority"]; // getting the value out of the RadioNodeList value property
    todoPriority = radioButtons.value;
    createTodo(todoTitle,todoDetails,todoDueDate,todoProject,todoPriority);
    console.log(todoList);
    console.log('save todo item button press');
    todoDialog.close();
});

// CREATE NEW TODO CARD


// -------------------------------
// OPENING AND CLOSING THE NEW PROJECT DIALOG
// -------------------------------

// DECLARING VARIABLES FOR PROJECT DIALOG
const projectDialog = document.querySelector("dialog.project-dialog");
const addProjectButton = document.getElementById("add-project-button");
const closeProjectDialog = document.querySelector(".project-dialog-close");
const addProjectDialog = document.getElementById("add-project-submit");
const projectMenu = document.querySelector(".project-menu");
// let projectList;

// OPEN NEW PROJECT DIALOG
addProjectButton.addEventListener('click', () => {
    projectDialog.showModal();
    console.log('add project button press');
});

// CLOSE NEW PROJECT DIALOG WITHOUT ADDING PROJECT
closeProjectDialog.addEventListener('click', (e) => {
    projectDialog.close();
    e.preventDefault();
    console.log('close project dialog button press');
});

// CREATE NEW PROJECT, ADD TO PROJECT ARRAY, CALL ADD TO LIST FUNCTION
addProjectDialog.addEventListener('click', (e) => {
    e.preventDefault();
    const projectName = document.getElementById("project-name").value;
    createProject(projectName);
    console.log(projectName);
    console.log(projectArray)
    console.log('save project button press');
    projectDialog.close();
    addToProjectList(projectArray); // should just call this on the new project that I created, not the entire array. 
});

// ADD PROJECT AND DELETE BUTTON TO LEFT PANEL
function addToProjectList(projectArray) {
    const newProject = document.createElement("li"); // create list item to hold project List & delete button
    const projectTitle = document.createElement("span"); //create span for project name text
    newProject.appendChild(projectArray.name ); // add project List to project container
    projectTitle.textContent = projectArray.name;
    newProject.classList.add("menu-choice");
    projectMenu.appendChild(newProject);
    const projectDelete = document.createElement("span");
    projectDelete.classList.add("delete-button");
    newProject.appendChild(projectDelete);
    projectDelete.textContent = "×"; // need to add a data attribute to this button for projection deletion via unique ID
    console.log(projectArray.name)
    console.log(projectArray.id)
    projectDelete.setAttribute("data-id",projectArray.at(-1).id);
};

// CREATE DELETE BUTTON AND ADD EVENT LISTENER TO PROJECT DELETE BUTTON
const projectDeleteListen = () => {

};

// -------------------------------
// CHANGING THE SORT BY PROJECT
// -------------------------------

// DECLARING VARIABLES
