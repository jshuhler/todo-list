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

function deleteProject() {
    const projectToRemove = projectArray.find((selectedProject) => selectedProject.id === Project.id);
    const index = projectArray.indexOf(projectToRemove);
    if (index > -1) {
        projectList.splice(index, 1);
    };
};

export {
    projectArray,
    createProject,
    deleteProject,
}