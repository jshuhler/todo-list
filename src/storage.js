import { todoArray } from "./createProject.js";
import { projectArray } from "./createProject.js";

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
    // todoArray = [];
    console.log(todoArray)
    console.log(JSON.parse(localStorage.getItem('storageTodoArray')))
    todoArray = JSON.parse(localStorage.getItem('storageTodoArray'));
    console.log(todoArray)
    // console.log(todoArray)
};

// retrieving projects from local storage
function projectRetrieve(projectArray) {
    console.log(projectArray)
    projectArray = JSON.parse(localStorage.getItem('storageProjectArray'));
    console.log(projectArray)
};

export {
    addTodoToStorage,
    addProjectToStorage,
    todoRetrieve,
    projectRetrieve,
};