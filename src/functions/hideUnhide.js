export function hideUnhide (e) {
    if (e.target.id === 'closed') {
        const open = document.querySelector('.down');
        const closed = document.querySelector('.right');
        const proTaskbar = document.querySelector('.pro-taskbar');

        open.style.display = 'block';
        closed.style.display = 'none';
        proTaskbar.style.display = 'block'

    } else if (e.target.id === 'open') {
        const open = document.querySelector('.down');
        const closed = document.querySelector('.right');
        const proTaskbar = document.querySelector('.pro-taskbar');

        open.style.display = 'none';
        closed.style.display = 'block';
        proTaskbar.style.display = 'none'
    }
}

