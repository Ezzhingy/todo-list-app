import { project, todo } from "./tasksProjectsLogic";

export function addTasktoProject (e, info) {
    console.log('addtasktoproject');
}

export function whichProject (e) {
    console.log('whichproject')
}

export function createProject (allProjects) {
    const newProject = project();
    if (Object.keys(allProjects).length === 0) {
        allProjects['0'] = newProject
    } else {
        const lastKey = Object.keys(allProjects).pop();
        const newkey = +lastKey + 1;
        allProjects[newkey] = newProject;
    }

    return allProjects;
}