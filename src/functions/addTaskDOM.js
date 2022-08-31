import starFill from '../images/star-fill.svg';
import starOutline from '../images/star-outline.svg';
import removeImg from '../images/delete.svg';

import { format } from 'date-fns';

export function getTaskInfo (e) {
    const parent = e.target.parentElement.parentElement;
    const taskName = parent.querySelector('#task-name').value;
    const dueDate = parent.querySelector('#due-date').value;
    const prio = parent.querySelector('input[name="prio"]:checked').value;
    const description = parent.querySelector('#description').value;

    return {'taskName':taskName, 
            'dueDate':dueDate,
            'prio':prio,
            'description':description
    };
}

export function showNewTask (arrayTasks, project) {
    const content = document.querySelector(`[data-value="${project}"]`);
    content.innerHTML = '';

    for (let task of arrayTasks) {

        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.classList.add('check');
        td1.appendChild(checkBox);
    
        const td2 = document.createElement('td');
        td2.innerText = task.taskName;

        const td3 = document.createElement('td');
        const date = format(task.dueDate, 'MMM dd yyyy');
        td3.innerText = date;

        const td4 = document.createElement('td');
        const priority = document.createElement('img');
        priority.classList.add('star-img');
        if (task.priority === 'yes') {
            priority.src = starFill;
        } else {
            priority.src = starOutline;
        }
        td4.appendChild(priority);

        const td5 = document.createElement('td');
        const remove = document.createElement('img');
        remove.classList.add('remove-img');
        remove.src = removeImg;
        td5.appendChild(remove);

        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td1);
        content.appendChild(tr);
        
        // row.appendChild(descriptionContainer);
    }
}