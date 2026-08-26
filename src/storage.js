import { todoArray } from "./createProject.js";
import { projectArray } from "./createProject.js";

// adding todo to local storage
function addTodoToStorage(todoArray) {
    localStorage.setItem('storageTodoArray',JSON.stringify(todoArray));
};

// adding project to local storage
function addProjectToStorage() {

};

// retrieving todos from local storage
function todoRetrieve() {
    let todoArray = JSON.parse(localStorage.getItem('storageTodoArray'));
    console.log(todoArray)
}

// trying to make a reusable function to check if a given key is present in the local
// storage and if it's not, then it'll do something. 
// something TBD. 
// function storageCheck(key) {
//     if (!localStorage.getItem(key)) {
//         addTodoToStorage(key);
//     } else {
//         console.log(localStorage);
//     };
// };

export {
    addTodoToStorage,
    addProjectToStorage,
    storageCheck,
};