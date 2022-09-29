import React from 'react';
import './sidebar.css';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='sidebar-grid'>
                <button className='project-card'>
                    project 1
                </button>
                <button className='project-card'>
                    project 1
                </button>
            </div>
        );
    }
}