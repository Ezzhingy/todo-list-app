import './styles/normalize.css';
import './styles/styles.css';

import { hideUnhide } from './functions/hideUnhideArrowsDOM';
import { showModal, getTaskInfo, getProjectInfo } from './functions/addTaskDOM';
import { addTasktoProject, whichProject, createProject } from './functions/applicationLogic'
import { project } from './functions/tasksProjectsLogic';
import { showNewProject } from './functions/addProjectDOM';

const allProjects = {0:project()};

showModal();

document.onclick = function (e) {
    hideUnhide(e);
}

const addTaskBtn = document.querySelector('.add-task')
addTaskBtn.onclick = function (e) {
    // need to find which project 'add task' btn is attached to
    const project = whichProject(e);
    const info = getTaskInfo();
    addTasktoProject(e, info);

    document.querySelector(".task-form").reset();
}

const addProjectBtn = document.querySelector('.add-pro');
addProjectBtn.onclick = function () {
    createProject(allProjects);
    const info = getProjectInfo();
    showNewProject(info);

    document.querySelector(".add-form").reset();

}

