export function showNewProject (info) {
    const mainContainer = document.querySelector('.main-container');

    const proContainerNode = Array.from(document.querySelectorAll('.pro-container')).pop();
    const cloneProContainer = proContainerNode.cloneNode(true);

    const title = cloneProContainer.querySelector('h1');
    title.innerText = info;

    const currentClass = cloneProContainer.className.split(' ')[1];
    const newClass = currentClass + 1;
    cloneProContainer.classList.remove(currentClass)
    cloneProContainer.classList.add(newClass);
    const addTaskFake = cloneProContainer.querySelector('.add-task');
    const newData = +addTaskFake.getAttribute('data-key') + 1;
    addTaskFake.setAttribute('data-key', newData);

    const proContent = cloneProContainer.querySelector('.pro-content');
    proContent.innerHTML = '';

    const proTaskbar = cloneProContainer.querySelector('.pro-taskbar');
    const down = cloneProContainer.querySelector('.down');
    const right = cloneProContainer.querySelector('.right');
    down.style.display = 'block';
    proTaskbar.style.display = 'block';
    right.style.display = 'none';

    mainContainer.appendChild(cloneProContainer);


}