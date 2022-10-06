import './sidebar.css';

import { allProjects } from '../../functions/factory';
import React from 'react';

export const Sidebar = (props) => {

    const selectProject = e => {
        const title = document.querySelector('.title');
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'block';
        title.innerText = e.target.innerText;
        
        props.setFoo(props.foo + 1);
    }

    const resetProject = () => {
        const title = document.querySelector('.title');
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'none';
        title.innerText = 'todo list';
    }

    const pushX = e => {
        const deleteX = e.target.parentElement.querySelector('.sidebar-grid span');
        deleteX.classList.toggle("x");
    }

    const popX = e => {
        const deleteX = e.target.parentElement.querySelector('.sidebar-grid span');
        deleteX.classList.toggle("x");
    }
    
    const deleteProject = e => {
        for (let project of Object.values(allProjects.projectObj)) {
            if (project.hash == e.target.nextElementSibling.getAttribute('project-key')) {
                delete allProjects.projectObj[project.title];
            }
        }

        resetProject();
        
        props.setFoo(props.foo + 1);
    }

    return (
        <div className='sidebar-grid'>
            {Object.keys(allProjects.projectObj).map((project, index) => 
                <div key={index} className='project-x'>
                    <span onClick={deleteProject} onMouseOver={pushX} onMouseOut={popX}>&times;</span>
                    <button onClick={selectProject} onMouseOver={pushX} onMouseOut={popX} className='project-card' project-key={allProjects.projectObj[project].hash}>{project}</button>
                </div>
            )}
        </div>
    );
    
}