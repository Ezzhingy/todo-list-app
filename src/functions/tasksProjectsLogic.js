export function project () {
    const allTodos = [];

    const addTodo = todo => {
        allTodos.push(todo);
    }
    const getTodo = () => {
        return allTodos;
    }

    const removeTodo = index => {
        allTodos.splice(index, 1);
    }

    const numTodos = () => {
        return allTodos.length;
    }

    return {addTodo, getTodo, removeTodo, numTodos};
}

export function todo (taskName, dueDate, priority, description, index) {
    return {taskName, 
            dueDate, 
            priority, 
            description,
            index
    };
}