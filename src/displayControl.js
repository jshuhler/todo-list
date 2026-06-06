import { todoArray, createTodo } from "./createTodo.js";
import { projectArray, createProject, deleteProject } from "./createProject.js";

// -------------------------------
// OPENING AND CLOSING THE NEW TODO DIALOG
// -------------------------------

// DECLARING VARIABLES FOR TODO DIALOG
const todoDialog = document.querySelector("dialog.todo-dialog");
const addTodoButton = document.getElementById("add-task-button");
const closeTodoDialog = document.querySelector(".todo-dialog-close");
const addTodoDialog = document.getElementById("add-todo-submit");
const todoContainer = document.querySelector(".todo-container");
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

// CREATE TODO ITEM, ADD TO TODO ARRAY, CALL CREATE TODO CARD FUNCTION
addTodoDialog.addEventListener('click', (e) => {
    e.preventDefault();
    todoTitle = document.getElementById("todo-name").value;
    todoDetails = document.getElementById("todo-details").value;
    todoDueDate = document.getElementById("todo-date").value;
    todoProject = document.getElementById("todo-project").value;
    let form = document.forms[0]; // getting the value out of the RadioNodeList value property
    let radioButtons = form.elements["priority"]; // getting the value out of the RadioNodeList value property
    todoPriority = radioButtons.value;
    createTodo(todoTitle,todoDetails,todoDueDate,todoProject,todoPriority);
    console.log(todoArray);
    console.log('save todo item button press');
    todoDialog.close();
    // call create todo card function here
    addToTodoDisplay(todoArray);
});

// ADD NEW TODO CARD PSUEDOCODE
// 1. add a function to the + event listener that is called when the save button is clicked on the dialog
// 2. that function:
//  - clears the existing DOM of the todoContainer
//  - loops through the entire existing array of todos and remakes them visually
//  - will need to take in the current project and only print the current project todos on the page
//  - will be called from anywhere the current project is changed

// CREATE NEW TODO CARD 
function addToTodoDisplay(todoArray) {
    todoContainer.innerHTML = "";
    for (const todo of todoArray) {
        // entire todo item container
        const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            todoContainer.appendChild(todoItem);

        // status container - this will eventually need an event listener on the toggle to change status from open to closed
        const statusContainer = document.createElement("div");
            statusContainer.classList.add("status-container");
            todoItem.appendChild(statusContainer);

        // text container
        const textContainer = document.createElement("div");    
            textContainer.classList.add("text-container");
            todoItem.appendChild(textContainer);

        const todoTitleContainer = document.createElement("div");
            todoTitleContainer.classList.add("todo-title-container");
            todoTitleContainer.textContent = todo.title;
            textContainer.appendChild(todoTitleContainer);

        const todoDetailContainer = document.createElement("div");
            todoDetailContainer.classList.add("todo-detail-container");
            todoDetailContainer.textContent = todo.details;
            textContainer.appendChild(todoDetailContainer);

        // info container
        const infoContainer = document.createElement("div");
            infoContainer.classList.add("info-container");
            todoItem.appendChild(infoContainer);

        const infoTopContainer = document.createElement("div");
            infoTopContainer.classList.add("info-top-container");
            infoContainer.appendChild(infoTopContainer);

        const todoDateContainer = document.createElement("div");
            todoDateContainer.classList.add("todo-date-container");
            todoDateContainer.textContent = todo.dueDate;
            infoTopContainer.appendChild(todoDateContainer);

        // this is the element to append the listener to using a for in loop to handle deletions of specific todo items
        const todoTrashContainer = document.createElement("div");

        const infoBottomContainer = document.createElement("div");
            infoBottomContainer.classList.add("info-bottom-container");    
            infoContainer.appendChild(infoBottomContainer);

        const todoProjectContainer = document.createElement("div");
            todoProjectContainer.classList.add("todo-project-container");
            todoProjectContainer.textContent = "_PROJ NAME_";
            infoBottomContainer.appendChild(todoProjectContainer);
        
        const todoPriorityContainer = document.createElement("div");
            todoPriorityContainer.classList.add("todo-priority-container");
            if (todo.priority === "1") {
                todoPriorityContainer.textContent = "Low";
                todoPriorityContainer.classList.add("todo-priority-low-1");
            } else if (todo.priority === "2") {
                todoPriorityContainer.textContent = "Medium";
                todoPriorityContainer.classList.add("todo-priority-medium-2");
            } else if (todoPriority === "3") {
                todoPriorityContainer.textContent = "High";
                todoPriorityContainer.classList.add("todo-priority-high-3");
            };
            infoBottomContainer.appendChild(todoPriorityContainer);

        const todoDeleteButton = document.createElement("button");
            todoDeleteButton.classList.add("todo-delete-button");
            todoDeleteButton.setAttribute("data-id",todo.id);

            todoDeleteListener(todoDeleteButton, todo);
            
            const deleteTodoIcon = document.createElement("img");
            deleteTodoIcon.setAttribute("src","../src/img/trashcan.png");
            todoDeleteButton.appendChild(deleteTodoIcon);
            infoTopContainer.appendChild(todoDeleteButton)
    };
};

