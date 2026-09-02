import { todoArray } from "./createProject.js";
import { projectArray } from "./createProject.js";

// let retrievedTodoArray = [];

// TODO STORAGE AND RETRIEVE

// adding todo to local storage
function addTodoToStorage(todoArray) {
    console.log(JSON.stringify(todoArray));
    localStorage.setItem('storageTodoArray',JSON.stringify(todoArray));
};

// retrieving todos from local storage
function todoRetrieve(todoArray) {
    if (!localStorage.getItem("storageTodoArray")) {
        return;
    } else {
        const retrievedTodoArray = (JSON.parse(localStorage.getItem('storageTodoArray')));
        for (const todo of retrievedTodoArray) {
            todoArray.push(todo);
        };
    };
};

// PROJECT STORAGE AND RETRIEVE

// adding project to local storage
function addProjectToStorage(projectArray) {
    localStorage.setItem('storageProjectArray',JSON.stringify(projectArray));
};

function projectRetrieve(projectArray) {
    console.log("projectArray before retrieve:", projectArray)
    if (!localStorage.getItem("storageProjectArray")) {
        return;
    } else {
        const retrievedProjectArray = JSON.parse(localStorage.getItem('storageProjectArray'));
        for (const retrievedProject of retrievedProjectArray) {
            console.log("retrievedProject:", retrievedProject)
            for (const project of projectArray) {
                if (retrievedProject.id === project.id) {
                    return;
                } else {
                    projectArray.push(retrievedProject);
                };
            };
        };
    };
};

export {
    addTodoToStorage,
    addProjectToStorage,
    todoRetrieve,
    projectRetrieve,
};