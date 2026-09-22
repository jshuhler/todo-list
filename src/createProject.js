import { addToProjectList } from "./displayControl.js";
import { addProjectToStorage, projectRetrieve } from "./storage.js";

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
    addProjectToStorage(projectArray);
};

function createDefaultProject() {
    if (!localStorage.getItem("storageProjectArray")) {
        createProject("Inbox"); // I don't like that this is hard coded.
    } else {
        projectRetrieve(projectArray);
    }
    
}

export {
    projectArray,
    createProject,
    createDefaultProject,
};