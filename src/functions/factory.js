export function project (title, hash) {
    const taskArray = [];

    return {title, taskArray, hash};
}

export class allProjects {
    static projectObj = {};
    static count = 0;
}

export function task (title, date, priority, description, hash) {
    return {title, date, priority, description, hash};
}

export class allTasks {
    static allTasksArray = [];
    static count = 0;
}




