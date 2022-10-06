import { React, useState } from 'react';
import './sidebar.css';

import { allProjects, allTasks } from '../../functions/factory';
import { Main } from '../main/Main';


export const Sidebar = (props) => {

    
    const getTasks = (e) => {
        // allProjects.projectObj[e.target.innerText].taskArray.forEach(task => 
        //     {
        //         allTasks.allTasksArray = [];
        //         if (task.title !== undefined) {
        //             const taskArray = [];

        //             taskArray.push(task.title);
        //             taskArray.push(task.date);
        //             taskArray.push(task.priority);
        //             taskArray.push(task.description); 

        //             allTasks.allTasksArray.push(taskArray);

        //             console.log(allProjects.projectObj[e.target.innerText].taskArray)
        //         }
        //     }
        // );        
    }

    const selectProject = e => {
        const title = document.querySelector('.title');
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'block';
        title.innerText = e.target.innerText;
        
        getTasks(e);
        props.setFoo(props.foo + 1);
    }

    return (
        <div className='sidebar-grid'>
            {Object.keys(allProjects.projectObj).map((project, i) => <button onClick={selectProject} className='project-card' key={i}>{project}</button>)}
        </div>
    );
    
}