function todoDeleteListener (todoDeleteButton, todo) {
    todoDeleteButton.addEventListener('click', () => {
        console.log("todo delete button press")
        const todoToRemove = todoArray.find((selectedTodo) => selectedTodo.id === todo.id);
        const index = todoArray.indexOf(todoToRemove);
        if (index > -1) {
            todoArray.splice(index,1);
        };
        addToTodoDisplay(todoArray);
    });
};

// -------------------------------
// OPENING AND CLOSING THE NEW PROJECT DIALOG
// -------------------------------

// DECLARING VARIABLES FOR PROJECT DIALOG
const projectDialog = document.querySelector("dialog.project-dialog");
const addProjectButton = document.getElementById("add-project-button");
const closeProjectDialog = document.querySelector(".project-dialog-close");
const addProjectDialog = document.getElementById("add-project-submit");
const projectMenu = document.querySelector(".project-menu");
let project;

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

// CREATE NEW PROJECT, ADD TO PROJECT ARRAY, CALL ADD TO PROJECT LIST FUNCTION
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

// REFACTORED: ADD PROJECT AND A DELETE BUTTON TO LEFT PANEL
function addToProjectList(projectArray) {
    projectMenu.innerHTML = "";
    for (const project of projectArray) {
        const projectLine = document.createElement("li");
        const projectTitle = document.createElement("span");
        const projectDelete = document.createElement("span");

        // add projectLine to the entire projectMenu
        projectMenu.appendChild(projectLine);
        
        // add class to projectLine
        projectLine.classList.add("menu-choice");
        
        // add the name of the project to the projectTitle span
        projectTitle.textContent = project.name;
        // this is where to call the function for adding the event listener to 
        // each project name to change the display to show only todos within that project

        // add the x and class to the delete button span
        projectDelete.textContent = "×";
        projectDelete.classList.add("delete-button");

        // add the project title and the project delete button into the single line for the whole project
        projectLine.appendChild(projectTitle);
        projectLine.appendChild(projectDelete);
        for (const key in project) {
            // for every object in the project array, loop through and set the key with the name id to the data attribute for that delete button
            if (key === 'name') {
                continue;
            } else if (key === 'id') {
                projectDelete.setAttribute("data-id",project.id);
                projectDeleteListener(projectArray,projectDelete,project);
            };
        };
    };
};

function projectDeleteListener(projectArray, projectDelete, project) {
    projectDelete.addEventListener('click', () => {
        // console.log("project delete button press");
        const projectToRemove = projectArray.find((selectedProject) => selectedProject.id === project.id);
        // console.log(projectToRemove);
        const index = projectArray.indexOf(projectToRemove);
        // console.log(index);
        if (index > -1) {
            projectArray.splice(index,1);
        };
        addToProjectList(projectArray);
    });
};

// -------------------------------
// CHANGING THE SORT BY PROJECT
// -------------------------------
// this should probably call a function that is in the createTodo.js module. that should probably
// be renamed to todo.js 
// DECLARING VARIABLES
