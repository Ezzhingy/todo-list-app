import React from 'react';
import ReactDOM from 'react-dom';
import './project-modal.css';

import { project, task, allProjects } from '../../functions/factory';
import { allTasks } from '../../functions/factory';

import compareAsc from 'date-fns/compareAsc';


const ProjectModal = ({ isShowing, hide }) => {
    
    function submitProject (e) {
        e.preventDefault();
        const inputProject = document.getElementById('project-name');
        const newProject = project(inputProject.value, allProjects.count);
        allProjects.projectObj[inputProject.value] = newProject;
        inputProject.value = '';

        allProjects.count++;

        hide();
    }

    if (isShowing) {
        return (
            ReactDOM.createPortal(
                <React.Fragment>
                    <div className="modal-overlay"/>
                    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className="modal">
                            <div className="modal-header">
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <form className='project-form' onSubmit={submitProject}>
                                <label htmlFor="project-name">Project Name</label>
                                <input type="text" id="project-name"  maxLength={25} required/>
                                <button className='projectmodal-btn' type='submit'>add project</button>
                            </form>
                        </div>
                    </div>
                </React.Fragment>, document.body)
        )
    } else {
        return null;
    }
}

const TaskModal = ({ isShowing, hide }) => {
    
    function organizeTasks (project) {
        allProjects.projectObj[project].taskArray.sort(
            function(a, b) {
                if (a.priority === b.priority) {
                    return compareAsc(a.date, b.date);
                }
                return a.priority === 'yes' ? -1 : 1;
            });
    }

    function submitTask (e) {
        e.preventDefault();

        const currentProject = document.querySelector('.title').innerText;

        const inputTask = document.getElementById('task-name');
        const inputDate = document.getElementById('due-date');
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const description = document.getElementById('description');

        let tempDate = inputDate.value.split('-');
        if (tempDate[1] === '1') {
            tempDate[1] = '12';
        } else {
            tempDate[1] -= 1;
        }
    
        const date = new Date(tempDate[0], tempDate[1], tempDate[2]);

        const currentTask = task(inputTask.value, date, priority, description.value, allTasks.count);
        allProjects.projectObj[currentProject].taskArray.push(currentTask);
        organizeTasks(currentProject)

        allTasks.count++;

        inputTask.value = '';
        inputDate.value = '';
        description.value = '';
        hide();
        getTasks(currentProject);
    }

    const getTasks = (title) => {
        allProjects.projectObj[title].taskArray.forEach(task => 
            {
                allTasks.allTasksArray = [];
                if (task.title !== undefined) {
                    const taskArray = [];

                    taskArray.push(task.title);
                    taskArray.push(task.date);
                    taskArray.push(task.priority);
                    taskArray.push(task.description); 

                    allTasks.allTasksArray.push(taskArray);
                }
            }
        );        
    }

    if (isShowing) {
        return (
            ReactDOM.createPortal(
                <React.Fragment>
                    <div className="modal-overlay"/>
                    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <div className="modal">
                            <div className="modal-header">
                            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <form className="task-form" onSubmit={submitTask}>
                                <div className="input-container">
                                    <label htmlFor="task-name">Task Name</label>
                                    <input type="text" id="task-name" maxLength={25} required/>
                                </div>

                                <div className="input-container">
                                    <label htmlFor="due-date">Due Date</label>
                                    <input type="date" id="due-date" required/>
                                </div>

                                <div className="radio-container">
                                    <label>Priority</label>

                                    <label htmlFor="yes">Yes</label>
                                    <input type="radio" id="yes" name="priority" value="yes"/>

                                    <label htmlFor="no">No</label>
                                    <input type="radio" id="no" name="priority" value="no" defaultChecked/>
                                </div>

                                <div className="textarea-container">
                                    <label htmlFor="description">Description</label>
                                    <textarea id="description" name="description" rows="5" cols="30" maxLength={100} required></textarea>
                                </div>

                                <button className="taskmodal-btn" type="submit">Add Task</button>
                            </form>
                        </div>
                    </div>
                </React.Fragment>, document.body)
        )
    } else {
        return null;
    }
}

export { ProjectModal, TaskModal };