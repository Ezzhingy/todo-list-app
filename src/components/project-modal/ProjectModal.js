import React from 'react';
import ReactDOM from 'react-dom';
import './project-modal.css';

import { project, task, allProjects } from '../../functions/factory';
import { allTasks } from '../../functions/factory';


const ProjectModal = ({ isShowing, hide }) => {
    
    function submitProject (e) {
        e.preventDefault();
        const inputProject = document.getElementById('project-name');
        const newProject = project(inputProject.value);
        allProjects.projectObj[inputProject.value] = newProject;
        inputProject.value = '';
        hide();
        // console.log(allProjects.projectObj);
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
                                <input type="text" id="project-name" required/>
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
    
    function submitTask (e) {
        e.preventDefault();

        const currentProject = document.querySelector('.title').innerText;

        const inputTask = document.getElementById('task-name');
        const inputDate = document.getElementById('due-date');
        const priority = document.querySelector('input[name="priority"]:checked').value;
        const description = document.getElementById('description');

        const currentTask = task(inputTask.value, inputDate.value, priority, description.value);
        allProjects.projectObj[currentProject].taskArray.push(currentTask);

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
                                    <input type="text" id="task-name" required/>
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
                                    <textarea id="description" name="description" rows="5" cols="30" required></textarea>
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