export function populateStorage (projects) {
    const newProjects = {};
    const projectTitles = [];
    for (let [index, project] of Object.entries(projects)) {
        const arrayProject = project.getTodo();

        newProjects[index] = arrayProject;
        projectTitles.push(project.title);
    }
    localStorage.setItem('projects', JSON.stringify(newProjects));

    localStorage.setItem('title', projectTitles);
}

export function retrieveStorage () {
    const getProjects = localStorage.getItem('projects');
    return JSON.parse(getProjects);    
}

export function retrieveTitles () {
    const getTitles = localStorage.getItem('title');
    return getTitles;
}