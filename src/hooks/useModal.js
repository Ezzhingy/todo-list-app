import { useState } from 'react';


const useModalProject = () => {
  const [isShowingProject, setIsShowing] = useState(false);

  function toggleProject() {
    setIsShowing(!isShowingProject);
  }

  return {
    isShowingProject,
    toggleProject,
  }
};

const useModalTask = () => {
  const [isShowingTask, setIsShowing] = useState(false);

  function toggleTask() {
    setIsShowing(!isShowingTask);
  }

  return {
    isShowingTask,
    toggleTask,
  }
};

export { useModalProject, useModalTask };