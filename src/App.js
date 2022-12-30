import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./components/main/Main";
import {
  ProjectModal,
  TaskModal,
} from "./components/project-modal/ProjectModal";
import { useModalProject, useModalTask } from "./hooks/useModal";
import { allProjects } from "./functions/factory";
import { loadTodo } from "./components/firebase/firebase-config";

import "./app.css";

import { useRef, useState, useEffect } from "react";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const App = () => {
  const [foo, setFoo] = useState(0);

  const titleRef = useRef(null);
  const { isShowingProject, toggleProject } = useModalProject();
  const { isShowingTask, toggleTask } = useModalTask();

  function signOutUser() {
    signOut(getAuth());
    const mainGrid = document.querySelector(".main-grid");
    const sidebarGrid = document.querySelector(".sidebar-grid");
    const title = document.querySelector(".title");
    mainGrid.classList.add("hide");
    sidebarGrid.classList.add("hide");
    title.innerText = "todo list";
  }

  async function signIn() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
    onAuthStateChanged(getAuth(), function (user) {
      if (user) {
        allProjects.userID = user.uid;
        console.log("asdsa", user.uid);
      }
    });

    const mainGrid = document.querySelector(".main-grid");
    const sidebarGrid = document.querySelector(".sidebar-grid");
    mainGrid.classList.remove("hide");
    sidebarGrid.classList.remove("hide");
  }

  useEffect(() => {
    async function openLoad() {
      try {
        onAuthStateChanged(getAuth(), async function (user) {
          if (user) {
            // User is signed in.
            allProjects.userID = user.uid;
            const data = await loadTodo(user.uid);
            const getProjects = data !== undefined ? data.allProjects : {};
            for (let project in getProjects) {
              if (getProjects[project].taskArray.length > 0) {
                for (
                  let i = 0;
                  i < getProjects[project].taskArray.length;
                  i++
                ) {
                  let tempDate = getProjects[project].taskArray[i].date;
                  const actualDate = new Date(tempDate.seconds * 1000);
                  getProjects[project].taskArray[i].date = actualDate;
                }
              }
            }
            allProjects.projectObj = getProjects;
            setFoo(foo + 1);
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
    openLoad();
  }, []);

  return (
    <div className="App">
      <div className="body-grid">
        <div className="sidebar-container">
          <h1>projects</h1>
          <Sidebar foo={foo} setFoo={setFoo} />
          <button className="add-project-btn" onClick={toggleProject}>
            + add new project
          </button>
          <ProjectModal isShowing={isShowingProject} hide={toggleProject} />
        </div>

        <div className="main-container">
          <div id="user-container">
            <div hidden id="user-pic"></div>
            <div id="user-name" className="hide"></div>
            <button hidden id="sign-out" onClick={signOutUser}>
              Sign-out
            </button>
            <button id="sign-in" onClick={signIn}>
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path d="M11.1 35.25q3.15-2.2 6.25-3.375Q20.45 30.7 24 30.7q3.55 0 6.675 1.175t6.275 3.375q2.2-2.7 3.125-5.45Q41 27.05 41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 3.05.95 5.8t3.15 5.45ZM24 25.5q-2.9 0-4.875-1.975T17.15 18.65q0-2.9 1.975-4.875T24 11.8q2.9 0 4.875 1.975t1.975 4.875q0 2.9-1.975 4.875T24 25.5ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.775t4.3-6.35q2.725-2.725 6.375-4.3Q19.9 4 24 4q4.15 0 7.775 1.575t6.35 4.3q2.725 2.725 4.3 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.3 6.375-2.725 2.725-6.35 4.3Q28.15 44 24 44Zm0-3q2.75 0 5.375-.8t5.175-2.8q-2.55-1.8-5.2-2.75-2.65-.95-5.35-.95-2.7 0-5.35.95-2.65.95-5.2 2.75 2.55 2 5.175 2.8Q21.25 41 24 41Zm0-18.5q1.7 0 2.775-1.075t1.075-2.775q0-1.7-1.075-2.775T24 14.8q-1.7 0-2.775 1.075T20.15 18.65q0 1.7 1.075 2.775T24 22.5Zm0-3.85Zm0 18.7Z" />
              </svg>
              Sign-in with Google
            </button>
          </div>
          <ul className="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <h1 ref={titleRef} className="title">
            todo list
          </h1>
          <Main titleRef={titleRef} />
          <button className="add-task-btn" onClick={toggleTask}>
            + add a task
          </button>
          <TaskModal isShowing={isShowingTask} hide={toggleTask} />
        </div>
      </div>
      <div className="footer">
        <p>
          Copyright © <a href="https://github.com/Ezzhingy">Ezzhingy</a> 2022
        </p>
      </div>
    </div>
  );
};

export default App;
