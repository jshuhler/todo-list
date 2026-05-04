// Creates a todoItem and appends it to the todoList array
const todoList = [];

class Todo {
    constructor(title,details,dueDate,project,priority,status) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.");
        };
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.project = project
        this.priority = priority;
        this.status = status;
        this.id = crypto.randomUUID();
    };
};

function createTodo(title,description,dueDate,priority,status) {
    const newTodo = new Todo(title,description,dueDate,priority,status)
    todoList.push(newTodo);
};

export { 
    todoList,
    createTodo,
};