import { addToTodoDisplay, addProjectToSelection, addProjectsToEditSelection, findProjectIdOfTodo, populateEditDialog, } from "./displayControl.js";
import { projectArray } from "./createProject.js";

// Creates a todoItem and appends it to the todoArray array
const todoArray = [];

class Todo {
    constructor(title,details,dueDate,priority,projectId,status) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.");
        };
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        // this.project = project;
        this.priority = priority;
        this.projectId = projectId;
        this.status = "open";
        this.id = crypto.randomUUID();
        
    };
};

function createTodo(title,details,dueDate,priority,projectId) {
    const newTodo = new Todo(title,details,dueDate,priority,projectId)
    todoArray.push(newTodo);
};

// add listener to delete button on todo cards
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

// add listener to status toggle on todo cards
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
        // if I'm going to dim or strike thru the cards when I click them as done, I'm going to need to 
        // re-call the display function to remake the displayed list, right?
        // addToTodoDisplay(todoArray);
    });
};

// add listener to edit button on todo cards
function todoUpdateListener (todoEditButton, todo, editTodoDialog, projectArray, projectSelectId) {
    todoEditButton.addEventListener('click', () => {
        editTodoDialog.showModal();
        const todoToUpdate = todoArray.find((selectedTodo) => selectedTodo.id === todo.id);
        const index = todoArray.indexOf(todoToUpdate);
        addProjectsToEditSelection(projectArray);
        const projectIdOfTodo = findProjectIdOfTodo(todoToUpdate,projectArray);
        populateEditDialog(todoToUpdate,projectArray,projectIdOfTodo);
        todoUpdate(todoToUpdate);
    });
};

// 
function todoUpdate (todoToUpdate) {
    // take all of the values from the dialog
    // pass them back to the object identified in todoToUpdate ?
    console.log("You did it over here too.")
    console.log(todoToUpdate)
};

export { 
    todoArray,
    createTodo,
    todoStatusListener,
    todoDeleteListener,
    todoUpdateListener,
    todoUpdate,
};