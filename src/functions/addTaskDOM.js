export function showModal () {
    const spans = document.querySelectorAll(".close");
    const addBtn = document.querySelector('.add-task');
    const addProjectBtn = document.querySelector('.add-pro');

    const newTask = document.querySelector('.new-task');
    const newProject = document.querySelector('.new-pro');


    newTask.addEventListener('click', addTask);
    newProject.addEventListener('click', addProject);

    spans.forEach(span => {
        span.addEventListener('click', closeModal);
    });
    addBtn.addEventListener('click', closeModal);
    addProjectBtn.addEventListener('click', closeModal);
    window.addEventListener('click', closeModalW);
}

function closeModalW (e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            const body = document.querySelector('body');
            modal.style.display = 'none';
            body.style.overflow = 'auto';
        }
    });
}

function closeModal () {
    const body = document.querySelector('body');
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    });
}

function addTask () {
    const body = document.querySelector('body');
    const modal = document.querySelector('#modal-task');
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

function addProject () {
    const body = document.querySelector('body');
    const modal = document.querySelector('#modal-pro');
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

export function getTaskInfo () {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const prio = document.querySelector('input[name="prio"]:checked').value;
    const description = document.getElementById('description').value;

    document.querySelector(".task-form").reset();
    return {'taskName':taskName, 
            'dueDate':dueDate,
            'prio':prio,
            'description':description
    };
}

export function getProjectInfo () {
    const projectName = document.getElementById('pro-name').value;
    
    return projectName;
}