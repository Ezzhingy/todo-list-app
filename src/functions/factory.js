export function project (title) {
    const taskArray = [];

    return {title, taskArray};
}

export class allProjects {
    static projectObj = {};
}

export function task (title, date, priority, description, hash) {
    return {title, date, priority, description, hash};
}

export class allTasks {
    static allTasksArray = [];
    static count = 0;
}



