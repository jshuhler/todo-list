import { todoArray } from "./createProject.js";
import { projectArray } from "./createProject.js";

// let retrievedTodoArray = [];

// adding todo to local storage
function addTodoToStorage(todoArray) {
    console.log(JSON.stringify(todoArray));
    localStorage.setItem('storageTodoArray',JSON.stringify(todoArray));
};

// adding project to local storage
function addProjectToStorage(projectArray) {
    localStorage.setItem('storageProjectArray',JSON.stringify(projectArray));
};

// retrieving todos from local storage
function todoRetrieve(todoArray) {
    console.log(todoArray)
    console.log(JSON.parse(localStorage.getItem('storageTodoArray')))
    const retrievedTodoArray = (JSON.parse(localStorage.getItem('storageTodoArray')))
    console.log(retrievedTodoArray)
    for (const todo of retrievedTodoArray) {
        todoArray.push(todo)
    }
    console.log(todoArray)
};

// retrieving projects from local storage
function projectRetrieve(projectArray) {
    console.log(projectArray)
    const retrievedProjectArray = JSON.parse(localStorage.getItem('storageProjectArray'));
    for (const project of retrievedProjectArray) {
        projectArray.push(project)
    }
    console.log(projectArray)
};

export {
    addTodoToStorage,
    addProjectToStorage,
    todoRetrieve,
    projectRetrieve,
};