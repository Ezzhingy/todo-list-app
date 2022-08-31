import './styles/normalize.css';
import './styles/styles.css';
import './styles/table.css';
import './styles/checkbox.css';

import { hideUnhidePro, hideUnhideTask } from './functions/hideUnhideArrowsDOM';
import { getTaskInfo, showNewTask, removeTaskDOM } from './functions/addTaskDOM';
import { addTasktoProject, whichProject, createProject, organizeTasks, removeTask, removePro, updateProTitle } from './functions/applicationLogic'
import { project, todo } from './functions/tasksProjectsLogic';
import { getProjectInfo, removeProDOM, showNewProject, getTitleDOM } from './functions/addProjectDOM';
import { showModal } from './functions/addModalDOM';
import { populateStorage, retrieveStorage, retrieveTitles } from './functions/storage';

import compareAsc from 'date-fns/compareAsc';


let allProjects = {0:project()};

const data = retrieveStorage();
if (data) {
    allProjects = {};
    const allTitles = retrieveTitles().split(',');
    let count = 0;
    for (let [index, arrayTasks] of Object.entries(data)) {
        const pro = project(allTitles[count]);
        
        for (let t of arrayTasks) {
            const tempDate = t.dueDate.slice(0,10).split('-');
            if (tempDate[1] === '1') {
                tempDate[1] === '12';
            } else {
                tempDate[1] -= 1;
            }
            const date = new Date(tempDate[0], tempDate[1], tempDate[2]);
            t.dueDate = date;
            const task = todo(t.taskName, date, t.priority, t.description, t.index)
            pro.addTodo(task);
        }

        allProjects[count] = pro;
        count++;

        const sortedTasks = arrayTasks.sort(
            function(a, b) {
                if (a.priority === b.priority) {
                    return compareAsc(a.dueDate, b.dueDate);
                }
                return a.priority === 'yes' ? -1 : 1;
            }
        );
        if (index !== '0') {
            showNewProject(pro.title)
        }

        showNewTask(sortedTasks, index);
    }
}

document.onclick = function (e) {
    hideUnhidePro(e);
    hideUnhideTask(e);
    showModal(e);

    if (e.target.className === 'add-task') {
        const project = whichProject(e);
        const info = getTaskInfo(e);
        addTasktoProject(project, info, allProjects);
        const arrayTasks = organizeTasks(allProjects, project);
        showNewTask(arrayTasks, project);

        document.querySelectorAll('.task-form').forEach(task => {
            task.reset();
        });

        populateStorage(allProjects);
    }

    if (e.target.className === 'remove-task-img') {
        const indexProjectArray = removeTaskDOM(e);
        removeTask(indexProjectArray, allProjects);
        populateStorage(allProjects);
    }

    if (e.target.className === 'remove-pro-img') {
        const project = removeProDOM(e);
        removePro(project, allProjects);
        populateStorage(allProjects);
    }
}

const addProjectBtn = document.querySelector('.add-pro');
addProjectBtn.onclick = function () {
    const info = getProjectInfo();
    createProject(info, allProjects);
    showNewProject(info);
    populateStorage(allProjects);

    document.querySelector(".add-form").reset();
}

const editableTitles = document.querySelectorAll('.pro-container .editable');
editableTitles.forEach(editableTitle => {
    editableTitle.oninput = function (e) {

        const indexValueArray = getTitleDOM(e);
        updateProTitle(indexValueArray, allProjects);
        populateStorage(allProjects);
    }
})


