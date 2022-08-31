import './styles/normalize.css';
import './styles/styles.css';
import './styles/table.css';
import './styles/checkbox.css';

import { hideUnhidePro, hideUnhideTask } from './functions/hideUnhideArrowsDOM';
import { getTaskInfo, showNewTask, removeTaskDOM } from './functions/addTaskDOM';
import { addTasktoProject, whichProject, createProject, organizeTasks, removeTask, removePro } from './functions/applicationLogic'
import { project } from './functions/tasksProjectsLogic';
import { getProjectInfo, removeProDOM, showNewProject } from './functions/addProjectDOM';
import { showModal } from './functions/addModalDOM';
import { formDate } from './functions/setFormDateDOM';

const allProjects = {0:project()};

document.onclick = function (e) {
    hideUnhidePro(e);
    hideUnhideTask(e);
    showModal(e);
    formDate();

    if (e.target.className === 'add-task') {
        const project = whichProject(e);
        const info = getTaskInfo(e);
        addTasktoProject(project, info, allProjects);
        const arrayTasks = organizeTasks(allProjects, project);
        showNewTask(arrayTasks, project);

        document.querySelectorAll('.task-form').forEach(task => {
            task.reset();
        });
    }

    if (e.target.className === 'remove-task-img') {
        const indexProjectArray = removeTaskDOM(e);
        removeTask(indexProjectArray, allProjects);
    }

    if (e.target.className === 'remove-pro-img') {
        const project = removeProDOM(e);
        removePro(project, allProjects);
    }
}

const addProjectBtn = document.querySelector('.add-pro');
addProjectBtn.onclick = function () {
    createProject(allProjects);
    const info = getProjectInfo();
    showNewProject(info);

    document.querySelector(".add-form").reset();
}


