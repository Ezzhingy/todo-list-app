import './main.css';

import { allProjects } from '../../functions/factory';
import { format } from 'date-fns';

import starFill from './star-fill.svg';
import deleteTaskImg from './checkbox-blank-circle-outline.svg';

import { useRef, useState } from 'react';


export const Main = (props) => {

    const taskRef = useRef(null);
    const [foo, setFoo] = useState(0);

    function deleteTask (e) {
        for (let task of allProjects.projectObj[props.titleRef.current.innerText].taskArray) {
            if (task.hash == e.target.parentElement.parentElement.parentElement.getAttribute('task-key')) {
                const index = allProjects.projectObj[props.titleRef.current.innerText].taskArray.indexOf(task);
                allProjects.projectObj[props.titleRef.current.innerText].taskArray.splice(index, 1);
                setFoo(foo + 1);
            }
        }  
        localStorage.setItem('projects', JSON.stringify(allProjects.projectObj));      
    }

    return (
        <div className='main-grid'>
            {props.titleRef.current !== null ?
                props.titleRef.current.innerText !== 'todo list' && props.titleRef.current.innerText in allProjects.projectObj ? 
                    Object.values(allProjects.projectObj[props.titleRef.current.innerText].taskArray).map((task, index) => 
                        <div ref={taskRef} className='task-card' key={index} task-key={task.hash}>
                            <div className='task-header'>
                                <div className='task-header-left'>
                                    <img className='trash-task-img' src={deleteTaskImg} onClick={(e) => deleteTask(e, taskRef)} alt="Delete Task Image" />
                                    {task.title}
                                </div>
                                <div className='task-header-right'>
                                    <div>{format(task.date, 'MMM dd yyyy')}</div>
                                    <div>
                                        {task.priority === 'yes' ? (<img className="star-img" src={starFill} alt="Priority Star Image" />) : null}
                                    </div>
                                </div>
                            </div>
                            <div className='description'>{task.description}</div>
                        </div>) : null
            : null}
        </div>
    );
}