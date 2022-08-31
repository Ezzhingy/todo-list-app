import { project, todo } from "./tasksProjectsLogic";

import compareAsc from 'date-fns/compareAsc';


export function addTasktoProject (project, info, allProjects) {
    const tempDate = info.dueDate.split('-');
    if (tempDate[1] === '1') {
        tempDate[1] === '12';
    } else {
        tempDate[1] -= 1;
    }
    const date = new Date(tempDate[0], tempDate[1], tempDate[2]);
    const newTask = todo(info.taskName, date, info.prio, info.description);
    allProjects[project].addTodo(newTask);
}

export function whichProject (e) {
    // returns num indicating placement of project in global object
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

export function organizeTasks (allProjects, project) {
    const arrayTasks = allProjects[project].getTodo()
    arrayTasks.sort(
        function(a, b) {
            if (a.priority === b.priority) {
                return compareAsc(a.dueDate, b.dueDate);
            }
            return a.priority === 'yes' ? -1 : 1;
        });
    return arrayTasks;
}