import { createTodo } from "./createTodo.js";

// DECLARING VARIABLES 
const addTodoButton = document.getElementById("add-task-button");


// OPEN NEW TODO DIALOG
addTodoButton.addEventListener('click', () => {
    dialog.showModal();
    console.log('you clicked the add todo item button');
});

// ADD TODO ITEM BUTTON EVENT LISTENER


// EXPORT
export { addTodoButton };