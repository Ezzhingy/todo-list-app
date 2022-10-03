import React from 'react';
import ReactDOM from 'react-dom';
import './project-modal.css';

import { project, allProjects } from '../../functions/factory';



const Modal = ({ isShowing, hide }) => {
    
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

export default Modal;