// Creates a projectItem and appends it to the projectArray array

const projectArray = [];

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
    projectArray.push(newProject);
    return newProject;
};

export {
    projectArray,
    createProject,
}