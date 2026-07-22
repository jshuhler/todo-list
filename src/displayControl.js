import { todoArray, createTodo, todoStatusListener, todoDeleteListener, todoUpdateListener } from "./createTodo.js";
import { projectArray, createProject, deleteProject, projectDeleteListener } from "./createProject.js";
import trashcan from "./img/trashcan.png";
import pencil from "./img/pencil.png";
import pencil_edit from "./img/pencil_edit.png";

// --------------------------------------- //
// OPENING AND CLOSING THE NEW TODO DIALOG //
// --------------------------------------- //

// DECLARING VARIABLES FOR TODO DIALOG
const todoForm = document.querySelector(".add-todo-form")
const todoDialog = document.querySelector("dialog.todo-dialog");
const addTodoButton = document.getElementById("add-task-button");
const closeTodoDialog = document.querySelector(".todo-dialog-close");

const addTodoDialog = document.querySelector(".add-todo-form");
// const addTodoDialog = document.getElementById("add-todo-submit");

const todoContainer = document.querySelector(".todo-container");
let todoTitle;
let todoDetails;
let todoDueDate;
let todoProject;
let todoPriority;

// OPEN NEW TODO DIALOG
addTodoButton.addEventListener('click', () => {
    todoForm.reset();
    todoDialog.showModal();
    addProjectToSelection(projectArray);
});

// CLOSE NEW TODO DIALOG WITHOUT ADDING ITEM
closeTodoDialog.addEventListener('click', (e) => {
    todoDialog.close();
    e.preventDefault();
});

// CREATE TODO ITEM, ADD TO TODO ARRAY, CALL CREATE TODO CARD FUNCTION
// think about moving this to createTodo.js maybe
addTodoDialog.addEventListener('submit', (e) => {
    e.preventDefault();
    todoTitle = document.getElementById("todo-name").value;
    todoDetails = document.getElementById("todo-details").value;
    todoDueDate = document.getElementById("todo-date").value;
    todoProject = document.getElementById("todo-project").value;

    let form = document.forms[0]; // getting the value out of the RadioNodeList value property
    let radioButtons = form.elements["priority"]; // getting the value out of the RadioNodeList value property
    todoPriority = radioButtons.value;
    createTodo(todoTitle,todoDetails,todoDueDate,todoProject,todoPriority);
    todoDialog.close();

    addToTodoDisplay(todoArray);
});

// CREATE NEW TODO CARD FUNCTION
function addToTodoDisplay(todoArray,todo) {
    // add an if statement here to determine if the project array is empty or not
    // if it's empty, it should show the "click the button" message, probably by adding a class?
    // if it's not empty, it should do the below stuff
    todoContainer.innerHTML = "";
    for (const todo of todoArray) {
        // entire todo item container
        const todoItem = document.createElement("div");
            todoItem.classList.add("todo-item");
            todoContainer.appendChild(todoItem);
            // call update function here

        // status container - this will eventually need an event listener on the toggle to change status from open to closed
        const statusContainer = document.createElement("div");
            statusContainer.classList.add("status-container");
            todoItem.appendChild(statusContainer);

        const todoCheckbox = document.createElement("input");
            todoCheckbox.classList.add("todo-checkbox");
            todoCheckbox.setAttribute("type","checkbox");
            if (todo.status === 'closed') {
                todoCheckbox.toggleAttribute("checked");
            }
            statusContainer.appendChild(todoCheckbox);
            todoStatusListener(todoCheckbox,todo);

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

        // info top container
        const infoTopContainer = document.createElement("div");
            infoTopContainer.classList.add("info-top-container");
            infoContainer.appendChild(infoTopContainer);

        const todoDateContainer = document.createElement("div");
            todoDateContainer.classList.add("todo-date-container");
            todoDateContainer.textContent = todo.dueDate;
            infoTopContainer.appendChild(todoDateContainer);

        const todoPriorityContainer = document.createElement("div");
            todoPriorityContainer.classList.add("todo-priority-container");
            if (todo.priority === '1') {
                todoPriorityContainer.textContent = "Low";
                todoPriorityContainer.classList.add("todo-priority-low-1");
            } else if (todo.priority === '2') {
                todoPriorityContainer.textContent = "Medium";
                todoPriorityContainer.classList.add("todo-priority-medium-2");
            } else if (todo.priority === '3') {
                todoPriorityContainer.textContent = "High";
                todoPriorityContainer.classList.add("todo-priority-high-3");
            };
            infoTopContainer.appendChild(todoPriorityContainer);

        // info bottom container
        const infoBottomContainer = document.createElement("div");
            infoBottomContainer.classList.add("info-bottom-container");    
            infoContainer.appendChild(infoBottomContainer);

        const todoProjectContainer = document.createElement("div");
            todoProjectContainer.classList.add("todo-project-container");
            todoProjectContainer.textContent = todo.project;
            infoBottomContainer.appendChild(todoProjectContainer);
        
        const iconContainer = document.createElement("div");
            iconContainer.classList.add("icon-container");
            todoItem.appendChild(iconContainer);

        // delete button
        const todoTrashContainer = document.createElement("div");
            todoTrashContainer.classList.add("todo-trash-container");
            iconContainer.appendChild(todoTrashContainer);

        const todoDeleteButton = document.createElement("button");
            todoDeleteButton.classList.add("todo-delete-button");
            todoDeleteButton.setAttribute("data-id",todo.id);

            todoDeleteListener(todoDeleteButton, todo);                         
            
        const deleteTodoIcon = document.createElement("img");
            deleteTodoIcon.src = trashcan;
            todoDeleteButton.appendChild(deleteTodoIcon);
            todoTrashContainer.appendChild(todoDeleteButton);

        // edit button
        const todoEditContainer = document.createElement("div");
            todoEditContainer.classList.add("todo-edit-container");
            iconContainer.appendChild(todoEditContainer);
        
        const todoEditButton = document.createElement("button");
            todoEditButton.classList.add("todo-edit-button");
            todoEditButton.setAttribute("data-id",todo.id);

            todoUpdateListener(todoEditButton, todo, editTodoDialog);

        const editTodoIcon = document.createElement("img");
            editTodoIcon.src = pencil_edit;
            todoEditButton.appendChild(editTodoIcon);
            todoEditContainer.appendChild(todoEditButton);
    };
    console.log(todoArray)
};

