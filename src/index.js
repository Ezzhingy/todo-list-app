import './styles/normalize.css';
import './styles/styles.css';

import { hideUnhide } from './functions/hideUnhideArrowsDOM';
import { showModal, getTaskInfo, getProjectInfo, showNewTask } from './functions/addTaskDOM';
import { addTasktoProject, whichProject, createProject } from './functions/applicationLogic'
import { project } from './functions/tasksProjectsLogic';
import { showNewProject } from './functions/addProjectDOM';

const allProjects = {0:project()};

document.onclick = function (e) {
    hideUnhide(e);
    showModal(e);

    if (e.target.className === 'add-task') {
        const project = whichProject(e);
        const info = getTaskInfo(e);
        addTasktoProject(project, info, allProjects);
        showNewTask(allProjects);
    }
}

const addProjectBtn = document.querySelector('.add-pro');
addProjectBtn.onclick = function () {
    createProject(allProjects);
    const info = getProjectInfo();
    showNewProject(info);

    document.querySelector(".add-form").reset();
}

