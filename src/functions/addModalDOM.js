export function showModal (e) {
    const spans = document.querySelectorAll(".close");
    const addBtns = document.querySelectorAll('.add-task');
    const addProjectBtn = document.querySelector('.add-pro');

    if (e.target.className === 'new-task') {
        const newTask = e.target;
        addTask(newTask);
    }

    if (e.target.className === 'new-pro') {
        addProject();
    }

    spans.forEach(span => {
        span.addEventListener('click', closeModal);
    });
    addBtns.forEach(addBtn => {
        addBtn.addEventListener('click', closeModal);
    });
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

function addTask (newTask) {
    const body = document.querySelector('body');
    const modal = newTask.nextElementSibling;
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

function addProject () {
    const body = document.querySelector('body');
    const modal = document.querySelector('#modal-pro');
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}