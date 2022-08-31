export function hideUnhidePro (e) {
    if (e.target.id === 'closed-a') {
        const proClass = e.target.parentElement.parentElement.className.split(' ')[1];
        const open = document.querySelector(`.${proClass} .down`);
        const closed = document.querySelector(`.${proClass} .right`);
        const proTaskbar = document.querySelector(`.${proClass} .pro-taskbar`);

        open.style.display = 'block';
        closed.style.display = 'none';
        proTaskbar.style.display = 'block';

    } else if (e.target.id === 'open-a') {
        const proClass = e.target.parentElement.parentElement.className.split(' ')[1];
        const open = document.querySelector(`.${proClass} .down`);
        const closed = document.querySelector(`.${proClass} .right`);
        const proTaskbar = document.querySelector(`.${proClass} .pro-taskbar`);

        open.style.display = 'none';
        closed.style.display = 'block';
        proTaskbar.style.display = 'none';
    } 
}

export function hideUnhideTask (e) {
    if (e.target.id === 'closed') {
        const taskClass = e.target.parentElement.parentElement;
        const open = taskClass.querySelector(`.down`);
        const closed = taskClass.querySelector(`.right`);
        const description = taskClass.nextElementSibling.querySelector(`.description`);

        open.style.display = 'block';
        closed.style.display = 'none';
        description.style.display = 'block';

    } else if (e.target.id === 'open') {
        const taskClass = e.target.parentElement.parentElement;
        const open = taskClass.querySelector(`.down`);
        const closed = taskClass.querySelector(`.right`);
        const description = taskClass.nextElementSibling.querySelector(`.description`);
        
        open.style.display = 'none';
        closed.style.display = 'block';
        description.style.display = 'none';
    }
}