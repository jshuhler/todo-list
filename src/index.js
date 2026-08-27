import "./styles.css";
import { createTodo, todoArray } from "./createTodo.js";
import { createProject, creatProject } from "./createProject.js";
import { addToTodoDisplay } from "./displayControl.js";

import "./displayControl.js"

createProject("All Todos");
addToTodoDisplay(todoArray);
