export function hideUnhide (e) {
    if (e.target.id === 'closed') {
        const proClass = e.target.parentElement.parentElement.className.split(' ')[1];
        const open = document.querySelector(`.${proClass} .down`);
        const closed = document.querySelector(`.${proClass} .right`);
        const proTaskbar = document.querySelector(`.${proClass} .pro-taskbar`);

        open.style.display = 'block';
        closed.style.display = 'none';
        proTaskbar.style.display = 'block';

    } else if (e.target.id === 'open') {
        const proClass = e.target.parentElement.parentElement.className.split(' ')[1];
        const open = document.querySelector(`.${proClass} .down`);
        const closed = document.querySelector(`.${proClass} .right`);
        const proTaskbar = document.querySelector(`.${proClass} .pro-taskbar`);

        open.style.display = 'none';
        closed.style.display = 'block';
        proTaskbar.style.display = 'none';
    }
}

