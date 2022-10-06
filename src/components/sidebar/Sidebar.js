import './sidebar.css';

import { allProjects } from '../../functions/factory';

export const Sidebar = (props) => {

    const selectProject = e => {
        const title = document.querySelector('.title');
        const addTaskBtn = document.querySelector('.add-task-btn');
        addTaskBtn.style.display = 'block';
        title.innerText = e.target.innerText;
        
        props.setFoo(props.foo + 1);
    }

    return (
        <div className='sidebar-grid'>
            {Object.keys(allProjects.projectObj).map((project, i) => <button onClick={selectProject} className='project-card' key={i}>{project}</button>)}
        </div>
    );
    
}