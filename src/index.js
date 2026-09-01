import "./styles.css";
import { createTodo, todoArray } from "./createTodo.js";
import { createProject, projectArray, createDefaultProject } from "./createProject.js";
import { addToTodoDisplay, addToProjectList } from "./displayControl.js";
import { projectRetrieve, todoRetrieve } from "./storage.js";

import "./displayControl.js"

// probably put all of the function calls for first load into 
// some kind of "onLoad" function to call them
createDefaultProject(); // if there is nothing in local storage, this should create the default project, else it pulls the projects out of storage and puts them into the projectArray
todoRetrieve(todoArray)
// projectRetrieve(projectArray)
console.log(todoArray)
console.log(projectArray)
addToTodoDisplay(todoArray);
addToProjectList(projectArray)