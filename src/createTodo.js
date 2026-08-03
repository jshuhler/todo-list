import { addToTodoDisplay, addProjectToSelection, addProjectToEditSelection, populateEditDialog } from "./displayControl.js";
import { projectArray } from "./createProject.js";

// Creates a todoItem and appends it to the todoArray array
const todoArray = [];

class Todo {
    constructor(title,details,dueDate,project,priority,projectId,status) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.");
        };
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
        this.projectId = projectId;
        this.status = "open";
        this.id = crypto.randomUUID();
        
    };
};

function createTodo(title,details,dueDate,project,priority) {
    const newTodo = new Todo(title,details,dueDate,project,priority)
    todoArray.push(newTodo);
};

function todoDeleteListener (todoDeleteButton, todo) {
    todoDeleteButton.addEventListener('click', () => {
        const todoToRemove = todoArray.find((selectedTodo) => selectedTodo.id === todo.id);
        const index = todoArray.indexOf(todoToRemove);
        if (index > -1) {
            todoArray.splice(index,1);
        };
        addToTodoDisplay(todoArray);
    });
};

function todoStatusListener (todoCheckbox, todo) {
    todoCheckbox.addEventListener('click', () => {
        const todoStatusToChange = todoArray.find((selectedTodo) => selectedTodo.id === todo.id);
        const index = todoArray.indexOf(todoStatusToChange);
        if (todo.status === 'open') {
            console.log("the status is open right now, changing to closed");
            todo.status = 'closed';
        } else if (todo.status === 'closed') {
            console.log("the status is closed right now, changing to open");
            todo.status = 'open';
        };
        console.log(todoArray);
        // if I'm going to dim or strike thru the cards when I click them as done, I'm going to need to recall the display function to remake the displayed list, right?
        // addToTodoDisplay(todoArray);
    });
};

function todoUpdateListener (todoEditButton, todo, editTodoDialog, projectArray) {
    todoEditButton.addEventListener('click', () => {
        editTodoDialog.showModal();
        // add and call separate functions (in this module) to do the looking for the 
        // project ID dataset and looping through it
        // or just use addProjectToEditSelection for this? SOLID principles.
        const todoToUpdate = todoArray.find((selectedTodo) => selectedTodo.id === todo.id);
        console.log(todoToUpdate);
        const index = todoArray.indexOf(todoToUpdate);
        populateEditDialog(todoToUpdate)
        console.log(`index: ${index}`);
        console.log(`id of index: ${todoArray[index].id}`);
        console.log(`project id: ${projectArray}`);
        addProjectToEditSelection(projectArray);
        todoUpdate(todoToUpdate);
    });
};

function projectDataAttribute () {
    const p = document.querySelector(".edit-todo-form.select");
    p.setAttribute("data-project-id", project.id);
};

function todoUpdate (todoToUpdate) {
    console.log(todoToUpdate)
};

export { 
    todoArray,
    createTodo,
    todoStatusListener,
    todoDeleteListener,
    todoUpdateListener,
};