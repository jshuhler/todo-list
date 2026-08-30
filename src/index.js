import "./styles.css";
import { createTodo, todoArray } from "./createTodo.js";
import { createProject, projectArray, createDefaultProject } from "./createProject.js";
import { addToTodoDisplay, addToProjectList } from "./displayControl.js";
import { todoRetrieve } from "./storage.js";

import "./displayControl.js"

// probably put all of the function calls for first load into 
// some kind of "onLoad" function to call them
createDefaultProject();
todoRetrieve(todoArray)
console.log(todoArray)
console.log(projectArray)
addToTodoDisplay(todoArray);
addToProjectList(projectArray)