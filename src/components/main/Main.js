// generate data when buttons get clicked
// constantly render new setup onclick
// make a global static list holder

import React from 'react';
import './main.css';

import { allProjects, allTasks } from '../../functions/factory';


export const Main = (props) => {

    // const generateTaskArray = (el) => {
    //     let allTasksArray = [];

    //     if (el.current !== null && el.current.innerText !== "todo list") {

    //         document.addEventListener('click', () => {
    //             allProjects.projectObj[el.current.innerText].taskArray.forEach(task => 
    //                 {
    //                     console.log(task, 'task');
    //                     if (task.title !== undefined) {
    //                         const taskArray = [];

    //                         taskArray.push(task.title);
    //                         taskArray.push(task.date);
    //                         taskArray.push(task.priority);
    //                         taskArray.push(task.description); 

    //                         allTasksArray.push(taskArray);
    //                     }
                        
    //                 }
    //             ); 
    //         });        
    //     }
    //     return allTasksArray;
    // };


    return (
        <div className='main-grid'>
            {props.titleRef.current !== null ? 
                props.titleRef.current.innerText !== 'todo list' ? Object.values(allProjects.projectObj[props.titleRef.current.innerText].taskArray).map((task, index) => <div className='task-card' key={index} task-key={index}>
                <div>{task.title}</div>
                <div>{task.date}</div>
                <div>{task.priority}</div>
                <div>{task.description}</div>
                
                </div>) : null
            : null}
        </div>
    );
}