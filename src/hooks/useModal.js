import { useState } from "react";

import { checkSignedInWithMessage } from "../components/firebase/firebase-config";

const useModalProject = () => {
  const [isShowingProject, setIsShowing] = useState(false);

  function toggleProject() {
    if (checkSignedInWithMessage()) {
      setIsShowing(!isShowingProject);
    }
  }

  return {
    isShowingProject,
    toggleProject,
  };
};

const useModalTask = () => {
  const [isShowingTask, setIsShowing] = useState(false);

  function toggleTask() {
    if (checkSignedInWithMessage()) {
      setIsShowing(!isShowingTask);
    }
  }

  return {
    isShowingTask,
    toggleTask,
  };
};

export { useModalProject, useModalTask };
