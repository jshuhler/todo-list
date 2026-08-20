import { addToTodoDisplay } from "./displayControl.js";
import { projectArray } from "./createProject.js";
import { addToStorage } from "./storage.js";

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
    addToStorage(title);
};

if(!localStorage.getItem('title')) {
  addToStorage(title);
} else {
  console.log(localStorage);
}

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
    todoUpdate,
};