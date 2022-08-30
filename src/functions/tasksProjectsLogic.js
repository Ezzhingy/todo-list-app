export function project () {
    const allTodos = [];
    const addTodo = todo => {
        allTodos.push(todo);
    }
    const getTodo = () => {
        return allTodos;
    }
    return {addTodo, getTodo};
}

export function todo (taskName, dueDate, priority, description) {
    return {taskName, dueDate, priority, description};
}