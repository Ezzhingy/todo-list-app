import { Sidebar } from './components/sidebar/Sidebar';
import { Main } from './components/main/Main';
import { ProjectModal, TaskModal } from "./components/project-modal/ProjectModal";
import { useModalProject, useModalTask } from './hooks/useModal';

import './app.css';

import { useRef, useState } from 'react';

const App = () => {

  const [foo, setFoo] = useState(0);
  const titleRef = useRef(null);
  const {isShowingProject, toggleProject} = useModalProject();
  const {isShowingTask, toggleTask} = useModalTask();

  return (
    <div className="App">
      <div className='body-grid'>
        <div className='sidebar-container'>
          <h1>projects</h1>
          <Sidebar 
            foo={foo}
            setFoo={setFoo}
          />
          <button className="add-project-btn" onClick={toggleProject}>+ add new project</button>
          <ProjectModal
            isShowing={isShowingProject}
            hide={toggleProject}
          />
        </div>
      
        <div className='main-container'>
          <h1 ref={titleRef} className='title'>todo list</h1>
          <Main titleRef={titleRef}/>
          <button className='add-task-btn' onClick={toggleTask}>+ add a task</button>
          <TaskModal
            isShowing={isShowingTask}
            hide={toggleTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
