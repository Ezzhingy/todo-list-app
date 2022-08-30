import { project, todo } from "./tasksProjectsLogic";

export function addTasktoProject (project, info, allProjects) {
    const newTask = todo(info['taskName'], info['dueDate'], info['prio'], info['description']);
    allProjects[project].addTodo(newTask);
}

export function whichProject (e) {
    const projectNum = e.target.getAttribute('data-key');
    return projectNum;
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