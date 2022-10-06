import './main.css';

import { allProjects } from '../../functions/factory';
import { format } from 'date-fns';

import starFill from './star-fill.svg';


export const Main = (props) => {

    return (
        <div className='main-grid'>
            {props.titleRef.current !== null ? 
                props.titleRef.current.innerText !== 'todo list' ? 
                    Object.values(allProjects.projectObj[props.titleRef.current.innerText].taskArray).map((task, index) => 
                        <div className='task-card' key={index} task-key={index}>
                            <div className='task-header'>
                                <div>{task.title}</div>
                                <div className='task-header-right'>
                                    <div>{format(task.date, 'MMM dd yyyy')}</div>
                                    <div>
                                        {task.priority === 'yes' ? (<img className="star-img" src={starFill} alt="Priority Star" />) : null}
                                    </div>
                                </div>
                            </div>
                            <div className='description'>{task.description}</div>
                        </div>) : null
            : null}
        </div>
    );
}