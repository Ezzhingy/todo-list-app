import React from 'react';
import { Sidebar } from './components/sidebar/Sidebar';
import Modal from "./components/project-modal/ProjectModal";
import useModal from './hooks/useModal';

import './app.css';

const App = () => {

  const {isShowing, toggle} = useModal();
  return (
    <div className="App">
      <div className='body-grid'>
        <div className='sidebar-container'>
          <h1>projects</h1>
          <div className='sidebar-grid'>
            <Sidebar />
          </div>
          <button className="add-project-btn" onClick={toggle}>+ add new project</button>
          <Modal
            isShowing={isShowing}
            hide={toggle}
          />
        </div>
      
        <div className='main-container'>
          <div className='main-grid'>

          </div>
          <button className='add-task-btn'>+ add a task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
