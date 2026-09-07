import { todoArray } from "./createProject.js";
import { projectArray } from "./createProject.js";

// let retrievedTodoArray = [];

// TODO STORAGE AND RETRIEVE

// adding todo to local storage
function addTodoToStorage(todoArray) {
    // console.log(JSON.stringify(todoArray));
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

// what if instead of just doing all this shit, I copied the todoRetrieve idea and then just adjusted 
// how/where the projectRetrieve was being called? It would only have to be called once, right? on initial
// page load? I think?
// function projectRetrieve(projectArray) {
//     console.log("projectArray before retrieve:", projectArray)
//     if (!localStorage.getItem("storageProjectArray")) {
//         return;
//     } else {
//         const retrievedProjectArray = JSON.parse(localStorage.getItem('storageProjectArray'));
//         for (const retrievedProject of retrievedProjectArray) {
//             console.log("retrievedProject:", retrievedProject)
//             if (projectArray = []) {
//                 projectArray.push(retrievedProject);
//             };
//             for (const project of projectArray) {
//                 if (retrievedProject.id !== project.id) {
//                     projectArray.push(retrievedProject);
//                 } else {
//                     continue;
//                 };
//             };
//         };
//     };
//     console.log("projectArray after full retrieve:", projectArray)
// };

function projectRetrieve(projectArray) {
    if (!localStorage.getItem("storageProjectArray")) {
        return;
    } else {
        const retrievedProjectArray = JSON.parse(localStorage.getItem("storageProjectArray"));
        for (const project of retrievedProjectArray) {
            projectArray.push(project);
        };
    };
};


export {
    addTodoToStorage,
    addProjectToStorage,
    todoRetrieve,
    projectRetrieve,
};