// ------------------------------------------ //
// OPENING AND CLOSING THE NEW PROJECT DIALOG //
// ------------------------------------------ //

// DECLARING VARIABLES FOR PROJECT DIALOG
const projectDialog = document.querySelector("dialog.project-dialog");
const addProjectButton = document.getElementById("add-project-button");
const closeProjectDialog = document.querySelector(".project-dialog-close");
const addProjectDialog = document.querySelector(".add-project-form");
// const addProjectDialog = document.getElementById("add-project-submit");
const projectMenu = document.querySelector(".project-menu");
let project;

// OPEN NEW PROJECT DIALOG
addProjectButton.addEventListener('click', () => {
    projectDialog.showModal();
});

// CLOSE NEW PROJECT DIALOG WITHOUT ADDING PROJECT
closeProjectDialog.addEventListener('click', (e) => {
    projectDialog.close();
    e.preventDefault();
});

// CREATE NEW PROJECT, ADD TO PROJECT ARRAY, CALL ADD TO PROJECT LIST FUNCTION
addProjectDialog.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectName = document.getElementById("project-name").value;
    createProject(projectName);
    projectDialog.close();
    addToProjectList(projectArray);  
});

// ADD PROJECT NAME AND A DELETE BUTTON TO LEFT PANEL
function addToProjectList(projectArray) {
    projectMenu.innerHTML = "";
    for (const project of projectArray) {
        if (project.name === "All Todos") {
            continue
        } else {
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
};

// ------------------------------------------------------------------- //
// POPULATING PROJECT SELECT FROM PROJECTARRAY WHEN ADDING A TODO ITEM //
// ------------------------------------------------------------------- //

// iterate through the projectArray object, pulling out the name key, and adding the value to the dialog
const projectSelectList = document.getElementById("todo-project");

function addProjectToSelection(projectArray) {
    // clear entire Project select list on the create todo dialog
    projectSelectList.innerHTML = "";

    // create the placeholder text for the project select list
    const defaultProjectOption = document.createElement("option");
    defaultProjectOption.setAttribute("value","");
    defaultProjectOption.disabled = true;
    defaultProjectOption.selected = true;
    defaultProjectOption.textContent = "Choose a Project";
    projectSelectList.appendChild(defaultProjectOption);

    // loop through the projectArray and add each project there to the select list
    for (const project of projectArray) {
        const projectOption = document.createElement("option");
        projectOption.setAttribute("value",project.name);
        projectOption.textContent = project.name;
        projectSelectList.appendChild(projectOption);
    };
    console.log(projectArray);
};

// ------------------ //
// EDITING TODO ITEMS //
// ------------------ //

// DECLARING VARIABLES FOR EDITING TODO DIALOG
const editTodoForm = document.querySelector(".edit-todo-form");
const editTodoDialog = document.querySelector(".edit-todo-dialog");
const editTodoButton = document.getElementById("edit-todo-update");
const editCloseTodoDialog = document.querySelector(".edit-todo-dialog-close");

// CLOSE EDIT TODO DIALOG WITHOUT ADDING ITEM
editCloseTodoDialog.addEventListener('click', (e) => {
    editTodoDialog.close();
    e.preventDefault();
});

// ------------------------------- //
// CHANGING THE SORT BY PROJECT    //
// ------------------------------- //
// this should probably call a function that is in the createTodo.js module. that should probably
// be renamed to todo.js 

// maybe I could make some kind of generic "sort" function that looks for whatever thing is selected
// like the project, All Todos, Due today or Due This Week and just call the function from there?

// DECLARING VARIABLES

export {
    addToProjectList,
    addToTodoDisplay,
    addProjectToSelection,
};