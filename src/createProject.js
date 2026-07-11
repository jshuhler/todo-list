import { addToProjectList } from "./displayControl.js";

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

function projectDeleteListener(projectArray, projectDelete, project) {
    projectDelete.addEventListener('click', () => {
        // console.log("project delete button press");
        const projectToRemove = projectArray.find((selectedProject) => selectedProject.id === project.id);
        // console.log(projectToRemove);
        const index = projectArray.indexOf(projectToRemove);
        // console.log(index);
        if (index > -1) {
            projectArray.splice(index,1);
        };
        addToProjectList(projectArray);
    });
};

export {
    projectArray,
    createProject,
    projectDeleteListener,
};