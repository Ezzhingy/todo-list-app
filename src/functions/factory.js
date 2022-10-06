export function project (title) {
    const taskArray = [];

    return {title, taskArray};
}

export class allProjects {
    static projectObj = {};
}

export function task (title, date, priority, description) {
    return {title, date, priority, description};
}

export class allTasks {
    static allTasksArray = [];
}