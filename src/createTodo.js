class Todo {
    constructor(title,description,dueDate,priority,status) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.");
        };
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.id = crypto.randomUUID();
    };
};

function createTodo(title,description,dueDate,priority,status) {
    const newTodo = new Todo(title,description,dueDate,priority,status)
}

export { 
    createTodo
};