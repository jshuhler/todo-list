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
    console.log(todoArray)
    console.log(JSON.parse(localStorage.getItem('storageTodoArray')))

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

// retrieving projects from local storage
// function projectRetrieve(projectArray) {
//     console.log(projectArray)
    // if (!localStorage.getItem("storageProjectArray")) {
    //     return;
    // } else {
//         // projectArray = [];   
//         const retrievedProjectArray = JSON.parse(localStorage.getItem('storageProjectArray'));
//         console.log("retrievedProjectArray:", retrievedProjectArray)
//         console.log("projectArray:", projectArray)
//         for (const savedProject of retrievedProjectArray) {
//             console.log("savedProject.id:", savedProject.id)
//             for (const project of projectArray) {
//                 console.log("project.id:", project.id)
//             }
//             // projectArray.push(project)
//         };
//     };
//     console.log(projectArray)
// };

function projectRetrieve(projectArray) {
    console.log("projectArray before retrieve:", projectArray)
    if (!localStorage.getItem("storageProjectArray")) {
        return;
    } else {
        const retrievedProjectArray = JSON.parse(localStorage.getItem('storageProjectArray'));
        console.log("retrievedProjectArray:", retrievedProjectArray)
        projectArray = retrievedProjectArray
        console.log("projectArray after retrieve:", projectArray)
    }
}

export {
    addTodoToStorage,
    addProjectToStorage,
    todoRetrieve,
    projectRetrieve,
};