// Creates a todoItem and appends it to the todoArray array
const todoArray = [];

class Todo {
    constructor(title,details,dueDate,project,priority,status) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.");
        };
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
        this.status = "open";
        this.id = crypto.randomUUID();
    };
};

function createTodo(title,description,dueDate,priority,status) {
    const newTodo = new Todo(title,description,dueDate,priority,status)
    todoArray.push(newTodo);
};

export { 
    todoArray,
    createTodo,
};