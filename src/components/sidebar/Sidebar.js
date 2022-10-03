import React from 'react';
import './sidebar.css';

import { project, allProjects } from '../../functions/factory';


export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='sidebar-grid'>
                {Object.keys(allProjects.projectObj).map((project, i) => <button className='project-card' key={i}>{project}</button>)}
            </div>
        );
    }
}