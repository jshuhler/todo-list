import { todoArray } from "./createProject";
import { projectArray } from "./createProject";

// adding todo to local storage
function addTodoToStorage(title) {
    const todoTitle = localStorage.setItem("title",title);
};

// adding project to local storage
function addProjectToStorage() {

};

// trying to make a reusable function to check if a given key is present in the local
// storage and if it's not, then it'll do something. 
// something TBD. 
function storageCheck(key) {
    if (!localStorage.getItem(key)) {
        addToStorage(key);
    } else {
        console.log(localStorage);
    };
};

export {
    addTodoToStorage,
    addProjectToStorage,
    storageCheck,
};