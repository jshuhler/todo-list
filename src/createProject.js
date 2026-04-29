// Creates a projectItem and appends it to the projectList array

const projectList = [];

class Project {
    constructor(name) {
        if (!new.target) {
            throw Error("You must use the 'new' operator to call the constructor.");
        };
        this.name = name;
        this.id = crypto.randomUUID();
    };
};

function createProject(name) {
    const newProject = new Project(name)
    projectList.push(newProject);
};

export {
    projectList,
    createProject,
}